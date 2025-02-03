import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: 'mon-sb',
        }
    }}>



<Tabs.Screen
         name="index"
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color , size }) => <Ionicons name="search" size={size} color={color} />
               

          }
          } />

<Tabs.Screen
         name="wishlists"
          options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color , size }) => <MaterialCommunityIcons name="heart-outline" size={size} color={color} />
               

          }
          } />
          <Tabs.Screen
         name="trips"
          options={{
            tabBarLabel: 'Trips',
            tabBarIcon: ({ color , size }) => <MaterialIcons name="travel-explore" size={size} color={color} />
               

          }
          } />
  <Tabs.Screen
         name="inbox"
          options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ color , size }) => <MaterialCommunityIcons name="message-outline" size={size} color={color} />
               

          }
          } />
           <Tabs.Screen
         name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color , size }) => <Ionicons name="person-circle-outline" size={size} color={color} />
               

          }
          } />

    </Tabs>
  )
}

export default _layout