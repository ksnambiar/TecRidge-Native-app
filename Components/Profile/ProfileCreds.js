import React, { Component } from 'react'
import { View ,ScrollView} from 'react-native'
import {Text,Card, Button, Badge} from "react-native-elements"
export default class ProfileCreds extends Component {
    render() {
        const {profile} = this.props;
        let exp,proj;
        exp=Object.keys(profile.experience).map((obj,i)=>{
            let data=profile.experience[obj]
            return <Card key={i}>
                <Text h4 style={{color:"gray",margin:5}}>{data.company}</Text>
                <Card>
                <Text style={{color:"silver"}}>Domain of Work</Text>
                <Text>{data.domain}</Text>
                </Card>
                <Card>
                    <Text style={{color:"silver"}}>location</Text>
                <Text>{data.location}</Text>
                </Card>
                </Card>
        })
        proj = Object.keys(profile.projects).map((obj,i)=>{
            let data = profile.projects[obj];
            return <Card key={i}>
            <Text h4 style={{color:"gray",margin:5}}>{data.name}</Text>
            <Card>
            <Text style={{color:"silver"}}>Description</Text>
            <Text>{data.description}</Text>
            </Card>
            <Card>
                <Button title="more details" type="outline" />
            </Card>
            </Card>
        })
        return (
            <View style={{backgroundColor:"white",padding:5}}>
                <Card>
                <View>
                    <Text h4 style={{color:"#00c8ff"}}>Experience</Text>
                <ScrollView horizontal={true}>
                    {exp}
                </ScrollView>
                </View>
                </Card>
                <Card>   
                <View>
                    <Text h4 style={{color:"#00c8ff"}}>Projects {Object.keys(profile.projects).length}</Text> 
                    <ScrollView horizontal={true}>
                    {proj}
                    </ScrollView>
                </View>
                </Card>

            </View>
        )
    }
}
