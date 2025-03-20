import { person_daronRus, person_dimati, person_vladTerm } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/coc");

export const projectCoc = {
    id: { current: "COC" }, 
    title: "Clash of Crime",
    description: `Released in 2016 on GooglePlay and Apple AppStore. In the game you can fight, shoot weapons, steal vehicles, run away from the police.`,
    orderRank: 112,
    team:[
        {
            person: person_dimati,
            position: "Software developer"
        },
        {
            person: person_daronRus,
            position: "Software developer"
        },
        {
            person: person_vladTerm,
            position: "Software developer"
        }
    ],
    previewImage:{
        asset:{ url: `${imagePath}/preview.jpg` }
    },
    // previewAnimation:{
    //     asset:{ url: `${imagePath}/previewAnim.jpg` }
    // },
    // videoLinks: [
    //     `https://www.youtube.com/embed/SiEs2b8D758`,
    //     `https://www.youtube.com/embed/fUU3tivUqfQ`
    // ],
    // galleryScreenshots: [
    //     { asset:{ url: `${imagePath}/gallery/screen_1.webp` }},
    // ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformTablet,
        platformMobile
    ],
    callOut: `Description and screenshots are coming soon... sorry for inconvenience`,
    // postImages: [

    // ],
    // postRaw: [{children: [{text: 
    // `
    // `}] }],
}   