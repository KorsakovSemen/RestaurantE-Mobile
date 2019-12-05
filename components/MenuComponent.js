import React, {Component} from 'react';
import {View, FlatList, PanResponder, Alert} from 'react-native';
import {ListItem, Tile, Card} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import {Loading} from "./LoadingComponent";
import * as Animatable from "react-native-animatable";
import Swipeout from "react-native-swipeout";
import {dishes} from "../redux/dishes";
import {deleteFavorite} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        favorites: state.favorites
    }
};

const mapDispatchToProps = dispatch => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});


class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };


    render() {


        const renderMenuItem = ({item, index}) => {

            const rightButton = [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Delete favorite',
                            'Are you want delete ?',
                            [
                                {text: 'Cancel',
                                    onPress: () => console.log('Not'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'Ok',
                                    onPress: () => this.props.deleteFavorite(item.id)
                                }

                            ],
                            { cancelable: false}

                        );
                    }


                }
            ];

            return (
                <Swipeout right={rightButton} autoClose={true}>
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    imageSrc={{ uri: baseUrl + item.image}}
                />
                </Swipeout>

            );
        };

        const { navigate } = this.props.navigation;
        if(this.props.dishes.isLoading){
            return(
                    <Loading/>
                )
        }

        return (

            <Animatable.View animation="zoomInUp" duration={1000} delay={800}  >
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
            </Animatable.View>


        );
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
