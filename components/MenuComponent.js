import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from  'react-native-elements';
import {Image} from "react-native-elements";
import TouchableScale from 'react-native-touchable-scale';
// Only if no expo

function Menu(props) {

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
                leftAvatar={{ source: require('./images/zucchipakoda.png'), showEditButton: true }}
            />


        );
    };

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
            bottomDivider
        />


    );
}


export default Menu;
