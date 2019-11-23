import React, {Component} from 'react';
import {Text, SafeAreaView, ScrollView, View, FlatList} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {LEADERS} from "../shared/leaders";
import TouchableScale from "react-native-touchable-scale";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
};

function History(){
    return(
        <Card
            title="Our history"
        >
            <Text style={{margin: 10}}>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
                excellence in Hong Kong.
                With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys
                patronage from the A-list clientele in Hong Kong.
                Featuring four of the best three-star Michelin chefs in the world, you never know what will
                arrive on your plate the next time you visit us.
                {'/n'}
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our
                CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    )
}

class About extends Component {


    static navigationOptions = {
        title: 'About Us',
    };

      render() {


        const renderLeaders = ({item, index}) => {

            return (
                <ListItem
                    margin={10}
                    padding={10}
                    Component={TouchableScale}
                    activeScale={0.95}
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Leadersdetail', {id: item.id})}
                    leftAvatar={{source: {uri: baseUrl + item.image}, showEditButton: false}}
                    bottomDivider
                />
            );
        };
        const { navigate } = this.props.navigation;



          if (this.props.leaders.isLoading) {
              return(
                  <ScrollView>
                      <History />
                      <Card
                          title='Corporate Leadership'>
                          <Loading />
                      </Card>
                  </ScrollView>
              );
          }
          else if (this.props.leaders.errMess) {
              return(
                  <ScrollView>
                      <History />
                      <Card
                          title='Corporate Leadership'>
                          <Text>{this.props.leaders.errMess}</Text>
                      </Card>
                  </ScrollView>
              );
          }
          else {
              return(
                  <ScrollView>
                      <History />
                      <Card
                          title='Corporate Leadership'>
                          <FlatList
                              data={this.props.leaders.leaders}
                              renderItem={renderLeaders}
                              keyExtractor={item => item.id.toString()}
                          />
                      </Card>
                  </ScrollView>
              );
          }
    }
    }

export default connect(mapStateToProps)(About);
