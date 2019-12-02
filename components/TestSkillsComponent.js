import React, { Component } from 'react';
import {FlatList, View, Text, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
};

class TestSkills extends Component {

    static navigationOptions = {
        title: 'Favorites'
    };

render(){

    const { navigate } = this.props.navigation;

    const renderItem = ({item, index}) => {
        return(
          <ListItem
              key={index}
              title={item.name}
              onPress={()=>console.log("sds")}
              hideChevron={true}
          />
        );
    };

    return(
        <FlatList
            data={this.props.leaders.leaders}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

}

export default connect(mapStateToProps)(TestSkills);
