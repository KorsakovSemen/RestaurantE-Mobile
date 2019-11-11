import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent'
import { View, Platform} from 'react-native';
import Home from './HomeComponent'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import About from "./AboutComponent";


const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const ContactNavigator = createStackNavigator({
    ContactUs: { screen: Contact }
}, {
        initialRouteName: 'ContactUs',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }

);

const AboutNavigator = createStackNavigator({
        AboutUs: { screen: About }
    }, {
        initialRouteName: 'AboutUs',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }

);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"
        },
        headerTintColor: "#fff"
    })
});

const MainNavigator = createDrawerNavigator({
    Home:
        { screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
                ),
                drawerLabel: 'Home'
            }
        },
    Menu:
        { screen: MenuNavigator,
            navigationOptions: {
                title: 'Menu',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-menu" size={24} color={focused ? 'blue' : 'black'} />
                ),
                drawerLabel: 'Menu'
            },
        },
    ContactUs:
        { screen: ContactNavigator,
                navigationOptions: {
                    title: 'Contact Us',
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="md-menu" size={24} color={focused ? 'blue' : 'black'} />
                    ),
                    drawerLabel: 'Contact Us'
                },
            },
        AboutUs:
            { screen: AboutNavigator,
                navigationOptions: {
                    title: 'About Us',
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="md-menu" size={24} color={focused ? 'blue' : 'black'} />
                    ),
                    drawerLabel: 'About Us'
                },
            },
    },

    {
        drawerLabel: 'Navigation',
        drawerWidth: 200,
        drawerBackgroundColor: '#D1C4E9'
    }
);


class Main extends Component {

    render() {

        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'android' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator/>
            </View>
        );
    }
}

export default Main;
