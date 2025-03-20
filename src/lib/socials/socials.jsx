'use client'

import Styles from './social.module.css'

/**
 * @param {Object} props - Props object containing social media URLs.
 * @param {Array<string>} [props.linksArray] - URL for email.
 */
export default function Socials({
    linksArray = [],
    className,
    ...props
}) {
    const isVisible = linksArray.length > 0;

    const toDraw = linksArray.map((link, id) => {
        let url = link;
        let classNameId = "";
        let target = "_blank";

        if(link.includes("@")){
            classNameId = "fa-envelope-o";
            target = "";
            url= `mailto:${url}`;
        }else if(link.includes("linkedin.com")){
            classNameId = "fa-linkedin";            
        }else if(link.includes("github.com")){
            classNameId = "fa-github"; 
        }

        const clName = `fa ${classNameId} fa-lg ${Styles.socialButton}`;

        return <a key={id} href={url} className={clName} target={target}/>
    });

    return (
        <>
            {isVisible ? (
                <div className={`${Styles.container} ${className}`} {...props}>
                    {toDraw}
                </div>
            ) : <></>
            }
        </>
    )
}
