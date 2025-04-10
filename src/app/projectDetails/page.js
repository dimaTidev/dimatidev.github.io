'use client';
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

import StylesCommon from "@/app/page.module.css";
import Styles from "./page.module.css";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import { Suspense } from "react";
import { TeamSection } from "@/Components/teamSection";
import { Chip } from "@/lib/techStackChips/techStackChips";
import SwiperGallery from "./swiperGallery";
import ShowMoreSection from "@/Components/showMoreSection";
import Markdown from "./markdown";
import Image from "next/image";
import Collaborators from "@/lib/UIComponents/collaborators";
import Spacer, { SizeSpacer } from "@/lib/UIComponents/Spacer";
import Skeleton from "react-loading-skeleton";
import { gql, useSuspenseQuery } from "@apollo/client";
import Fade from "@/lib/UIComponents/fadeIn";
import Callout from "@/lib/UIComponents/callout";
import apolloServerClient from "@/lib/apollo/apolloServerClient";
import ChipGroup from "@/lib/techStackChips/chipsGroup";
import { Alert, AlertTitle, Button, Link, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { useSearchParams } from 'next/navigation'

// To test markdown
// const testMarkdown = `
// `

export default function ProjectDetailsPage() {
    return(
        <Suspense fallback={<PageLoading/>}>
            <Fade>
                <Page/>
            </Fade>
        </Suspense>
    )
}

function PageLoading(){
    return (
        <>
            <div className={StylesCommon.pageWrapper}>
                <div className={StylesCommon.page}>

                    <div className={`${StylesCommon.leftSidePanel} ${Styles.leftSidePanel}`}>
                        <div className="u-layout_flex-column gap-l" style={{position: "sticky", top: "20px"}}>
                            <Skeleton style={{height: "150px"}}/>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton style={{width: "80%"}}/>
                        </div>
                    </div>
                    
                    <div className={StylesCommon.mainPanel}>
                        <div className={Styles.main}>
                            <Skeleton style={{height: "600px"}}/>
                            <div className="u-layout_flex-column gap-l">
                                <Skeleton/>
                                <Skeleton />
                                <Skeleton style={{width: "80%"}}/>
                            </div>   
                                                    
                            <div className="u-layout_flex-column gap-l">
                                <Skeleton/>
                                <Skeleton />
                                <Skeleton style={{width: "80%"}}/>
                            </div>
                            
                            <div>
                                <div className="u-layout_flex-column gap-l" style={{width: "128px"}}>
                                    <Skeleton circle={true} style={{width: "128px", height: "128px"}}/>
                                    <Skeleton />
                                    <Skeleton style={{width: "80%"}}/>
                                </div> 
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </>
    );
}

function Page(){
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const { data: dataRes } = useSuspenseQuery(GET_PROJECT, {
        variables: { projectId: id },
        returnPartialData: true,
        skip: !id, // Prevents query from running if id is undefined
    });

    const queryData = dataRes;

    // TODO: return 404
    if (!queryData || queryData.allProject?.length == 0) return <p>404</p>;

    const data = queryData.allProject[0];

    const collaborators = [];
    data.team?.forEach(member => {
        collaborators.push({avatarImageUrl: member.person.avatarImage.asset.url});
    });

    const platforms = data.platforms?.map(platform => {
        return {imageUrl: platform.icon.asset.url}
    });

    const techStack = data.techStack?.map(tech => {
        return {
            imageUrl: tech.icon.asset.url,
            title: tech.title
        }
    });

    const teamMembers = data.team?.map(member => {
        return {
            fullName: member.person.fullName,
            avatarImageUrl: member.person.avatarImage.asset.url,
            positions: [member.position],
            socialLinks: member.person.socialLinks
        }
    });

    const galleryScreenshots = data.videoLinks?.map(link => {
        return link
    }) ?? [];
    
    const screenshotUrls = data.galleryScreenshots?.map(screenshot => {
        return screenshot.asset.url
    });

    if(screenshotUrls){
        galleryScreenshots.push(...screenshotUrls);
    }
    
    // const combinedMarkdown = testMarkdown;
    const combinedMarkdown = data.postRaw?.map(block => {
        return block.children.map(child => child.text).join('');
    }).join('\n\n'); // Separate blocks with double newline for proper Markdown rendering

    // Convert the array to a Map
    const imageMap = new Map(data.postImages?.map(item => [item.alt, item.image.asset.url]));
    

    return (
        <>
            <div className={StylesCommon.pageWrapper}>
                <div className={StylesCommon.page}>
                    <div className={`${StylesCommon.leftSidePanel} ${Styles.leftSidePanel}`}></div>

                    <div className={StylesCommon.mainPanel}>
                        <div className="u-layout_flex-column gap-m">
                            <Typography variant="h4" style={{marginTop: "auto"}}>{data.title}</Typography>
                            {/* <Link href="www.google.com" className="u-layout_flex-row gap-m">
                                www.google.com 
                                <ArrowOutward fontSize="medium"/>
                            </Link> */}
                        </div>
                    </div>

                </div>
            </div>

            <Spacer size={SizeSpacer.M}/>

            <div className={StylesCommon.pageWrapper}>
                <div className={StylesCommon.page}>

                    <div className={`${StylesCommon.leftSidePanel} ${Styles.leftSidePanel}`}>
                        <AboutProject 
                            projectData={{
                                previewImageUrl: data.previewImage?.asset.url,
                                collaborators: collaborators,
                                platforms: platforms,
                                techStack: techStack
                            }}
                            style={{position: "sticky", top: "20px"}}>
                            <Spacer size={SizeSpacer.S}/>
                            {/* {data.callOut && <Callout variant={Variant.WARNING}>{data.callOut}</Callout>} */}
                            {data.callOut && (
                                <Alert variant="outlined" severity="info">
                                    <AlertTitle>Info</AlertTitle>
                                    {data.callOut}
                                </Alert>
                            )}
                        </AboutProject>
                    </div>
                    
                    <div className={StylesCommon.mainPanel}>
                        <div className={Styles.main}>
                            {/* {data.callOut && <Callout variant={Variant.WARNING}>{data.callOut}</Callout>} */}
                            
                            {galleryScreenshots && galleryScreenshots.length > 0 && 
                                <ScreenshotSection projectData={{screenshots: galleryScreenshots}}/>
                            }
                            
                            <div style={{ whiteSpace: 'pre-line' }}>{data.description}</div>   
                                                    
                            {combinedMarkdown && (
                                <ShowMoreSection>
                                    <div>
                                        <Markdown rawSource={combinedMarkdown} imageMap={imageMap}/>
                                    </div>
                                </ShowMoreSection>
                            )}
                            
                            <TeamSection teamMembers={teamMembers}/>
                        </div>
                    </div> 

                </div>
            </div>
        </>
    );
}

/**
 * @param {Object} params 
 * @param {*} params.children 
 * @param {Object} params.projectData 
 * @param {string} params.projectData.previewImageUrl
 * @param {Array<{avatarImageUrl: string}>} params.projectData.collaborators
 * @param {Array<{imageUrl: string}>} params.projectData.platforms
 * @param {Array<{imageUrl: string, title: string}>} params.projectData.techStack
 */
function AboutProject({children, projectData, ...params}){

    return (
        <>
            <div className="u-layout_flex-column gap-l" {...params}>
                <div className={Styles.projectThumbnailWrapper}>
                    {projectData?.previewImageUrl && <Image className={Styles.projectThumbnail} src={projectData.previewImageUrl} alt="" sizes={"auto"} fill/>}
                </div>
                {/* <p>Project ID: {id}</p> */}
                <Spacer size={SizeSpacer.XXS}/>
                <hr/>

                {projectData.platforms && (
                    <>
                        <div className={Styles.projectLabelInfo}>
                        <p className="u-text-secondary">Platforms</p>
                            <div className="u-layout_flex-row u-layout_flex-start-center gap-xs">
                                {projectData.platforms.map((el, id) => {
                                    return <Chip key={id} size="large" icon={el.imageUrl} isQuiet={true}/>;
                                })}
                            </div>
                        </div>
                        <hr/>
                    </>
                )}


                {projectData.collaborators && (
                    <>
                        <div className={Styles.projectLabelInfo}>
                        <p className="u-text-secondary">Team</p>
                            {projectData.collaborators.length > 0 && <Collaborators size={Size.XS} collaborators={projectData.collaborators}/>}
                        </div>
                        <hr/>
                    </>
                )}

                {projectData.techStack && (
                    <>
                        <div className="u-layout_flex-row u-layout_flex-space-between-center gap-m">
                            <div className="u-text-secondary">Stack</div>
                            <ChipGroup compact="medium">
                                {projectData.techStack.map((el, id) => {
                                    return <Chip key={id} size="large" icon={el.imageUrl} isQuiet={true}/>;
                                })}
                            </ChipGroup>
                        </div>
                        <hr/>
                    </>
                )}

               

                {/* {projectData?.links?.githubUrl && 
                    // TODO: make the project links work
                    <>
                        <Spacer size={SizeSpacer.XXS}/>
                        <a href={projectData.links.githubUrl} target="_blank">
                            <Button variant={Variant.SECONDARY} size={Size.S} style={{width: "100%"}}>
                                <div className="u-layout_flex-row u-layout_flex-start-center gap-m">
                                    <div className={`fa fa-github fa-lg`}/>
                                    <div>Project repo</div>
                                </div>
                            </Button>
                        </a>
                    </>
                } */}

                {children}

            </div>
        </>
    );
}

function ScreenshotSection({projectData}){
    const glowColor = projectData?.color ?? "white";

    const items = [...projectData.screenshots];

    return (
        <div className={`${Styles.screenshotsSection} u-prevent-select`}>
            <div className={Styles.mainScreenshotWrapper}>
                <div className={Styles.glowEffect} style={{background: `radial-gradient(circle, ${glowColor}, transparent)`}}/>
                <SwiperGallery items={items}/>
            </div>
        </div>  
    )
}

const GET_PROJECT = gql`
  query GetProjectDetails($projectId: String){
    allProject(where: { id: { current: { eq: $projectId } } }) {
        title
        description
        team {
            position
            person {
                fullName
                socialLinks
                email
                avatarImage {
                    asset {
                        url
                    }
                }
            }
        }    
        postRaw
        postImages
        previewImage {
            asset {
            url
            }
        }
        techStack {
            title
            icon {
            asset {
                url
            }
            }
        }
        platforms {
            icon {
            asset {
                url
            }
            }
        }
        videoLinks
        galleryScreenshots {
            asset {
                url
            }
        }
        callOut
    }
  }
`;