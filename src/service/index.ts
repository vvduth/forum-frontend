import { request, gql } from "graphql-request";

const graphqlAPI = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl99wxkjm2rpc01ue0ugb8gsu/master`;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            excerpt
            name
            categories {
                name
                slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
