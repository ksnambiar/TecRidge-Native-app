import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Card,Button,Avatar} from "react-native-elements"
export default class Menu extends Component {
    render() {
        const {profile} = this.props;
        return (
            <View>
                <Card>
                <View  style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Avatar 
                rounded
                source={{
                    uri:`https://robohash.org/${profile.fullName}`
                }}
                size={55}
                />
                <View>
                <Text>{profile.fullName}</Text>
                <Button title="View Profile" type="outline" onPress={this.profileViewer}/>
                </View>
                </View>
                </Card>
            </View>
        )
    }
}
