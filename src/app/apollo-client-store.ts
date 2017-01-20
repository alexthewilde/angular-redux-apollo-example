import ApolloClient, { createNetworkInterface } from 'apollo-client';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    // Example endpoint
    uri: 'https://api.graph.cool/simple/v1/ciy66vmlg00x80161cz55jn1i'
  }),
  // ID mapping required for automatic updates of objects in the store after
  // mutations.
  dataIdFromObject: o => o['id'],
  // Enable Apollo Dev Tools Extension
  connectToDevTools: true
});

export function provideClient(): ApolloClient {
  return client;
}
