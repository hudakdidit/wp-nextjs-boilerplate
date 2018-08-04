import { API_ENDPOINT } from '~/config.json';

export { GRAPHQL_ENDPOINT } from '~/config.json';

export const generateApiUrl = path => `${API_ENDPOINT}${path}`;