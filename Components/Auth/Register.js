import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
import Card from "../Common/Card";
import CardSection from "../Common/CardSection"
// import Input from "../Common/Input"
import {Actions} from "react-native-router-flux";
import {Button,Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
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
        this.registerHandler = this.registerHandler.bind(this);
    }
    dataChangeHandler(name,text){
        this.setState({[name]:text})
    }
    registerHandler(){
        const {email,fullName,password,contact} =this.state
        console.log(email,fullName,password,contact)
        // Actions.login()
    }
    render() {
        return (
        <Card>
            <CardSection>
                <Text>Register on this platform </Text> 
            </CardSection>
            <CardSection>
                {/* <Input value={this.state.fullName} changeHandler={this.dataChangeHandler} name="fullName" /> */}
                <Input value={this.state.fullName} onChangeText={(text)=>this.dataChangeHandler("fullName",text)} leftIcon={ <Icon name='user' color="black" size={24} /> } placeholder="enter your full name"/>
            </CardSection>
            <CardSection>
                {/* <Input value={this.state.email} changeHandler={this.dataChangeHandler} name="email" /> */}
                <Input value={this.state.email} onChangeText={(text)=>this.dataChangeHandler("email",text)} leftIcon={ <Icon name='envelope' color="black" size={24} /> } placeholder="enter your email"/>

            </CardSection>
            <CardSection>
                {/* <Input value={this.state.contact} changeHandler={this.dataChangeHandler} name="contact" /> */}
                <Input value={this.state.contact} onChangeText={(text)=>this.dataChangeHandler("contact",text)} leftIcon={ <Icon name='mobile' color="black" size={24} /> } placeholder="enter your contact no."/>

            </CardSection>
            <CardSection>
                {/* <Input value={this.state.password} changeHandler={this.dataChangeHandler} name="password" /> */}
                <Input value={this.state.password} onChangeText={(text)=>this.dataChangeHandler("password",text)} leftIcon={ <Icon name='unlock' color="black" size={24} /> } placeholder="password please"/>
            </CardSection>
            <CardSection>
                <Button title="Register" type="solid" onPress={this.registerHandler} />
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