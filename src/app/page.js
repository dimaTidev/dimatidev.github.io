'use client';
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages


import Styles from "./page.module.css";
import AboutMe, { AboutMeLoading } from "@/Components/aboutMe";
import AllProjectsSection from "@/Components/allProjectsSection";
import { Suspense, useEffect } from "react";
import Fade from "@/lib/UIComponents/fadeIn";
import { useRouter, useSearchParams } from "next/navigation";

// We wrapped the Page into suspence only because the page uses useSearchParams();
// TODO: once useSearchParams() removed remove the Suspense wrapper around the page
export default function Home(){
  return (
    <Suspense>
      <Page/>
    </Suspense>
  )
}

function Page(){
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect to the project page
  useEffect(() => {
    const projectToOpen = searchParams.get('project');
    if (projectToOpen) router.replace(`projectDetails?id=${projectToOpen}`);
  }, []);

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