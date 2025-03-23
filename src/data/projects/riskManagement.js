import { person_dimati } from "../persons/persons";
import { stackJavaScript, stackNextjs, stackReact } from "../etc/stack";
import { platformPC } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/riskManagement");

export const projectRiskManagement = {
    id: { 
        current: "risk-management-tool" 
    }, 
    title: "Trades management",
    description: `A simple tool to manage risk in futures positions on Bybit. Automatically calculates your wanted risk in your position with given stop loss swing and also places take profit with given RR.`,
    orderRank: 98,
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
        `https://www.youtube.com/embed/ObzeMGdZ3Vo`,
    ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/screen_1.png` }},
        { asset:{ url: `${imagePath}/gallery/screen_2.png` }},
    ],
    techStack:[
        stackNextjs,
        stackReact,
        stackJavaScript
    ],
    platforms:[
        platformPC,
    ],
    callOut: "Currently is under development 🚀",
    postImages: [
        {
            image:{ asset:{ url: `${imagePath}/postImages/design.png` }},
            alt: "design"
        },
        {
            image:{ asset:{ url: `${imagePath}/gallery/screen_2.png` }},
            alt: "accounts"
        },
    ],
    postRaw: [{children: [{text: 
    `## What problem I tried to solve

    Since I started trading futures I have to manage my risks in each deal.

    I tried to use Google Sheets but I had to enter too many things and then enter the results back to Bybit. Sometimes I do not have time to do that when I need to get into a position instantly.

    <br/>

    So at this point, I realized, I need the risk management tool which does everything using Bybit API.

    I designed a simple UI in Figma and started development.

    <Image alt="design" width="800" height="450"/>

    Quick design in Figma

    <br/>

    ## The second problem

    Sometimes I wanted to test my strategies on the demo account.

    <br/>

    I added multi-account support to quickly change between trading and demo accounts. Also, I left room to easily add other platforms like Binance, OKX if needed.

    All the API keys and secrets stored locally are encrypted with a user's password.

    <Image alt="accounts" width="800" height="450"/>

    Selecting an account
    `}] }],
}   