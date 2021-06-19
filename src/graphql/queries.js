import { gql } from '@apollo/client';

export const GET_REPOS = gql`
query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
    ) {
        repositories(
            orderBy: $orderBy
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
            first: $first
            after: $after
            ){
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
                edges {
                    node {
                        fullName,
                        description,
                        language,
                        forksCount,
                        stargazersCount,
                        ratingAverage,
                        reviewCount,
                        ownerAvatarUrl,
                        id
                    }
                    cursor
                
                }
            }
    }
`;
export const GET_USER = gql`
query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
        id
        username
        reviews @include(if: $includeReviews) {
            edges {
              node {
                id
            rating
            text
            createdAt
            repositoryId
            repository {
              id
              fullName
            }

              }
              cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
      }
}
`;
export const GET_REPO = gql`
query repository($id: ID! $first: Int, $after: String) {
    repository(id: $id) {
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
        reviews(first: $first, after: $after) {
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    user {
                    id
                    username
                    }
                }
            }
        }
    }
}`;

