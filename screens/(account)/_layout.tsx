import { Tabs } from 'expo-router';
import React from 'react';
import { Platform,StatusBar } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const iconStyle = {
    paddingBottom: 35,
    borderBottomColor: '#163832',
    borderBottomWidth: 2,
  };

  const _iconStyle = {
    paddingBottom: 35,
  };

  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#163832',
        tabBarInactiveTintColor: '#c6c6c6',
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            paddingTop: 25,
            backgroundColor: '#fff',
            position: 'absolute',
          },
          default: {},
        }),
      }}>
    {/* <Tabs.Screen name="Index"/> */}

      <Tabs.Screen
        name="home"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => {
          if (color === '#c6c6c6') {
              return (
                <Ionicons name="home" size={30} color={color} style={_iconStyle} />
              );
            } else {
              return (
                <Ionicons name="home" size={30} color={color} style={iconStyle} />
              );
            }
          }
        }}
      /> 

      <Tabs.Screen
        name="hub"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => {
            if (color === '#c6c6c6') {
                return (
                  <Ionicons name="apps" size={30} color={color} style={_iconStyle} />
                );
              } else {
                return (
                  <Ionicons name="apps" size={30} color={color} style={iconStyle} />
                );
              }
            }
        }}
      />

    <Tabs.Screen
        name="settings"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => {
            if (color === '#c6c6c6') {
                return (
                  <Ionicons name="cog" size={30} color={color} style={_iconStyle} />
                );
              } else {
                return (
                  <Ionicons name="cog" size={30} color={color} style={iconStyle} />
                );
              }
            }
          }}
        />

    </Tabs>
    </>
  );
}
