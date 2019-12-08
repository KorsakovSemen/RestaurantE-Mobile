import React, {Component} from 'react';
import {Text, ScrollView, View, FlatList} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {COMMENTS} from "../shared/comments";
import * as MailComposer from 'expo-mail-composer';




class Contact extends Component{

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['confusion@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

    render(){
        return (
            <Animatable.View animation="fadeInUp" duration={3000} delay={1000}>
                <Card
                    title="Contact information"
                >
                    <Text style={{margin: 10}}>
                        121, Clear Water Bay Road{'\n'}

                        Clear Water Bay, Kowloon{'\n'}

                        HONG KONG{'\n'}

                        Tel: +852 1234 5678{'\n'}

                        Fax: +852 8765 4321{'\n'}

                        Email:confusion@food.net{'\n'}
                    </Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                    />
                </Card>
                <FlatList
                    data={COMMENTS}
                    renderItem={({item}) => <Card title={item.author}/>}
                    keyExtractor={item => item.id.toString()}
                />

            </Animatable.View>
        )
    }

}

export default Contact;
