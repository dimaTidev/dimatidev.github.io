import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/brawlKarts");

export const projectBrawlKarts = {
    id: { current: "BrawlKarts" },
    title: "Brawl Karts",
    description: `Prototype. Casual racing game. You can select 1 of 5 types of vehicles. You can use weapons to survive. Who drives too slowly will be run over by an evil machine.`,
    orderRank: 106,
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
        `https://www.youtube.com/embed/vxk5EmamNvQ`
    ],
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