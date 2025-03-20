import { ApolloClient, InMemoryCache } from '@apollo/client';

const sanityCDNUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECTID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;

const client = new ApolloClient({
  uri: sanityCDNUrl, // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;