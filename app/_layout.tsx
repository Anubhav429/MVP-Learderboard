import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4741eff',
          
        },
        headerShown:false,
        // statusBarHidden: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" /> 
    </Stack>
  );
}