import { gql } from '@apollo/client';

export const GET_REPOS = gql`
query {
    repositories{
        edges {
            node {
              fullName,
              description,
              language,
              forksCount,
              stargazersCount,
              ratingAverage,
              reviewCount,
              ownerAvatarUrl
            }
        }
    }
}
`;
export const GET_USER = gql`
query{
    authorizedUser {
        id
        username
      }
}
`;
