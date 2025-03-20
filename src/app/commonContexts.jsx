'use client';
import { ApolloContextProvider } from '@/lib/apollo/apolloContextProvider';

export default function CommonContexts({children}) {
  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <ApolloContextProvider>
            {children}
        </ApolloContextProvider>
    </>
  )
}
