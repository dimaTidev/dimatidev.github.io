import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/bcl");

export const projectBcl = {
    id: { current: "BCL" }, 
    title: "Big City Life",
    description: `Released in 2017 on GooglePlay. A game without firearms and violence. This is an attempt to combine 2 types of games: GTA and SIMS. In this game, you appear in a small town where you can earn extra money by working: pizza delivery, taxi driver, builder on a construction site, garbage collector, thief. You will need to take a driving license in a driving school to be able to drive a car. You can buy cars, an apartment, furniture in an apartment.`,
    orderRank: 110,
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