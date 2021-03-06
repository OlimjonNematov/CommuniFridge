/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import TabOneScreen from '../screens/Home';
 import TabTwoScreen from '../screens/Offers';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 import Profile from '../screens/Profile';
 import History from '../screens/History';
 import Home from '../screens/Home';
 import Post from '../screens/Post';
 import Offers from '../screens/Offers';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTab.Screen
         name="Home"
         component={Home}
         options={({ navigation }: RootTabScreenProps<'Home'>) => ({
           title: 'Home',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={26} color={color}/>,
         })}
       />
       <BottomTab.Screen
         name="Offers"
         component={Offers}
         options={{
           title: 'Offers',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="offer" size={26} color={color}/>,
         }}
       />
        <BottomTab.Screen
         name="Post"
         component={Post}
         options={{
           title: 'Post',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="camera" size={26} color={color}/>,
         }}
       />
       <BottomTab.Screen
         name="History"
         component={History}
         options={{
           title: 'History',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={26} color={color}/>,
         }}
       />   
       <BottomTab.Screen
         name="Profile"
         component={Profile}
         options={{
           title: 'Profile',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={26} color={color}/>,
         }}
       />
       
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }