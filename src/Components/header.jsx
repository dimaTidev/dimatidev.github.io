import Socials from "@/lib/socials/socials";
import Styles from "./header.module.css";
import { Suspense } from "react";
import Link from "next/link";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import Button from "@/lib/UIComponents/Button";
import Spacer, { SizeSpacer } from "@/lib/UIComponents/Spacer";
import { gql } from "@apollo/client";
import Fade from "@/lib/UIComponents/fadeIn";
import Skeleton from "react-loading-skeleton";
import apolloServerClient from "@/lib/apollo/apolloServerClient";

export default async function Header({className}) {
  return (
    <div className={`${Styles.header} ${className}`}>
        <Suspense fallback={<HeaderLoading/>}>
            <Fade className={Styles.headerLayout}>
                <HeaderContent/>
            </Fade>
        </Suspense>
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
  
  // const { data: queryData } = useSuspenseQuery(GET_PERSON);
  
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
        <Socials linksArray={socialLinks}/>

        <Spacer size={SizeSpacer.S}/>

        {data.resumeUrl && (
          <Link href={data.resumeUrl}>
            <Button src="icons/download.svg" size={Size.S} variant={Variant.SECONDARY}>Resume</Button>
          </Link>
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