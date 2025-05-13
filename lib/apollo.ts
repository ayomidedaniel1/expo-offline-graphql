import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache } from 'apollo3-cache-persist';
import { useEffect, useState } from 'react';

const cache = new InMemoryCache();
const link = createHttpLink({ uri: 'https://graphqlzero.almansi.me/api' });

export const useApollo = () => {
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    (async () => {
      await persistCache({ cache, storage: AsyncStorage });
      const apolloClient = new ApolloClient({ link, cache });
      setClient(apolloClient);
    })();
  }, []);

  return client;
};
