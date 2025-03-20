import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from 'remark-gfm';
import Button from '@/lib/UIComponents/Button';
import Styles from "./markdown.module.css";

// https://mdxjs.com/playground/
// https://mdxjs.com/table-of-components/

/**
 * Renders Markdown content with optional images using imageSet.
 * @param {Object} params - Options object for rendering Markdown.
 * @param {string} params.rawSource - The raw Markdown source to render.
 * @param {Map<string, string>} params.imageMap - Map where keys are strings representing image names and values are their corresponding paths.
 */
export default function Markdown({ rawSource, imageMap }) {
    const [mdxSource, setMdxSource] = useState(null);

    // Serialization
    useEffect(() => {
        
        async function processMDX() {
        const serialized = await serialize(rawSource, {
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
        });
        setMdxSource(serialized);
        }

        processMDX();
    }, [rawSource]);

    if (!mdxSource) return <p>Loading...</p>;

    return (
        <div className={`${Styles.markdown} u-layout_flex-column gap-l`}>
            <MDXRemote {...mdxSource} components={{ 
                Button, 
                Image: (props) => <Image {...props} imageMap={imageMap} /> 
            }} />
        </div>
    )
}

/**
 * Renders Markdown content with optional images using imageSet.
 * @param {Object} params - Options object for rendering Markdown..
 * @param {Number} params.width
 * @param {Number} params.height
 * @param {String} params.alt
 * @param {String} params.title
 * @param {Map<string, string>} params.imageMap - Map where keys are strings representing image names and values are their corresponding paths.
 */
function Image({width=256, height=256, alt="", title="", imageMap}){
    if(imageMap == undefined)
        return;

    console.log("imageMap", typeof imageMap);
    

    const src = imageMap.get(alt);
    if(src == undefined || src == "")
        return;

    return <img src={src} width={width} title={title} alt={alt} style={{maxWidth: "100%", aspectRatio: width / height, objectFit: "cover"}}/>
    
    // const cleanSrc = src.slice(0, -4) + '.' + src.slice(-3);
    // const imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${cleanSrc}`
    // return <img src={imageUrl} width={width} title={title} alt={alt} style={{maxWidth: "100%", aspectRatio: width / height, objectFit: "cover"}}/>
}