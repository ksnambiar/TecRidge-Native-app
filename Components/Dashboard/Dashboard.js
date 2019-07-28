import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Card,Avatar} from "react-native-elements"
import {dataBase} from "../../utils/firebase";
// import console = require('console');
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             profile:null,
             isLoading:false
        }
    }
    componentDidMount(){
        this.setState({isLoading:true})
        console.log(this.props.uid);
        const {uid} = this.props;
        dataBase.ref("profiles/"+uid).once("value").then(obj=>{
            this.setState({profile:obj.val(),isLoading:false})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const {profile,isLoading} = this.state;
        let view;
        console.log(profile)
        if(profile && isLoading){
            view=<Card>
                <Text>Loaduing</Text>
                </Card>
        }else{
            view=<Card>
                <Text>Laoded</Text>
                </Card>
        }
        return (
            <View>
                {view}
            </View>
        )
    }
}
