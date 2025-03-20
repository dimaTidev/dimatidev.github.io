'use client';

import Styles from "./footer.module.css";
import { Suspense } from "react";
import Socials from "@/lib/socials/socials";
import ActionButton from "@/lib/UIComponents/ActionButton";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import Link from "next/link";
import { Modal, ModalContent } from "@/lib/floatingUI/modal";
import { DialogDescriptionArea, DialogHeading } from "@/lib/floatingUI/dialog";
import { gql, useSuspenseQuery } from "@apollo/client";
import Fade from "@/lib/UIComponents/fadeIn";
import Skeleton from "react-loading-skeleton";

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

export default function Footer({className}) {

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

function FooterContent(){
  console.log("Render footer");
  
  // return;
    const { data: queryData } = useSuspenseQuery(GET_PERSON);
    // const [isContactFormOpen, setContactFormOpen] = useState(false);

    const data = queryData.AboutMe;

    const socialLinks = [];
    if(data.person.email){
      socialLinks.push(data.person.email);
    }
    socialLinks.push(...data.person.socialLinks);

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
            
            {/* <hr/>

            <ActionButton size={Size.S} variant={Variant.PRIMARY} onClick={() => setContactFormOpen(true)}>Contact me</ActionButton>
    
            <Modal open={isContactFormOpen} onOpenChange={setContactFormOpen}>
                <ModalContent>
                <DialogHeading>Contact form</DialogHeading>
                <DialogDescriptionArea>
                    <ContactForm/>
                </DialogDescriptionArea>
                </ModalContent>
            </Modal> */}
        </div>
    </>
  )
}