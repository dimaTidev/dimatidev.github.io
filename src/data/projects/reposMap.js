import { person_dimati } from "../persons/persons";
import { stackAntd, stackApollo, stackJavaScript, stackNextAuth, stackNextjs, stackReact, stackReactFlow } from "../etc/stack";
import { platformPC } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/reposMap");

export const projectReposMap = {
    id: { 
        current: "reposMap" 
    }, 
    title: "Repos Map",
    description: `Introducing a unified repository management tool built on Next.js and GraphQL, seamlessly integrating GitHub, GitLab, and Bitbucket. Organize and visualize your repositories in a customizable 2D map, simplifying navigation and collaboration across teams with shareable deep links.`,
    orderRank: 96,
    team:[
        {
            person: person_dimati,
            position: "Frontend developer"
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
    //     `https://www.youtube.com/embed/ObzeMGdZ3Vo`,
    // ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/favoriteRepos.jpg` }},
        { asset:{ url: `${imagePath}/gallery/personalRepos.jpg` }},
        { asset:{ url: `${imagePath}/gallery/addUrl.jpg` }},
        { asset:{ url: `${imagePath}/gallery/addRepos.jpg` }},
        { asset:{ url: `${imagePath}/gallery/landing.jpg` }},
    ],
    techStack:[
        stackNextjs,
        stackJavaScript,
        stackApollo,
        stackAntd,
        stackNextAuth,
        stackReactFlow
    ],
    platforms:[
        platformPC,
    ],
    callOut: "Currently is under development 🚀",
    // postImages: [
        
    // ],
    postRaw: [{children: [{text: 
    `## The problem I tried to solve
    During a long time developing stuff and having multiple accounts on GitHub, GitLab and Bitbucket it became hard to navigate between all the repositories.
    So I came up with an idea what if we have a tool which shows all the repositories from different platforms in one place. And then would be great to have all the repos in a 2d map where we can sort them out into groups and label them.
    
    And then the second idea came up! We could create maps with favorite repositories, node packages, or even make deep linking where we have only a URL which leads to a map which would be usefull working in a team and quickly sharing stuff.

    <br/>
    ## Stack

    -&nbsp; The project is built on Next.js with JavaScript. 

    -&nbsp; For the UI I used the Ant design component library with next-themes for theming.

    -&nbsp; I use next-auth for auth with GitHub and Apollo to fetch all the data using graphQL.

    -&nbsp; I added support for the private repositories, during which I figured out that GitHub requires a GithubApp installed on the user's account... 
    
    So I made a simple flow in case if you try to add a private repo it asks to install the GithubApp with all the permissions needed to fetch the private repo.
    <br/>
    Currently, the project supports manually adding repos via URL or selecting your repos from a list.
    `}] }],
}   