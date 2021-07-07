import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_KEY}`
    }
});
