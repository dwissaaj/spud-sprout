import { View, Text, TextInput } from 'react-native'
import React from 'react'
export type Props = {
    title: string,
    value: string,
    placeholder: string,
    onChangeText: (e: string) => void,
    keyboardType: string | any
}

const FormField = ({title, value, placeholder,onChangeText, keyboardType}: Props) => {
  return (
    <View className='space-y-2 '>
    <Text className='text-xl text-white'>{title}</Text>
    <View className=' bg-black-100 p-4 rounded-xl border-2 border-black-100 text-white '>
    <TextInput keyboardType={keyboardType} placeholderTextColor="#94a3b8" value={value} placeholder={placeholder} onChangeText={onChangeText} className='text-white font-cbnreg ' />
    </View>
    </View>
  )
}

export default FormField