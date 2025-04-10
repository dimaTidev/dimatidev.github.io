'use client'
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// TODO: remove this component once hosting changed
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

import { ApolloProvider } from '@apollo/client'
import apolloServerClient from "@/lib/apollo/apolloServerClient";

export default function ClientContexts({children}) {
  return (
    <ApolloProvider client={apolloServerClient}>
        { children }
    </ApolloProvider>
  )
}
