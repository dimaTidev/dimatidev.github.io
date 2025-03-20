import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/networkBattleships");

export const projectNetworkBattleships = {
    id: { current: "HackBattleShips" },
    title: "Network battleships",
    description: `Each player controls a ship. The main goal to survive in the game. Each ship can shoot cannon balls and take down other ships.`,
    orderRank: 104,
    team:[
        {
            person: person_dimati,
            position: "Senior software developer"
        }
    ],
    previewImage:{
        asset:{ url: `${imagePath}/preview.webp` }
    },
    // previewAnimation:{
    //     asset:{
    //         url: "next.svg"
    //     }
    // },
    videoLinks: [
        `https://www.youtube.com/embed/dGqf35pXthA`
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
    ],
    callOut: `Description and screenshots are coming soon... sorry for inconvenience`,
    // postImages: [

    // ],
    postRaw: [{children: [{text: 
    `I saved 99% of bandwidth by replacing projectile update synchronization with one-time synchronization and deterministic calculations in this 4 days network project.

    <br/>

    • The project was made from scratch in 4 days.


    • The project is fully network. Utilizes Netcode for GameObjects.


    • The team contained 3 software developers including me.


    • For quick development iteration, we utilized the ParrelSync tool which saved time a lot.
    `}] }],
}   