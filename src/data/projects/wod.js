import { person_daronRus, person_dimati, person_vladTerm } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/wod");

export const projectWOD = {
    id: { current: "WOD" },
    title: "World of Derby",
    description: `Released in 2015 on GooglePlay and AppStore. World of Derby its a racing game about derby in arenas. We were inspired by the game Flatout 2. In the game a player can buy and upgrade, repair cars and takes part in arena battles.`,
    orderRank: 114,
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
    //     asset:{
    //         url: "next.svg"
    //     }
    // },
    videoLinks: [
        `https://www.youtube.com/embed/MqUwtk5L-_o`,
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