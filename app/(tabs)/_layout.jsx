import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Genre from '../(tabs)/genre'; // Pfad anpassen
import Search from '../(tabs)/search'; // Pfad anpassen
import Create from '../(tabs)/creat'; // Pfad anpassen
import Maps from '../(tabs)/maps'; // Pfad anpassen
import Profile from '../(tabs)/profile'; // Pfad anpassen
import { icons } from '../../constants';

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 20, height: 20, marginBottom: 2 }}
      />
      <Text style={{ color: focused ? color : '', fontSize: 12 }}>
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#f07151', // Farbe für aktives Icon und Text
        tabBarInactiveTintColor: '#aaa', // Farbe für inaktives Icon und Text
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === 'Suche') {
            iconName = icons.search;
          } else if (route.name === 'Events') {
            iconName = icons.genre;
          } else if (route.name === 'Erstellen') {
            iconName = icons.plus;
          } else if (route.name === 'Karte') {
            iconName = icons.maps;
          } else if (route.name === 'Profil') {
            iconName = icons.profile;
          }

          return (
            <TabIcon
              icon={iconName}
              color={color}
              name={route.name}
              focused={focused}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Suche"
        component={Search}
        options={{
          title: 'Suche',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={Genre}
        options={{
          title: 'Events',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Erstellen"
        component={Create}
        options={{
          title: 'Erstellen',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Karte"
        component={Maps}
        options={{
          title: 'Karte',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          title: 'Profil',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabsLayout;
