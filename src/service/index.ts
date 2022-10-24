import { request, gql, GraphQLClient } from "graphql-request";

const graphqlAPI = `https://tamk-fullstack-project-backend.herokuapp.com/graphql`;


export const getPosts = async (userProfile: any) => {
  const config = {
    headers : {
      Authorization : `Bearer ${userProfile}`
    }
  }

  const graphQLClient = new GraphQLClient(graphqlAPI, config)
  const query = gql`
    query {
      getAllPosts {
        id
        title
        message
        createdAt
        user {
          id
          username
          email
        }
        comments {
          message
          user {
            username
          }
          createdAt
        }
        likes {
          id
          username
          email
        }
        numLikes
        numComments
      }
    }
  `;
  const result = await graphQLClient.request(query);

  return result;
};
