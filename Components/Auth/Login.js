import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
import Card from "../Common/Card"
import CardSection from "../Common/CardSection"
import {Actions} from "react-native-router-flux";
import {Button,Input} from "react-native-elements";
import {auth} from "../../utils/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"nambiar.sidharth00@gmail.com",
             password:"sidrocks",
             password2:""
        }
        this.dataChangeHandler = this.dataChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentWillMount(){
        const user = auth.currentUser;
        console.log(user)
        if(user){
            Actions.postAuth()
        }
    }
    dataChangeHandler(name,text){
        if(name==="password"){
            this.setState({password:text})
        }else{
        this.setState({[name]:text})
        }
    }
    submitHandler(){
        // if()
        console.log(this.state.email,this.state.password)
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(obj=>{
            console.log("logged in broo")
            console.log(obj)
            Actions.postAuth({uid:obj.user.uid});
        })
        .catch(err=>{
            console.log(err,"some error");
            this.setState({email:"",password:""});
        })
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
               <Input placeholder="Enter your email" leftIcon={ <Icon name="envelope" color="black" size={24} />} value={this.state.email} onChangeText={(text)=>this.dataChangeHandler('email',text)} />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                <Input placeholder="Password please" leftIcon={ <Icon name="unlock" color="black" size={24} />} value={this.state.password} onChangeText={(text)=>this.dataChangeHandler('password',text)} />
                </CardSection>
                <CardSection>
                    <Button  title="Login" type="solid" onPress={this.submitHandler} />
                </CardSection>
                <CardSection>
                 <View style={{justifyContent:"center",alignItems:"center"}}>
                 <Text>or</Text>
                </View>
                </CardSection>
                <CardSection>
                    <Button title="Register" onPress={this.registerRouting} type="solid" />
                </CardSection>
            </Card>
        )
    }
}


// const styles= StyleSheet.create({
//     containerInfo:{
//         marginHorizontal: 10,
//         backgroundColor: "#00C8FF",
//         alignItems:"center",
//         justifyContent: "center",
//         paddingVertical: 10,
//         borderColor: "#00C8FF",
//         borderRadius: 20,
//         borderWidth: 1,
//     },
//     containerSuccess:{
//         marginHorizontal: 10,
//         backgroundColor: "#0B6623",
//         alignItems:"center",
//         justifyContent: "center",
//         paddingVertical: 10,
//         borderColor: "#0B6623",
//         borderRadius: 20,
//         borderWidth: 1,
//     }
// })