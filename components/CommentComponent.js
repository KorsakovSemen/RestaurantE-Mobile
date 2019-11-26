import React, {Component} from 'react';
import {Text, SafeAreaView, ScrollView, View, FlatList} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {LEADERS} from "../shared/leaders";
import TouchableScale from "react-native-touchable-scale";
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Loading} from './LoadingComponent';

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
};



class CommentComponent extends Component {

    render() {

        return (
            <ScrollView>
                <Text>{props.comment}</Text>
            </ScrollView>
        )
    }
}


export default CommentComponent
