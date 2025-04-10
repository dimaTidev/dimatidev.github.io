'use client';
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages


import Styles from "./page.module.css";
import AboutMe, { AboutMeLoading } from "@/Components/aboutMe";
import AllProjectsSection from "@/Components/allProjectsSection";
import { Suspense } from "react";
import Fade from "@/lib/UIComponents/fadeIn";

export default function Home(){

  return (
    <>
      <div className={`${Styles.page}`}>
        <div className={Styles.leftSidePanel}>
          <Suspense fallback={<AboutMeLoading/>}>
            <Fade style={{height: "100%"}}>
              <AboutMe style={{position: "sticky", top: "20px"}}/>
            </Fade>
          </Suspense>
        </div>
        <div className={Styles.mainPanel}>
              {/* 
              // TODO: make the featured projects work
              <FeaturedProjects style={{flexShrink: "0"}}/> 
              */}
              <AllProjectsSection/>
        </div>
      </div>
    </>
  );
}