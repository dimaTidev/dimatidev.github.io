import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/ants");

export const projectAnts = {
    id: { current: "DOTSAnts" }, 
    title: "Ants simulation",
    description: `This was a challenging migration project. I migrated the existing Object Oriented project to Data oriented technology stack (DOTS) and improved performance from 1FPS to 60 FPS.
The simulation is simple: we have ants, food source and ant's home. The ants should bring food to the home. When ants carrying a food they are excited and drop pheromones to attract other ants to go for the food. Also there are obstacles in form of walls.`,
    orderRank: 101,
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
        `https://www.youtube.com/embed/daum8_I6bHk`
    ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/screen_1.webp` }},
        { asset:{ url: `${imagePath}/gallery/screen_2.webp` }},
    ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformPC,
    ],
    // callOut: undefined,
    postImages: [
        {
            image:{ asset:{ url: `${imagePath}/postImages/visionMaps.webp` }},
            alt: "vision maps"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/pheromones.webp` }},
            alt: "pheromones"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/obstacleMap.webp` }},
            alt: "obstacles"
        },

        {
            image:{ asset:{ url: `${imagePath}/postImages/profilerObject.webp` }},
            alt: "profiler before"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/profilerDOTS.webp` }},
            alt: "profiler after"
        },
    ],
    postRaw: [{children: [{text: 
    `### The problem was: 

    The simulation takes 2770ms for 1 frame with 200k ants


    ### The goal was: 

    60FPS (16ms) with 200k ants simulation 



    <br/> 

    After migration to DOTS and jobs parallelization the performance became good but I went further to make it much better by incorporating a few technics.

    ### The first one is Vision map baking. 

    Since the map is always small I decided to replace raycasting from each ant to the food source and the base with prebaked vision maps which is way faster.

    On the images bellow the food source vision map is green, the base vision map is blue and the red color is the pheromones map.

    <p> 

    <Image alt="vision maps"/> 

    <Image alt="pheromones"/>

    </p>


    ### The second one is obstacles map baking 

    Each ant does 2 raycasts to determine obstacles on the way. It scales badly when we add 200k ants. I replaced raycasting with a pre-baked obstacle map. Instead of raycasting, each ant checks the next pixel on the obstacle map.

    <Image alt="obstacles"/>
    <br/> This implementation makes 3 mechanics (pheromones, vision, obstacles) follow the same approach which simplifies the code.
    <br/> 

    ### Profiler data 

    <br/> 

    <Image alt="profiler before" width="800" height="470"/> 
    Before DOTS transition CPU: 2770ms
    <br/> 

    <Image alt="profiler after" width="800" height="470"/> 
    After DOTS migration CPU: 15ms
    <br/>
    `}] }],
}   