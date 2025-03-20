import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet, platformXR } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/crazyMachines");

export const projectCrazyMashines = {
    id: { current: "VR_Crazy_Machines" },
    title: "Crazy Machines",
    description: `Crazy Machines Clone. Built on WebXR Export. VR Puzzle physics-based game where you have to solve puzzles using physical objects, steam pipes, belts, gears, and electric wires.`,
    orderRank: 102,
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
    // videoLinks: [
    //     `https://www.youtube.com/embed/SiEs2b8D758`,
    // ],
    // galleryScreenshots: [
    //     { asset:{ url: `${imagePath}/gallery/screen_1.webp` }},
    // ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformXR
    ],
    callOut: `Description and screenshots are coming soon... sorry for inconvenience`,
    // postImages: [

    // ],
    // postRaw: [{children: [{text: 
    // `
    // `}] }],
}   