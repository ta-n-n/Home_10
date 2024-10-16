import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './OnboardingScreen';  // Import Onboarding
import SignInScreen from './SignInScreen';  // Import SignIn

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}  // Ẩn tiêu đề nếu muốn
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Sign In' }}  // Hiển thị tiêu đề trên màn hình SignIn
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}