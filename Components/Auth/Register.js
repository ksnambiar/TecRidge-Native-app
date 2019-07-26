import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
import Card from "../Common/Card";
import CardSection from "../Common/CardSection"
import Input from "../Common/Input"
import {Actions} from "react-native-router-flux";
export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:"",
             usn:"",
             email:"",
             password:"",
             contact:""
        }
        this.dataChangeHandler = this.dataChangeHandler.bind(this)
    }
    dataChangeHandler(name,text){
        this.setState({[name]:text})
    }
    registerHandler(){
        Actions.login()
    }
    render() {
        return (
        <Card>
            <CardSection>
                <Text>Register on this platformasd </Text> 
            </CardSection>
            <CardSection>
                <Input value={this.state.fullName} changeHandler={this.dataChangeHandler} name="fullName" />
            </CardSection>
            <CardSection>
                <Input value={this.state.email} changeHandler={this.dataChangeHandler} name="email" />
            </CardSection>
            <CardSection>
                <Input value={this.state.contact} changeHandler={this.dataChangeHandler} name="contact" />
            </CardSection>
            <CardSection>
                <Input value={this.state.password} changeHandler={this.dataChangeHandler} name="password" />
            </CardSection>
            <CardSection>
                <TouchableOpacity style={styles.containerInfo} onPress={this.registerHandler}>
                <Text>Register</Text>
                </TouchableOpacity>
            </CardSection>
        </Card>
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