import MockedClient from "./apolloMockClient";

// When set up the real apollo client don't forget to set revalidation of the fetch request
// otherwise the data will be forever cached on the server!!!
// https://youtu.be/buhHZksGM84?si=Aq2Y-nxZz_z2xIYe&t=1294
/*
context:{
    fetchOptions:{
        next:{
            revalidate: 5
        }
    }
}
*/

export default MockedClient;