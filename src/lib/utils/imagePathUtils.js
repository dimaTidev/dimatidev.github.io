const state = process.env.NEXT_PUBLIC_SERVER_SERVICE;

/**
 * @param {string} path 
 * @returns 
 */
export function FixImagePath(path){
    if(path == undefined)
        return path;

    if(state == "github-pages"){
        if(path.startsWith("/")){
            return path.slice(1);
        }
    }

    return path;
}