import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import TouchableScale from "react-native-touchable-scale";
import {COMMENTS} from "../shared/comments";

function RenderDish(props) {

    const dish = props.dish;

    if(dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{margin: 10}}>{dish.description}</Text>
            </Card>


        );
    } else{
        return(<View></View>);
    }
}

function RenderComment(props) {

    const comment = props.comments.map((comment)=>{
        return(
            <ScrollView>
            <Text>{comment.comment}</Text>
            </ScrollView>
                )
    });

    return(
        <View>
        {comment}
        </View>
    )
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId','default value');
        return(
            <View>
            <RenderDish dish={this.state.dishes[+dishId]} />
            <RenderComment comments={this.state.comments.filter((comment) => comment.dishId === dishId )}/>
            </View>
        );
    }
}


export default Dishdetail;
