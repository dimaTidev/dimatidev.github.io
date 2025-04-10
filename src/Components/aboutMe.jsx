import Styles from "./aboutMe.module.css";
import Socials from "@/lib/socials/socials";
import { gql } from '@apollo/client';
import apolloServerClient from '@/lib/apollo/apolloServerClient';
import Skeleton from 'react-loading-skeleton'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationIcon from '@mui/icons-material/LocationOn'
import { FileDownload } from "@mui/icons-material";
import ButtonEmailMe from "./buttonEmailMe";

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
      <div className={Styles.avatarContainer}>
        {/* <Avatar src={avatarUrl} style={{width: "100%", height: "auto", aspectRatio: "1"}}/> */}
        <Avatar src={avatarUrl} className={Styles.avatar}/>
        <div className="u-layout_flex-column">
          <Typography variant="h5" fontWeight="700">{personData?.fullName}</Typography>
          <Typography variant="body1" className="u-text-secondary">Senior Full Stack Developer</Typography>
        </div>
      </div>

      <div/>
      <Typography variant="body1" className="u-text-secondary">{personData?.shortAboutMe}</Typography>

      {personData?.location && (
        <div className="u-layout_flex-row u-layout_flex-start-center gap-m u-text-secondary">
          <LocationIcon fontSize="small"/>
          <Typography variant="body1" className="u-text-secondary">{personData?.location}</Typography>
        </div>
      )}
      <div/>
      <Socials linksArray={socialLinks} style={{flexGrow: "1"}}/>
      {queryData?.AboutMe.resumeUrl && (
        <Button href={queryData?.AboutMe.resumeUrl} variant="contained" color="primary" sx={{gap: "6px"}}>
          <FileDownload fontSize="small"/> Download Resume
        </Button>
      )}

      {personData?.email && (
        <ButtonEmailMe email={personData?.email} className="u-media-mobile-only"/>
      )}
    </div>
  )
}

export function AboutMeLoading(params){
  return (
    <div className={Styles.base} {...params}>
      <Avatar style={{width: "100%", height: "auto", aspectRatio: "1"}}>
        {/* TODO: The avatar rounded skeleton is off, fix it */}
        <Skeleton circle height="100%" containerClassName="u-width-heigth-100perc"/>
      </Avatar>

      <h2><Skeleton/></h2>
      <div className="u-layout_flex-column gap-s">
        <p><Skeleton/></p>
        <p><Skeleton/></p>
      </div>
      
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