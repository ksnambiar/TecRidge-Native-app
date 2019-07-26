import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
import Card from "../Common/Card"
import Input from "../Common/Input"
import CardSection from "../Common/CardSection"
import Button from "../Common/Button"
import {Actions} from "react-native-router-flux";
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
        this.dataChangeHandler = this.dataChangeHandler.bind(this)
    }
    dataChangeHandler(name,text){
        this.setState({[name]:text})
    }
    submitHandler(){
        console.log("done submitting")
        Actions.postAuth()
    }
    registerRouting(){
        console.log("called now ")
        Actions.register()
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>Login to Tecridge</Text>
                </CardSection>
               <CardSection>
               <Text>Email</Text>
                   <Input value={this.state.email} name="email"  changeHandler={this.dataChangeHandler}/>
                </CardSection>
                <CardSection>
               <Text>Password</Text>
                   <Input value={this.state.password} name="password"  changeHandler={this.dataChangeHandler}/>
                </CardSection>
                <CardSection>
                    <TouchableOpacity onPress={this.submitHandler} style={styles.containerInfo}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </CardSection>
                <CardSection>
                 <View style={{justifyContent:"center",alignItems:"center"}}>
                 <Text>or</Text>
                </View>
                </CardSection>
                <CardSection>
                    <TouchableOpacity onPress={this.registerRouting} style={styles.containerSuccess}>
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