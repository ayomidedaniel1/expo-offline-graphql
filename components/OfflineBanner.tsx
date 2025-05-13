import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { checkOnline } from '../lib/network';

export const OfflineBanner = () => {
  const [isOffline, setOffline] = useState(false);

  useEffect(() => {
    const ping = async () => setOffline(!(await checkOnline()));
    ping();
    const interval = setInterval(ping, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isOffline) return null;

  return (
    <View style={{ backgroundColor: '#F6F8FA', padding: 8 }}>
      <Text style={{ color: 'blue' }}>You are offline</Text>
    </View>
  );
};
