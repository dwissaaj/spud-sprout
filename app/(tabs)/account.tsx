import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Account = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
      <Text>Account Page</Text>
    </View>
    </SafeAreaView>
  )
}

export default Account