import { request, gql, GraphQLClient } from "graphql-request";

const graphqlAPI = `https://tamk-fullstack-project-backend.herokuapp.com/graphql`;

export const getPosts = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    query {
      getAllPosts {
        id
        title
        message
        category
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

export const getPostsByUsername = async (token: any, username: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    query postByUsername($username: String!) {
      getPostsByUsername(username: $username) {
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
        numLikes
        numComments
      }
    }
  `;
  const result = await graphQLClient.request(query, { username });

  return result;
};

export const sendLike = async (token: any, postId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    mutation sendLike($postId: ID!) {
      likePost(postId: $postId) {
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
  const result = await graphQLClient.request(query, { postId });

  return result;
};

export const unLike = async (token: any, postId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    mutation unLike($postId: ID!) {
      unlikePost(postId: $postId) {
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
  const result = await graphQLClient.request(query, { postId });

  return result;
};