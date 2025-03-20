import { person_chafik, person_dimati } from "../persons/persons";
import { stackCSharp, stackUnity } from "../etc/stack";
import { platformMobile, platformPC, platformTablet, platformXR } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/ucrp");

export const projectUCRP = {
    id: { current: "UCRP"  }, 
    title: "Digital twins",
    description: `The project is a fully functional collaborative design review tool for 3D assets. Supports PC, Android, iOS, WebGL, VR (Quest2) and Hololens.

    The Unity Cloud Reference Project is intended as a starting point for industry developers, and is architected with customization and extensibility in mind. Developers can pull in changes from the latest release with minimal conflicts to their codebase and can easily remove unwanted features. It supports many build targets including WebGL, which along with deep-linking support, empowers users to easily share their 3D assets for review with one-click.
    `,
    orderRank: 100,
    team:[
        {
            person: person_dimati,
            position: "Senior software developer"
        },
        {
            person: person_chafik,
            position: "Technical Lead"
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
        `https://www.youtube.com/embed/E0alTWB8m2Q`,
        `https://www.youtube.com/embed/WTCf5geMghw`
    ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/ucrp_assets.webp` }},
        { asset:{ url: `${imagePath}/gallery/ucrp_collaborate.webp` }},
        { asset:{ url: `${imagePath}/gallery/ucrp_vr.webp` }},
        { asset:{ url: `${imagePath}/gallery/vr_metadata.webp` }},
        { asset:{ url: `${imagePath}/gallery/vr_move.webp` }},
        { asset:{ url: `${imagePath}/gallery/walk.webp` }},
        { asset:{ url: `${imagePath}/gallery/collaborators.webp` }},
    ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformPC,
        platformTablet,
        platformMobile,
        platformXR
    ],
    callOut: undefined,
    postImages: [
        {
            image:{ asset:{ url: `${imagePath}/postImages/OrbitControls.gif` }},
            // url: `8ffe4ca914eb970044f590256026ba92ce5c3d7a-800x450-gif`
            alt: "Fly mode"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/WalkMode.gif` }},
            //url: `1df70171a14ca19b9ac46b5e1df08ef430a8709f-800x450-gif`
            alt: "Walk mode"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/VRMode.gif`
                    // url: `9eb6e6af005df91b8fad428270fd18cc458bc39f-800x450-gif`
                }
            },
            alt: "VR and AR mode"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/Metadata.gif`
                    // url: `1eb8d26dec9c54e31b4da802510a97b0ccdafd5c-800x450-gif`
                }
            },
            alt: "Metadata tool"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/DeepLink.gif`
                    // url: `ece5755b888d54294dab227246f557b9537766ba-800x450-gif`
                }
            },
            alt: "Deep link"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/Theming.gif`
                    // url: `fe6a022f72fe14952437a644f5b7aa6387a3722e-800x450-gif`
                }
            },
            alt: "Themes and localization"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/UI_VR_480.gif`
                    // url: `c5ca7886ca195c0196f4cbcfeb122db2a948e595-480x270-gif`
                }
            },
            alt: "XR detachable UI"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/postImages/UI_VR2_480.gif`
                    // url: `d3ec5db3cdd3aa5c1d6e0d86aa11713ea21156bf-480x270-gif`
                }
            },
            alt: "XR UI"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/gallery/ucrp_collaborate.webp`
                    // url: `d4f3cb5e24444fe035cf49f6529c85b16316f0db-1920x1080-jpg`
                }
            },
            alt: "Multiple collaborators"
        },
        {
            image:{
                asset:{
                    url: `${imagePath}/gallery/ucrp_assets.webp`
                    // url: `2799cff45a1b6079a15f9eb87885c11197f95c4c-1920x1080-jpg`
                }
            },
            alt: "Unity asset manager"
        },
    ],
    postRaw: [{children: [{text: 
    `The project utilizes different SDKs such as 3d data streaming, Identity, Asset manager, Deep Linking, Annotations, Presence, and Metadata.


    <br/>

    ## Navigation

    The project supports 3 navigation types: fly, walk, VR/AR.


    <br/>

    <Image src="" alt="Fly mode" width="480" height="270"/>

    Fly mode. Navigation for PC, Tablet and Mobile


    <br/>

    <Image src="" alt="Walk mode" width="480" height="270"/>

    Walk mode. Navigation for PC, Tablet and Mobile


    <br/>

    <Image src="" alt="VR and AR mode" width="480" height="270"/>

    VR/AR mode. Navigation for VR and AR


    <br/>

    ## Tools

    The first developed tool by me was metadata tool. The tool shows the metadata on a selected object and support filtering and sorting the information.

    <br/>

    <Image src="" alt="Metadata tool" width="800" height="450"/>

    The metadata tool


    <br/>

    The project also includes ruler tool to measure the distance between points and also annotation tool to leave notes and collaborate with other people.


    <br/>

    ## Deep link

    The project supports deep link. How it works: you open a scene and come to a place you want to share with your coworker, you open the Link share tool and create a link. You share the link with your coworker and when he opens the link the app opens the exact model and places the camera to the same coordinates.

    <br/>

    <Image src="" alt="Deep link" width="800" height="450"/>

    The deep link tool
    <br/>

    ## UI

    For the UI we used UIToolkit for PC, tablet and mobile and UGUI for VR/AR. Later we changed our decision and I implemented all the VR/AR UI in UIToolkit.

    Making spatial UI with UIToolkit is challenging and required to create custom controlls from scratch to be able to support Ray and Poke interactions.

    <br/>

    Our UI supports light and dark themes. Also supports localization for English and French.


    <br/>

    <Image src="" alt="Themes and localization" width="800" height="450"/>

    Themes and localization


    <br/>

    <Image src="" alt="XR detachable UI" width="480" height="270"/>

    VR/AR detachable UI


    <br/>

    <Image src="" alt="XR UI" width="480" height="270"/>

    VR/AR UI


    <br/>

    ## Multiplayer

    We used the Presence package to make the multiplayer work. Also we user vivox to implement the voice chat.

    <br/>

    <Image src="" alt="Multiple collaborators" width="800" height="450"/>

    Multiple collaborators and the vivox voice chat

    <br/>

    ## Asset management

    We used the unity asset manager to load models. How it works: a user uploads CAD models (unoptimized for streaming) to the Unity Asset manager, then the ingestion pipeline automatically optimizes the model and makes it streamable. After that the model is available in the application for view.

    <br/>

    <Image src="" alt="Unity asset manager" width="800" height="450"/>

    The unity asset manager
    `}] }],
}   