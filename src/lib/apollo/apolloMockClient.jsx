
import { aboutMeData } from '@/data/aboutMe';
import AllProjectsData from '@/data/allProjects';
import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const aboutMeVar = makeVar(aboutMeData);

const allProjectVar = makeVar(AllProjectsData);

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
  }),
  defaultOptions:{
    query:{
      errorPolicy: "all",
      fetchPolicy: "cache-only"
    }
  }
});

export default client;