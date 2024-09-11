import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Register() {
  return (
    <SafeAreaView className='h-full bg-black'>
        <ScrollView>
          <View className='w-full flex items-center p-2'>
            <Text className='text-5xl font-fredbold text text-white'>Welcome to Garden! 🐝</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}