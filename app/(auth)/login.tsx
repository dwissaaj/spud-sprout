import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/base/FormField'
import BaseButton from '@/components/base/BaseButton'
import { Link } from 'expo-router'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [loading, setloading] = useState(false)
  console.log('Logging email', form.email)
  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView>
        <View className='flex w-full justify-center items-center '>
        <Text className='text-5xl font-fredbold text-white text-white'>Login</Text>
      
        </View>
        <View className='m-4 flex flex-col '>
        <FormField onChangeText={(e) => setForm({...form, email: e})} keyboardType={'email-address'} value={form.email} title='Your Email' placeholder='Email Address' />
        <FormField onChangeText={(e) => setForm({...form, password: e})} keyboardType={'email-address'} value={form.password} title='Your Password' placeholder='Secret' />
        <BaseButton handlePress={() => console.log("Submit form")} isLoading={loading} containerStyles='bg-primary mt-4' textStyle='text-white font-fredreg' title='Login' />
        </View>
        <View className='w-full items-center justify-center m-4 flex flex-row gap-2 '>
          <Text className='text-xl text-white font-fredreg'>Don't have a account yet?</Text>
          <Link className='text-xl text-primary font-fredreg' href={'/register'}> Go Here</Link>
        </View>
        

    </ScrollView>
    </SafeAreaView>
  )
}

export default Login