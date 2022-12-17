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
      getAllPosts{
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


export const getPostsWithPagination = async (token: any, page: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    query postByUsername($page: Int!) {
      getAllPosts(amount: 5, page: $page) {
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
  `
  // const query = gql`
  //   query {
  //     getAllPosts(amount: 5, page: $page) {
  //       id
  //       title
  //       message
  //       category
  //       createdAt
  //       user {
  //         id
  //         username
  //         email
  //       }
  //       comments {
  //         message
  //         user {
  //           username
  //         }
  //         createdAt
  //       }
  //       likes {
  //         id
  //         username
  //         email
  //       }
  //       numLikes
  //       numComments
  //     }
  //   }
  // `;
  const result = await graphQLClient.request(query, {page});

  return result;
};
export const getTopPosts = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    query {
      getTopPosts(amount: 5) {
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

export const createPost = async (
  token: any,
  title: any,
  category: any,
  content: any
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    mutation createPost(
      $title: String!
      $category: String!
      $content: String!
    ) {
      createPost(
        postInput: { title: $title, message: $content, category: $category }
      ) {
        title
      }
    }
  `;
  const result = await graphQLClient.request(query, {
    title,
    content,
    category,
  });

  return result;
};

export const getOnePostById = async (token: any, postId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    query postById($postId: ID!) {
      getPostById(postId: $postId) {
        id
        title
        message
        createdAt
        user {
          id
          username
          email
          bio
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
        category
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    postId,
  });

  return result;
};

export const sendComment = async (token: any, postId: any, message: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const graphQLClient = new GraphQLClient(graphqlAPI, config);
  const query = gql`
    mutation sendComment($postId: ID!, $message: String!) {
      addComment(commentInput: { message: $message, postId: $postId }) {
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
  const result = await graphQLClient.request(query, { postId, message });

  return result;
};

// so there are 2 param , the first the amount of poost per age and then the page