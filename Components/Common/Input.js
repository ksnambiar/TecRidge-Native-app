import React, { Component } from 'react'
import { Text, View , TextInput , StyleSheet} from 'react-native'

export default class Input extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.props.value} onChangeText={(text)=>this.props.changeHandler(this.props.name,text)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5
    }
})