import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Calendar from "../pages/calendar";
import Routine from "../pages/routine";
import Todos from "../pages/to-do";
import Settings from "../pages/settings";
import Alarm from "../pages/alarm";

const homeName = "To-do";
const routineName = "Routines";
const calendarName = "Calendar";
const alarmName = "Alarm";
const settingsName = "Settings";

// Number of To-dos left
const numberOfToDo = 1;

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            switch (routeName) {
              case homeName:
                iconName = focused ? "checkbox-outline" : "checkbox-outline";
                break;
              case routineName:
                iconName = focused ? "infinite-sharp" : "infinite-outline";
                break;
              case calendarName:
                iconName = focused ? "calendar" : "calendar-outline";
                break;
              case alarmName:
                iconName = focused ? "alarm-outline" : "alarm-outline";
                break;
              case settingsName:
                iconName = focused ? "settings" : "settings-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name={homeName}
          component={Todos}
          options={numberOfToDo > 0 ? { tabBarBadge: numberOfToDo } : {}}
        />
        <Tab.Screen name={routineName} component={Routine} />
        <Tab.Screen name={calendarName} component={Calendar} />
        <Tab.Screen name={alarmName} component={Alarm} />
        <Tab.Screen name={settingsName} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
