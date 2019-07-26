import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'

export default class Button extends Component {
    render() {
        const {color,pressHandler,children} = this.props;
        let style1=null;
        if(color==='info'){
            style1=styles.containerInfo
        }else{
            style1=styles.containerSuccess
        }
        return (
            <TouchableOpacity style={style1} onPress={pressHandler()}>
                {children}
            </TouchableOpacity>
        )
    }
}


const styles= StyleSheet.create({
    containerInfo:{
        marginHorizontal: 10,
        backgroundColor: "#00C8FF",
        alignItems:"center",
        justifyContent: "center",
        paddingVertical: 10,
        borderColor: "#00C8FF",
        borderRadius: 20,
        borderWidth: 1,
    },
    containerSuccess:{
        marginHorizontal: 10,
        backgroundColor: "#0B6623",
        alignItems:"center",
        justifyContent: "center",
        paddingVertical: 10,
        borderColor: "#0B6623",
        borderRadius: 20,
        borderWidth: 1,
    }
})