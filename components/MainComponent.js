import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent'
import {View, Platform, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Home from './HomeComponent'
import {createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import About from "./AboutComponent";
import {Icon} from 'react-native-elements';
import Leadersdetail from './LeadersComponent';
import {connect} from 'react-redux';
import {fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
import CommentComponent from "./CommentComponent";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
});


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const ReservationNavigator = createStackNavigator({
    Reservation: {screen: Reservation}
});

const MenuNavigator = createStackNavigator({

        Menu: {
            screen: Menu,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon name="menu" size={24}
                                  color='white'
                                  onPress={() => navigation.toggleDrawer()}/>
            })
        },

        Dishdetail: {
            screen: Dishdetail
        },

        Comment: {
            screen: CommentComponent
        }
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
        ContactUs: {screen: Contact}
    }, {
        initialRouteName: 'ContactUs',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: <Icon name="menu" size={24}
                              color='white'
                              onPress={() => navigation.toggleDrawer()}/>

        }
    }
);

const AboutNavigator = createStackNavigator({
        AboutUs: {
            screen: About,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon name="menu" size={24}
                                  color='white'
                                  onPress={() => navigation.toggleDrawer()}/>
            })
        },
        Leadersdetail: {screen: Leadersdetail}
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
    Home: {screen: Home}
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name="menu" size={24}
                          color='white'
                          onPress={() => navigation.toggleDrawer()}/>,
        headerTintColor: "#fff"
    })
});



const MainNavigator = createDrawerNavigator({
        Home:
            {
                screen: HomeNavigator,
                navigationOptions: {
                    title: 'Home',
                    drawerIcon: ({tintColor, focused}) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    ),
                    drawerLabel: 'Home'
                }
            },
        Menu:
            {
                screen: MenuNavigator,
                navigationOptions: {
                    title: 'Menu',
                    drawerLabel: 'Menu',
                    drawerIcon: ({tintColor, focused}) => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    ),
                },
            },
        Reservation:
            {
                screen: ReservationNavigator,
                navigationOptions: {
                    title: 'Reservation',
                    drawerLabel: 'Reservation',
                    drawerIcon: ({tintColor, focused}) => (
                        <Icon
                            name='cutlery'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    ),
                },
            },
        ContactUs:
            {
                screen: ContactNavigator,
                navigationOptions: {
                    title: 'Contact Us',
                    drawerIcon: ({tintColor, focused}) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={22}
                            color={tintColor}
                        />
                    ),
                    drawerLabel: 'Contact Us'
                },
            },
        AboutUs:
            {
                screen: AboutNavigator,
                navigationOptions: {
                    title: 'About Us',
                    drawerIcon: ({tintColor, focused}) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
