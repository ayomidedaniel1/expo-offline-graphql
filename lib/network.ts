import * as Network from 'expo-network';

// Checks if device is online
export const checkOnline = async () => {
  const status = await Network.getNetworkStateAsync();
  return status.isConnected && status.isInternetReachable;
};
