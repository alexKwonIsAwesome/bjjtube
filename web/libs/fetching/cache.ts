import { createCache } from 'react-fetching-library';

const cache = createCache(
  action => {
    return action.method === 'GET';
  },
  response => {
    return new Date().getTime() - response.timestamp < 10000;
  }
);

export default cache;
