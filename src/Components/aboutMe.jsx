import Icon from "@/lib/UIComponents/icon";
import Styles from "./aboutMe.module.css";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import Socials from "@/lib/socials/socials";
import Link from "next/link";
import Avatar from "@/lib/UIComponents/avatar";
import Button from "@/lib/UIComponents/Button";
import { gql } from '@apollo/client';
import apolloServerClient from '@/lib/apollo/apolloServerClient';

import Skeleton from 'react-loading-skeleton'

export default async function AboutMe(params) {
  const dataRes = await apolloServerClient.query({
    query: GET_ABOUT_ME,
  });

  const queryData = dataRes?.data;

  const personData = queryData?.AboutMe.person;

  const avatarUrl = personData?.avatarImage?.asset?.url;
  
  const socialLinks = [];

  if(personData?.email){
    socialLinks.push(personData?.email);
  }

  if(personData){
    socialLinks.push(...personData?.socialLinks);
  }

  return (
    
    <div className={Styles.base} {...params}>
        <Avatar src={avatarUrl} style={{width: "100%", height: "auto"}}/>
        
        <h2>{personData?.fullName}</h2>
        <p>{personData?.shortAboutMe}</p>

        {personData?.location && (
          <div className="u-layout_flex-row u-layout_flex-start-center gap-m">
            <Icon size={Size.XS} src="icons/location.svg"/>
            <a className="u-text-secondary">{personData?.location}</a>
          </div>
        )}

        <hr/>

        <div className="u-layout_flex-row gap-l">
            {queryData?.AboutMe.resumeUrl && (
              <Link href={queryData?.AboutMe.resumeUrl} style={{flexGrow: "1"}}>
                  <Button src="icons/download.svg" size={Size.S} variant={Variant.SECONDARY} style={{width: "100%"}}>Resume</Button>
              </Link>
            )}

            <Socials linksArray={socialLinks} style={{flexGrow: "1"}}/>
        </div>
    </div>
  )
}

export function AboutMeLoading(params){
  return (
    <div className={Styles.base} {...params}>
      <Avatar style={{width: "100%", height: "auto"}}>
        {/* TODO: The avatar rounded skeleton is off, fix it */}
        <Skeleton circle height="100%" containerClassName="u-width-heigth-100perc"/>
      </Avatar>

      <h2><Skeleton/></h2>
      <p><Skeleton/></p>
    </div>
  )
}

export const GET_ABOUT_ME = gql`
  query GetAboutMe {
    AboutMe(id: "aboutMe") {
      person {
        email
        socialLinks
        shortAboutMe
        location
        fullName
        avatarImage {
          asset{
            url
          }
        }
      }
      resumeUrl
    }
  }
`;