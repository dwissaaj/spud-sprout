import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Blog = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
      <Text>Blog for user</Text>
    </View>
    </SafeAreaView>
  )
}

export default Blog