import {  person_dimati } from "../persons/persons";
import { stackCSharp, stackUnity } from "../etc/stack";
import { platformXR } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/vrWeaponsShowcase");

export const projectVrWeaponsShowcase = {
    id: { current: "VR_weapon_showcase" },
    title: "VR weapons",
    description: `VR weapon interaction. Built on WebXR Export. Currently available pistol. Other weapons are on the way.`,
    orderRank: 103,
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
        `https://www.youtube.com/embed/UqstOUAfglk`,
    ],
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