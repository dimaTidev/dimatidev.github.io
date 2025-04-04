import Styles from "./page.module.css";
import AboutMe, { AboutMeLoading } from "../Components/aboutMe";
import AllProjectsSection from "../Components/allProjectsSection";
import { Suspense } from "react";
import Fade from "@/lib/UIComponents/fadeIn";
import RedirectToProject from "@/Components/redirectToProject";

export default async function Home() {
  return (
    <>
      <div className={Styles.pageWrapper}>
        <div className={Styles.page}>
          <div className={Styles.leftSidePanel}>
            <Suspense fallback={<AboutMeLoading/>}>
              <Fade style={{height: "100%"}}>
                {/* TODO: replace redirects with a middleware! */}
                <RedirectToProject/>
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
      </div>
    </>
  );
}