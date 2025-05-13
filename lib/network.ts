import * as Network from 'expo-network';

export const checkOnline = async () => {
  const status = await Network.getNetworkStateAsync();
  return status.isConnected && status.isInternetReachable;
};
