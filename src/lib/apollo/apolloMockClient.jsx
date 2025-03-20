
import { aboutMeData } from '@/data/aboutMe';
import AllProjectsData from '@/data/allProjects';
import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const aboutMeVar = makeVar(aboutMeData);

const allProjectVar = makeVar(AllProjectsData);
// const allProjectVar = makeVar([
//     { 
//         id: { 
//             current: "1" 
//         }, 
//         title: "Project One",
//         description: "description",
//         orderRank: 1,
//         team:[
//             {
//                 person:{
//                     fullName: "jake",
//                     socialLinks: [],
//                     email: "",
//                     avatarImage:{
//                         asset:{
//                             url: "next.svg"
//                         }
//                     }
//                 }
//             }
//         ],
//         postRaw: [],
//         previewImage:{
//             asset:{
//                 url: "next.svg"
//             }
//         },
//         previewAnimation:{
//             asset:{
//                 url: "next.svg"
//             }
//         },
//         videoLinks: [],
//         galleryScreenshots: [],
//         callOut: "This is the test",
//         techStack:[
//            {
//                 title: "hello",
//                 icon:{
//                     asset:{
//                         url: "file.svg"
//                     }
//                 },
//            }
//         ],
//         platforms:[
//             {
//                 icon:{
//                     asset:{
//                         url: "window.svg"
//                     }
//                 }   
//             }
//         ]
//     },
// ]);

const createTypePolicies = (fields) => ({
    Query: {
      fields: Object.fromEntries(
        fields.map((key) => {
          if (key === 'AboutMe') {
            return [
              key,
              {
                keyArgs: ['id'],
                read(_, { args }) {
                  return args?.id === 'aboutMe' ? vars[key]() : null;
                }
              }
            ];
          }
          if (key === 'allProject') {
            return [
              key,
              {
                keyArgs: ['sort', 'where'],
                read(_, { args }) {
                  let data = vars[key]();
                  // Filter based on where clause for GET_PROJECT
                  if (args?.where?.id?.current?.eq) {
                    data = data.filter(
                      (p) => p.id.current === args.where.id.current.eq
                    );
                  }
                  // Sort for GET_PROJECTS if sort is provided (example assumes sort by orderRank ASC)
                  if (args?.sort) {
                    data = data.slice().sort((a, b) => a.orderRank - b.orderRank);
                  }
                  return data;
                }
              }
            ];
          }
          // Default behavior for any additional fields
          return [
            key,
            {
              read() {
                return vars[key]();
              }
            }
          ];
        })
      )
    }
  });

// Store reactive variables in a single object
const vars = {
    allProject: allProjectVar,
    AboutMe: aboutMeVar
};

// Create Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: createTypePolicies(Object.keys(vars)) // Pass keys dynamically
  })
});

export default client;