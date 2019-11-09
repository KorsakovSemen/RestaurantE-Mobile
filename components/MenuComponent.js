import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Image} from "react-native-elements";
import TouchableScale from 'react-native-touchable-scale';
import {DISHES} from '../shared/dishes';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };


    render() {

        const renderMenuItem = ({item, index}) => {

            return (
                <ListItem
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    leftAvatar={{source: require('./images/zucchipakoda.png'), showEditButton: true}}
                />


            );
        };

        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                bottomDivider
            />


        );
    }

}


export default Menu;
