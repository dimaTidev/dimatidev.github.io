import Styles from "./projectCard.module.css";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { Chip } from "@/lib/techStackChips/techStackChips";
import Link from 'next/link';
import { Typography } from "@mui/material";
import ChipGroup from "@/lib/techStackChips/chipsGroup";

export default async function ProjectCard({ projectData }){
    const glowColor = projectData?.color ?? "grey";

    const previewImageUrl = projectData.previewImage?.asset?.url;
    const previewAnimationUrl = projectData.previewAnimation?.asset?.url ?? previewImageUrl;
    
    return (
        <div className={Styles.projectCardWrapper}>
            <div className={Styles.glowEffect} style={{background: `radial-gradient(circle, ${glowColor}, transparent)`}}/>
            <Link href={`/projectDetails?id=${projectData.id.current}`}>
                <div className={Styles.projectCard}>
                    <div className={Styles.projectBanner}>
                        {previewImageUrl && <Image className={`${Styles.image}`} style={{objectFit: "cover"}} src={previewImageUrl} alt="" sizes={"auto"} fill/>}
                        {/* TODO: Optimize animation loading */}
                        {previewAnimationUrl && <Image className={`${Styles.overlay} ${Styles.overlayAnimation}`} style={{objectFit: "cover"}} src={previewAnimationUrl} alt="" sizes={"auto"} fill/>}
                    </div>
                    <div className={`${Styles.projectDescription} u-margin-s`}>
                        <div className="u-layout_flex-row u-layout_flex-space-between-center">
                            <Typography variant="body2" className={Styles.projectTitle}>{projectData.title}</Typography>
                            {projectData.techStack && (
                                <ChipGroup className="u-media-pc-only" style={{opacity: "0.65"}}>
                                    {projectData.techStack.map((el, id) => {
                                        return <Chip key={id} size="large" isQuiet icon={el.icon.asset.url}/>;
                                    })}
                                </ChipGroup>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
      )
}


export function ProjectCardLoading(){
    return (
        <div className={Styles.projectCardWrapper}>
            <div className={Styles.projectCard}>
                <div className={Styles.projectBanner}>
                    <Skeleton className={`${Styles.image} u-width-heigth-100perc`}/>
                </div>
                <div className={Styles.projectDescription}>
                    <div className="u-layout_flex-row u-layout_flex-start-center gap-l">
                        <h3 className="u-width-100perc">
                            <Skeleton containerClassName="u-width-heigth-100perc"/>
                        </h3>
                    </div>

                    <div className="u-layout_flex-row u-layout_flex-space-between-center gap-xl" style={{opacity: "0.7"}}>
                        <Skeleton containerClassName="u-width-heigth-100perc"/>
                        <Skeleton containerClassName="u-width-heigth-100perc"/>
                    </div>
                    
                </div>
            </div>
        </div>
      )
}