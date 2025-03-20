'use client'

import Styles from "./allProjects.module.css";
import { Suspense } from 'react'
import Image from "next/image";
import Collaborators from "@/lib/UIComponents/collaborators";
import { Size } from "@/lib/UIComponents/uiCommon";
import { Chip } from "@/lib/techStackChips/techStackChips";
import Link from 'next/link';
import { gql, useSuspenseQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import Fade from "@/lib/UIComponents/fadeIn";
import Spacer, { SizeSpacer } from "@/lib/UIComponents/Spacer";

// TODO: add error check if there is no variable on remote then catch the error

const GET_PROJECTS = gql`
  query GetAllProjects{
    allProject(sort: [{ orderRank: ASC }]){
        id{
            current
        }
        title
        team{
            person{
                avatarImage{
                    asset{
                       url 
                    }
                }
            }
        }
        previewImage{
          asset{
            url
          }
        }
        previewAnimation{
          asset{
            url
          }
        }
        techStack{
            title
            icon{
                asset{
                    url
                }
            }
        }
        platforms{
            icon{
                asset{
                    url
                }
            }
        }
    }
  }
`;

export default function AllProjects() {
    return (
        <div className={Styles.base}>
            <h2>Projects</h2>
            <Suspense fallback={(
                 <div className={Styles.projectsGrid}>
                    <ProjectListLoading/>
                </div>
            )}>
                <Fade className={Styles.projectsGrid}>
                    <ProjectList/>
                </Fade>
            </Suspense>
        </div>
    )
}

function ProjectListLoading(){
    const allProjects = Array.from(Array(6).keys());
    return (
        <>
            {allProjects.map((el, id) => {
                return <ProjectCardLoading key={id}/>
            })}
        </>
    )
}

function ProjectCardLoading(){
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

function ProjectList(){
    const { data } = useSuspenseQuery(GET_PROJECTS, { returnPartialData: true });

    // console.log("allProjects data", JSON.stringify(data, undefined, 2));
    // return;
    
    const allProjects = data?.allProject ?? [];
    
    const projectsToDraw = allProjects.map((projectData, id) => {        
        return <ProjectCard key={id} projectData={projectData}/>;
    });

    return (
        <>
            {projectsToDraw}
        </>
    )
}

function ProjectCard({ projectData }){
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
        <div className={Styles.projectCardWrapper} onClick={() => console.log("clicked project card wrapper:", projectData.id.current)}>
            <div className={Styles.glowEffect} style={{background: `radial-gradient(circle, ${glowColor}, transparent)`}}/>
            <Link href={`/projectDetails?id=${projectData.id.current}`} onClick={() => console.log("clicked project link:", projectData.id.current)}>
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