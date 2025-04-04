
import Styles from "./allProjects.module.css";
import { Suspense } from 'react'
import Fade from "@/lib/UIComponents/fadeIn";
import ProjectList, { ProjectListLoading } from "./projectComponents/projectList";
import { gql } from "@apollo/client";
import apolloServerClient from "@/lib/apollo/apolloServerClient";

export default async function AllProjectsSection() {
    const dataRes = await apolloServerClient.query({
        query: GET_PROJECTS,
    });

    // const { data } = useSuspenseQuery(GET_PROJECTS, { returnPartialData: true });

    return (
        <div className={Styles.base}>
            <h2>Projects</h2>
            <Suspense fallback={(
                 <div className={Styles.projectsGrid}>
                    <ProjectListLoading/>
                </div>
            )}>
                <Fade className={Styles.projectsGrid}>
                    <ProjectList allProjects={dataRes?.data?.allProject ?? []}/>
                </Fade>
            </Suspense>
        </div>
    )
}

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