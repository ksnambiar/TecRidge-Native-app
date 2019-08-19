import React, { Component } from 'react'
import {View ,ScrollView} from 'react-native'
import {Card,Text,Button} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
export default class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false
        }
        this.toggleOpen=this.toggleOpen.bind(this)
    }
    toggleOpen(){
        this.setState({open:!this.state.open});
    }
    render() {
        const {profile} = this.props
        let view;
        let style;
        if(profile.experience){
            view=Object.keys(profile.experience).map((obj,i)=>{
                let data = profile.experience[obj]
                return <Card key={i}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text h4 style={{color:"gray",margin:7}}>{data.company}</Text>
                        
                        <View>
                        <Button icon={<Icon name='info' size={20} color='#ffffff'/>}  type='solid' buttonStyle={{width:40,borderRadius:60}}/>
                    </View>
                    </View>
                    </Card>
            })
        }else{
            view=<View>
                <Text>no experience creds</Text>
                </View>
        }
        return (
            <View style={{backgroundColor:"white",marginBottom:7}}>          
                <ScrollView contentContainerStyle={{maxHeight:400}}>
                {view}
                </ScrollView> 
            </View>
        )
    }
}
