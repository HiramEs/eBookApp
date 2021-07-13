import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import { icons } from '../constanst';
import { FONTS } from '../constanst/theme';
import Explore from '../screens/Explore';

const Tab = createBottomTabNavigator();

const CustomTanBar = props => {
    return (
        <BottomTabBar {...props.props} />
    )
}

export default function Tabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
                elevation: 0,
                height: 55
            }
        }}
            tabBar={props => <CustomTanBar props={props} />}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={icons.home} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        marginTop: 10,
                        tintColor: focused ? "black" : "grey"
                    }} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "black" : "grey", ...FONTS.body4 }} >Home</Text>
                )
            }} />
            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={icons.explore} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        marginTop: 10,
                        tintColor: focused ? "black" : "grey"
                    }} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "black" : "grey", ...FONTS.body4 }} >Explore</Text>
                )
            }} />
            <Tab.Screen name="Saved" component={Explore} options={{
                tabBarIcon:({focused}) => (
                    <Image source={icons.saved} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        marginTop: 10,
                        tintColor: focused ? "black" : "grey"
                    }} />
                ),
                tabBarLabel: ({focused}) => (
                    <Text style={{color: focused ? "black" : "grey" ,...FONTS.body4}} >Saved</Text>
                )
            }} />
            <Tab.Screen name="Search" component={Explore} options={{
                tabBarIcon:({focused}) => (
                    <Image source={icons.search} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        marginTop: 10,
                        tintColor: focused ? "black" : "grey"
                    }} />
                ),
                tabBarLabel: ({focused}) => (
                    <Text style={{color: focused ? "black" : "grey" ,...FONTS.body4}} >Search</Text>
                )
            }} />
        </Tab.Navigator>
    )
}
