import React from 'react';
import { View, Text } from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import TouchableScale from "react-native-touchable-scale";

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

function Dishdetail(props) {
    return (<RenderDish dish={props.dish}/>);
}


export default Dishdetail;
