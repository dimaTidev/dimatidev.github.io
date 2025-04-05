import Styles from "./footer.module.css";
import { Suspense } from "react";
import Socials from "@/lib/socials/socials";
import { gql } from "@apollo/client";
import Fade from "@/lib/UIComponents/fadeIn";
import Skeleton from "react-loading-skeleton";
import apolloServerClient from "@/lib/apollo/apolloServerClient";

export default async function Footer({className}) {
  return (
    <div className={`${Styles.base} ${className}`}>
        <div className={Styles.container}>
            <h2>Let&apos;s get in touch</h2>
            <label>Feel free to contact me about any opportunity, or just to chat about tech, snowboarding or anything else.</label>
            
            <Suspense fallback={<FooterLoading/>}>
                <Fade>
                    <FooterContent/>
                </Fade>
            </Suspense>
            
        </div>
    </div>
  )
}

function FooterLoading(){
    return (
        <>
            <div className="u-layout_flex-column gap-xxl">
                <div className="u-layout_flex-row gap-l">
                    <Skeleton containerClassName="u-width-100 u-height-1rem"/>
                </div>
            </div>
        </>
    )
}

async function FooterContent(){
    const dataRes = await apolloServerClient.query({
      query: GET_PERSON,
    });

    const data = dataRes?.data?.AboutMe;

    const socialLinks = [];
    if(data?.person?.email){
      socialLinks.push(data.person.email);
    }
    if(data?.person?.socialLinks){
      socialLinks.push(...data.person.socialLinks);
    }

    return (
      <>
          <div className="u-layout_flex-column gap-xxl">
              <div className="u-layout_flex-row gap-l">
                  {/* {data.resumeUrl && (
                      <Link href={data.resumeUrl}>
                          <ActionButton src="icons/download.svg" size={Size.S} variant={Variant.SECONDARY}>Resume</ActionButton>
                      </Link>
                  )} */}
                  <Socials linksArray={socialLinks}/>
              </div>
          </div>
      </>
    )
}

const GET_PERSON = gql`
  query GetPerson {
    AboutMe(id: "aboutMe") {
      person {
        email
        socialLinks
      }
      resumeUrl
    }
  }
`;