import BaseButton from "@/components/base/BaseButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="bg-black w-full min-h-full justify-center items-center  px-4">
          <Image source={require('../assets/images/landing/flower.png')} resizeMode="contain" className="w-full h-1/4 " />
          <View className="flex flex-row gap-3 ">
            <Text className="text-4xl font-fredbold text-white">Spud</Text>
            <Text className="text-4xl font-fredbold text-primary">Sprout</Text>
          </View>
          <Text className="text-md font-cabinreg text-white">From Seed to Harvest! Simplified</Text>
          <BaseButton handlePress={() => router.push('/login')} isLoading={false} containerStyles="w-full mt-7 bg-primary " textStyle="text-white" title="Let's Plan Together" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="" style="light" />
    </SafeAreaView>
  );
}
