import { ApolloProvider, useQuery } from '@apollo/client';
import { ActivityIndicator, Text, View } from 'react-native';
import { OfflineBanner } from '../components/OfflineBanner';
import { useApollo } from '../lib/apollo';
import { GET_USER } from '../lib/gql/queries';

// A component that renders user data from GraphQL
function Home() {
  const { data, loading } = useQuery(GET_USER);

  if (loading) return <ActivityIndicator />;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>{data?.user?.name}</Text>
      <Text>{data?.user?.email}</Text>
    </View>
  );
}

export default function Index() {
  const client = useApollo();

  if (!client) return <Text>Loading Apollo...</Text>;

  return (
    <ApolloProvider client={client}>
      <OfflineBanner />
      <Home />
    </ApolloProvider>
  );
}
