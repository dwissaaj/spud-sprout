import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/base/FormField'
import BaseButton from '@/components/base/BaseButton'

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className='h-full bg-black'>
        <ScrollView className='p-4 m-2 flex space-y-4'>
          <View className='w-full flex items-center '>
            <Text className='text-5xl font-fredbold text text-white'>Welcome to Garden!🐝</Text>
          </View>
          <View>
            <Text className='text-white font-cbnreg text-xl'>Gardening is a way too relieve stress</Text>
          </View>
          <View className='mt-4 '>
          <FormField onChangeText={(e) => setForm({...form, email: e})} keyboardType={'email-address'} value={form.email} title='Your Email' placeholder='Email Address' />
          <FormField onChangeText={(e) => setForm({...form, password: e})} keyboardType={'email-address'} value={form.password} title='Your Password' placeholder='Secret' />
          </View>
          <View>
            <BaseButton  title="Let's Go" isLoading={false} containerStyles='bg-white' textStyle=' font-fredbold' handlePress={() => console.log("Pressed")}/>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}