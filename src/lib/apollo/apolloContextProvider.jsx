'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import testApolloClient from './apolloMockClient';

export function ApolloContextProvider({children}) {

    return (
        <ApolloProvider client={testApolloClient}>
            {children}
        </ApolloProvider>
    );
}


    // Check if environment variables are set
    // if (!process.env.NEXT_PUBLIC_SANITY_PROJECTID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    //     // Handle error condition here, such as logging an error or displaying a fallback UI
    //     console.error('Environment variables NEXT_PUBLIC_SANITY_PROJECTID or NEXT_PUBLIC_SANITY_DATASET are not set.');
    //     return <>Environment variables NEXT_PUBLIC_SANITY_PROJECTID or NEXT_PUBLIC_SANITY_DATASET are not set.</>; // Return null or a fallback component
    // }

    // If environment variables are set, proceed with ApolloClient initialization
    // const sanityCDNUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECTID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;



        // <ApolloProvider client={new ApolloClient({
        //     uri: sanityCDNUrl,
        //     cache: new InMemoryCache(),
        // })}>
        // {children}
        // </ApolloProvider>