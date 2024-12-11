const { gql, default: request } = require("graphql-request");



const MASTER_URL = process.env.NEXT_PUBLIC_API_KEY;

// all category request

const GetCategory = async () => {

    const query = gql `
    query GetCategories {
        categories(first: 50) {
            id
            name
            slug
            icon {
            url
            }
        }
        }
    `
   const result = await request(MASTER_URL,query);
   return result;
}

export default {
    GetCategory,
}