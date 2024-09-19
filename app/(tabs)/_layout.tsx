import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'
type TabProp = {
  icon: any,
  color: string,
  name: string,
  focused: boolean
}
const TabsIcon = ({icon,color, name, focused,...props}: TabProp) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image source={icon} tintColor={color} className='w-6 h-6' resizeMode='contain' />
      <Text className={`${focused ? "font-fredreg" : "font-pregular"} text-xs`} 
        style={{ color: color }} >
        {name}
      </Text>
    </View>
  )
}
const TabsIconSpecial = ({icon,color, name, focused,...props}: TabProp) => {
  return (
    <View className='flex justify-center items-center gap-2 p-2'>
      <Image source={icon} tintColor={color} className='w-6 h-6' resizeMode='contain' />
      <Text className={`${focused ? "font-fredreg" : "font-pregular"} text-xs text-center`} 
        style={{ color: color }} >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
        
        screenOptions={{
          tabBarActiveTintColor: "#125B50",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1a1818",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
            paddingTop: 5
          },
        }}>
          <Tabs.Screen name='home' options={{title: 'home', 
            headerShown: false,
            tabBarIcon: ({color,focused}) => (
              <TabsIcon icon={icons.home} color={color} name='Home' focused={focused} />
             )
            }} />
            <Tabs.Screen name='blog' options={{title: 'blog', 
            headerShown: false,
            tabBarIcon: ({color,focused}) => (
              <TabsIcon icon={icons.blog} color={color} name='Blog' focused={focused} />
             )
            }} />
            <Tabs.Screen name='journal' options={{title: 'journal', 
            headerShown: false,
      
            tabBarIcon: ({color,focused}) => (
              <TabsIconSpecial icon={icons.journal} color={color} name='Journal' focused={focused} />
             )
            }} />
            <Tabs.Screen name='shop' options={{title: 'shop', 
            headerShown: false,
            tabBarIcon: ({color,focused}) => (
              <TabsIcon icon={icons.shop} color={color} name='Shop' focused={focused} />
             )
            }} />
            <Tabs.Screen name='account' options={{title: 'account', 
            headerShown: false,
            tabBarIcon: ({color,focused}) => (
              <TabsIcon icon={icons.account} color={color} name='Account' focused={focused} />
             )
            }} />
        </Tabs>
    </>
  )
}

export default TabsLayout

