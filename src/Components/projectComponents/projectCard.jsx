import Styles from "./projectCard.module.css";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import Collaborators from "@/lib/UIComponents/collaborators";
import { Size } from "@/lib/UIComponents/uiCommon";
import { Chip } from "@/lib/techStackChips/techStackChips";
import Link from 'next/link';

export default async function ProjectCard({ projectData }){
    const glowColor = projectData?.color ?? "grey";

    const collaborators = [];
    projectData.team?.forEach(personData => {
        const colabData = {
            avatarImageUrl: personData.person?.avatarImage?.asset?.url
        };
        if(colabData == undefined)
            return;
        collaborators.push(colabData);
    });

    const previewImageUrl = projectData.previewImage?.asset?.url;
    const previewAnimationUrl = projectData.previewAnimation?.asset?.url ?? previewImageUrl;
    
    return (
        <div className={Styles.projectCardWrapper}>
            <div className={Styles.glowEffect} style={{background: `radial-gradient(circle, ${glowColor}, transparent)`}}/>
            <Link href={`/projectDetails?id=${projectData.id.current}`}>
                <div className={Styles.projectCard}>
                    <div className={Styles.projectBanner}>
                        {/* <div className={Styles.overlay} style={{backgroundColor: hexToRGBA(glowColor, 0.1)}}>
                            <ActionButton variant={Variant.DEFAULT}>View project</ActionButton>
                        </div> */}
                        {previewImageUrl && <Image className={Styles.image} style={{objectFit: "cover"}} src={previewImageUrl} alt="" sizes={"auto"} fill/>}
                        {/* TODO: Optimize animation loading */}
                        {previewAnimationUrl && <Image className={`${Styles.overlay} ${Styles.overlayAnimation}`} style={{objectFit: "cover"}} src={previewAnimationUrl} alt="" sizes={"auto"} fill/>}
                    </div>
                    <div className={`${Styles.projectDescription} u-margin-s`}>
                        <div className="u-layout_flex-row u-layout_flex-space-between-center">
                            <div className="u-layout_flex-row u-layout_flex-start-center gap-l">
                                {collaborators.length > 0 && <Collaborators style={{opacity: "0.8"}} size={Size.XS} collaborators={collaborators}/>}
                                <h4 className="u-text-secondary">{projectData.title}</h4>
                            </div>
                            {projectData.techStack && (
                                <div className="u-layout_flex-row u-layout_flex-start-center" style={{opacity: "0.65"}}>
                                    {projectData.techStack.map((el, id) => {
                                        return <Chip key={id} icon={el.icon.asset.url}/>;
                                    })}
                                </div>
                            )}
                        </div>

                        {/* <div className="u-layout_flex-row u-layout_flex-space-between-center" style={{opacity: "0.7"}}>
                            {projectData.techStack && (
                                <div className="u-layout_flex-row u-layout_flex-start-center">
                                    {projectData.techStack.map((el, id) => {
                                        return <Chip key={id} icon={el.icon.asset.url}/>;
                                    })}
                                </div>
                            )}

                            {projectData.platforms && (
                                <div className="u-layout_flex-row u-layout_flex-start-center">
                                    {projectData.platforms.map((el, id) => {
                                        return <Chip key={id} icon={el.icon.asset.url}/>;
                                    })}
                                </div>
                            )}
                        </div> */}
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