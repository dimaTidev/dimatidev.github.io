import Socials from "@/lib/socials/socials";
import Styles from "./header.module.css";
import { Suspense } from "react";
import Button from "@mui/material/Button";
import Spacer, { SizeSpacer } from "@/lib/UIComponents/Spacer";
import { gql } from "@apollo/client";
import Fade from "@/lib/UIComponents/fadeIn";
import Skeleton from "react-loading-skeleton";
import apolloServerClient from "@/lib/apollo/apolloServerClient";
import { MailOutline } from "@mui/icons-material";
import ButtonEmailMe from "./buttonEmailMe";

export default async function Header({className="", headerClassName=""}) {
  return (
    <div className={`${Styles.headerBackground} ${className}`}>
      <div className={`${Styles.header} ${headerClassName}`}>
        <Suspense fallback={<HeaderLoading/>}>
          <Fade className={Styles.headerLayout}>
              <HeaderContent/>
          </Fade>
        </Suspense>
      </div>
    </div>
  )
}

function HeaderLoading(){
  return (
    <>
      <Skeleton containerClassName="u-width-100 u-height-1rem"/> 
    </>
  )
}

async function HeaderContent(){
  const dataRes = await apolloServerClient.query({
    query: GET_PERSON,
  });
  
  const data = dataRes?.data?.AboutMe;

  const socialLinks = [];

  if(data?.person?.socialLinks){
    socialLinks.push(...data.person.socialLinks);
  }
  
  return (
    <>
        <Socials linksArray={socialLinks}/>

        <Spacer size={SizeSpacer.S}/>

        {data?.person?.email && (
          <ButtonEmailMe email={data?.person?.email}/>
        )}
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