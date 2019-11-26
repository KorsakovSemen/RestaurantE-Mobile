import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import TouchableScale from "react-native-touchable-scale";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {baseUrl} from "../shared/baseUrl";

function RenderLeader(props) {

    const leader = props.leader;

    if(leader != null) {
        return (
            <Card
                featuredTitle={leader.name}
                image={{uri: baseUrl + leader.image}}
            >
                <Text style={{margin: 10}}>{leader.description}</Text>
            </Card>


        );
    } else{
        return(<View></View>);
    }
}


class Leaderdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Leaders'
    };

    render() {
        const leaderId = this.props.navigation.getParam('id','');
        return(
            <View>
            <RenderLeader leader={this.state.leaders[+leaderId]} />
            </View>
        );
    }
}


export default Leaderdetail;
