'use client';
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

import Styles from "./allProjects.module.css";
import { Suspense } from 'react'
import Fade from "@/lib/UIComponents/fadeIn";
import ProjectList, { ProjectListLoading } from "./projectComponents/projectList";
import { gql, useSuspenseQuery } from "@apollo/client";
import apolloServerClient from "@/lib/apollo/apolloServerClient";

export default function AllProjectsSection() {
    return (
        <div className={Styles.base}>
            <h2>Projects</h2>
            <Suspense fallback={(
                 <div className={Styles.projectsGrid}>
                    <ProjectListLoading/>
                </div>
            )}>
                <Fade className={Styles.projectsGrid}>
                    <AllProjectsList />
                </Fade>
            </Suspense>
        </div>
    )
}

function AllProjectsList() {
    const { data: dataRes } = useSuspenseQuery(GET_PROJECTS, {
        returnPartialData: true
    });

    return (
        <ProjectList allProjects={dataRes?.allProject ?? []}/>
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