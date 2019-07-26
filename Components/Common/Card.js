import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        marginHorizontal: 25,
        marginTop:25,
        padding:25
    }
})