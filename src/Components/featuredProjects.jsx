'use client'

import { FeaturedProjectsContext } from "@/data/projects/featuredProjectsContext";
import Styles from "./featuredProjects.module.css";
import { useContext } from 'react'
import Image from "next/image";
import ActionButton from "@/lib/UIComponents/ActionButton";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import Collaborators from "../lib/UIComponents/collaborators";
import { PeopleContext } from "@/data/people/peopleContext";
import { TechStackChip } from "@/lib/techStackChips/techStackChips";
import Link from "next/link";

export default function FeaturedProjects(params) {
    const featuredProjectsContext = useContext(FeaturedProjectsContext);

    return (
        <div className={Styles.base} {...params}>
            <FeaturedProject projectData={featuredProjectsContext?.projects?.[0]} style={{flexGrow: "1"}}/>
            {/* <div>Pagination</div> */}
        </div>
    )
}

function FeaturedProject({style, projectData}){
    const peopleContext = useContext(PeopleContext);
    const glowColor = projectData?.color ?? "white";

    const collaborators = [];
    projectData.collaborators.forEach(colabId => {
        const colabData = peopleContext.allPeople.get(colabId);
        if(colabData == undefined)
            return;
        collaborators.push(colabData);
    });
    
    return (
        <div className={Styles.main} style={{...style}}>
            <div className={Styles.bannerWrapper}>
                <div className={Styles.glowEffect} style={{background: `radial-gradient(circle, ${glowColor}, transparent)`}}/>
                <div className={Styles.banner}>
                    {projectData?.heroAnim && <Image className={Styles.image} src={projectData.heroAnim} alt="" sizes={"auto"} fill></Image>}
                </div>
            </div>

            <div className={Styles.smallBannersContainer}>
                <div className={Styles.descriptionBanner}>
                    <div className={Styles.description}>
                        <div className="u-layout_flex-row u-layout_flex-start-center gap-l">
                            {collaborators.length > 0 && <Collaborators size={Size.XS} collaborators={collaborators}/>}
                            <h2>{projectData.title}</h2>
                        </div>
                       
                       {projectData.description && (
                            <p className={Styles.descriptionText}>
                                {projectData.description}
                            </p>
                       )}
                       

                        {projectData.techStack && (
                            <div className="u-layout_flex-row u-layout_flex-start-center gap-m">
                                {projectData.techStack.map((el, id) => {
                                    return <TechStackChip key={id} tag={el}/>;
                                })}
                            </div>
                        )}
                        
                        <div style={{flexGrow: "1"}}></div>
                        <div className="u-layout_flex-row u-layout_flex-space-between-center">
                            <Link href={`/projectDetails?id=${projectData.id}`}>
                                <ActionButton size={Size.S} variant={Variant.SECONDARY}>View project</ActionButton>
                            </Link>
                            {projectData.platforms && (
                                <div className="u-layout_flex-row u-layout_flex-start-center gap-m">
                                    {projectData.platforms.map((el, id) => {
                                        return <TechStackChip key={id} tag={el} isWithoutLabel={true}/>;
                                    })}
                                </div>
                            )}
                        </div>
                       
                    </div>
                    {projectData?.screenshots?.[0] && <Image className={Styles.descriptionImageBackground} src={projectData.screenshots[0]} alt="" sizes={"auto"} fill></Image>}
                </div>

                <div className={Styles.smallBannerRow}>
                    <div className={Styles.smallBanner}>
                        {projectData?.screenshots?.[0] && <Image className={Styles.image} src={projectData.screenshots[0]} alt="" height={150} width={150}></Image>}
                    </div>
                    
                    <div className={Styles.smallBannerHalf}>
                        {projectData?.screenshots?.[0] && <Image className={Styles.image} src={projectData.screenshots[0]} alt="" height={150} width={150}></Image>}
                    </div>
                </div>

            </div>
        </div>
    )
}