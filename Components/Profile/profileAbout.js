import React, { Component } from 'react'
import { View } from 'react-native'
import {Text,Divider,Card} from "react-native-elements"
export default class profileAbout extends Component {
    render() {
        const {profile} = this.props
        return (
            <View style={{width:"100%",padding:5,backgroundColor:"white"}}>
                <Card>
                    <View  style={{flexDirection:"row",justifyContent:"space-around"}}> 
                    <Text h4 style={{color:"#00c8ff"}}>Bio</Text>
                <Text h5>{profile.bio}</Text>
                </View>                
                </Card>
                <Card  >
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <Text h4 style={{color:"#00c8ff"}}>Skills</Text>
                    <View>
                    {profile.skills.split(",").map((element,i) => {
                      return <Text key={i} style={{borderColor:"gray",borderWidth:1,padding:6}}>{element}</Text>  
                    })}
                    </View>
                </View>
            </Card>
            </View>
        )
    }
}
