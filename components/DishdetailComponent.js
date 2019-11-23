import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import TouchableScale from "react-native-touchable-scale";
import {COMMENTS} from "../shared/comments";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
})


function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (

            <Card
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                />
            </Card>


        );
    } else {
        return (<View></View>);
    }
}

function RenderComment(props) {

    const comment = props.comments.map((comment) => {
        return (
            <ScrollView>
                <Card>
                    <Text>{comment.comment}</Text>
                </Card>
            </ScrollView>
        )
    });

    return (
        <View>
            {comment}
        </View>
    )
}

class Dishdetail extends Component {

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', 'default value');


        return (
            <View>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                            favorite={this.props.favorites.some(el => el === dishId)}
                            onPress={() => this.markFavorite(dishId)}
                />
                <RenderComment comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>
            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
