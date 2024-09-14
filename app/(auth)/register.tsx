import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/base/FormField'
import BaseButton from '@/components/base/BaseButton'
import { Link } from 'expo-router'
import { createUser } from '@/lib/appwrite'
export default function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  })
  const submit = () => {
    console.log("Register submit!!!")
    createUser()
    
  }
  return (
    <SafeAreaView className='h-full bg-black'>
      <ScrollView >
        <View className=' flex space-y-4 w-full min-h-[85vh] justify-center px-4'>
        <View className="bg-black w-full ">
          <View className='w-full flex items-center '>
            <Text className='text-5xl font-fredbold text text-white'>Welcome to Garden!🐝</Text>
          </View>
          <View>
            <Text className='text-white font-cbnreg text-xl'>Gardening is a way too relieve stress</Text>
          </View>
          <View className='mt-4 '>
          <FormField onChangeText={(e) => setForm({ ...form, email: e })} keyboardType={'email-address'} value={form.username} title='Username' placeholder='Username' />
            <FormField onChangeText={(e) => setForm({ ...form, email: e })} keyboardType={'email-address'} value={form.email} title='Email' placeholder='Email' />
            <FormField onChangeText={(e) => setForm({ ...form, password: e })} keyboardType={'default'} value={form.password} title='Password' placeholder='Secret' />
          </View>
          <View className='mt-4'>
            <BaseButton title="Let's Go" isLoading={false} containerStyles='bg-white' textStyle=' font-fredbold' handlePress={submit} />
          </View>
        </View>
        <View className='w-full items-center justify-center m-4 flex flex-row gap-2 '>
            <Text className='text-xl text-white font-fredreg'>Already have one?</Text>
            <Link className='text-xl text-primary font-fredreg' href={'/login'}>Login Here</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}