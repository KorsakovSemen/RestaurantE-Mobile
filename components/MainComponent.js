import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform} from 'react-native';
import { Home } from './HomeComponent'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

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

const HomeNavigator  = createStackNavigator({
        Home: { screen: Menu }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        })
    }
);

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
    },
    {
        HeaderTitle: "Test",
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
