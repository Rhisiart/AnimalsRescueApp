import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color}/>
          )
        }}
      />
      <Tabs.Screen 
        name="find"
        options={{
          title: "Find",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color}/>
          )
        }}
      />
    </Tabs>
  )
}