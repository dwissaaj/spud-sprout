import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type buttonType = {
    title: string,
    handlePress : () => void,
    containerStyles: string,
    isLoading: boolean,
    textStyle: string
}
const BaseButton = ({title, handlePress, containerStyles,
    isLoading, textStyle
}: buttonType) => {
  return (
    <TouchableOpacity
    onPress={handlePress} activeOpacity={0.8}
    className={` rounded-xl ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}>
        <Text className={`text-center text-primary font-cbnreg text-lg p-3 ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BaseButton