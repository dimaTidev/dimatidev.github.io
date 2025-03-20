import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/bcl2");

export const projectBcl2 = {
    id: { current: "BCL_U" }, 
    title: "BigCityLife 2",
    description: `In this game, the player can use jobs to earn money and buy cars, house, customize a character, and fulfill desires. There is a taxi job, food delivery, 3 types of city clean job, builder, thief. Character need for sleep, eat and have fun. If a player uses cheats, the game will put him in the prison.`,
    orderRank: 111,
    team:[
        {
            person: person_dimati,
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