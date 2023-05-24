import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome/welcome';
import LastPeriod from './screens/lastPeriod/LastPeriod';

const App = () => {


  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="LastPeriod" component={LastPeriod} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App



