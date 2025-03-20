import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/foesio");

export const projectFoesio = {
    id: {  current: "FoesIO" }, 
    title: "FoesIO",
    description: `Clone FoesIO. 2D top down battle royale. Pick up weapon, ammo, armor and be the last one alive.`,
    orderRank: 105,
    team:[
        {
            person: person_dimati,
            position: "Senior software developer"
        }
    ],
    previewImage:{
        asset:{ url: `${imagePath}/preview.jpg` }
    },
    // previewAnimation:{
    //     asset:{
    //         url: "next.svg"
    //     }
    // },
    videoLinks: [
        `https://www.youtube.com/embed/SiEs2b8D758`,
        `https://www.youtube.com/embed/fUU3tivUqfQ`
    ],
    // galleryScreenshots: [
    //     { asset:{ url: `${imagePath}/gallery/screen_1.webp` }},
    // ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformPC,
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