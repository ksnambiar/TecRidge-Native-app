import React, { Component } from 'react'
import { View , ScrollView} from 'react-native'
import {Card,Text,Button} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
export default class Projects extends Component {
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
        let view,view2;
        let style;
        if(profile.projects){
            view=Object.keys(profile.projects).map((obj,i)=>{
                let data = profile.projects[obj]
                return <Card key={i}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text h4 style={{color:"gray",margin:7}}>{data.name}</Text>

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
        if(profile.wprojects){
            view2=Object.keys(profile.wprojects).map((obj,i)=>{
                let data = profile.wprojects[obj];
                return <Card key={i}>
                    <View>
                        <View style={{marginVertical:5}}>
                        <Button icon={<Icon name='info' size={20} color='#ffffff'/>}  type='solid' buttonStyle={{width:40,borderRadius:60}}/>
                    </View>
                    </View>
                    </Card>
            })
        }else{
            view2=<Card>
                <Text>No Projects contributing to yet</Text>
                </Card>
        }
        return (
            <View style={{backgroundColor:"white",marginBottom:7}}>
                <ScrollView contentContainerStyle={{maxHeight:400}}>
                {view}
                </ScrollView> 
                <Text>Contributions</Text>
                <ScrollView contentContainerStyle={{maxHeight:400}}>
                {view2}
                </ScrollView> 
            </View>
        )
    }
}
