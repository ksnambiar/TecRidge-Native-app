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
                    <View>
                        <Text h4 style={{color:"gray",margin:7}}>{data.name}</Text>
                        <Card>
                            <Text style={{color:"silver"}}>description</Text>
                            <Text>{data.description}</Text>
                        </Card>
                        <View style={{marginVertical:5}}>
                        <Button title="More info" type='solid'/>
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
                        <Card>
                        <Text h4 style={{color:"gray",margin:7}}>{data.name}</Text>
                        </Card>
                        <View style={{marginVertical:5}}>
                        <Button title="More info" type='solid'/>
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
            <View style={{backgroundColor:"white",paddingVertical:8}}>
                <Button title="Projects" onPress={this.toggleOpen} type="clear" iconRight={true}  icon={this.state.open?<View style={{marginLeft:100}}><Icon name='caret-down' color="black" size={24} /></View>:<View style={{marginLeft:100}}><Icon name='caret-right' color="black" size={24} /></View>} />
                {this.state.open?<View>
                    <Text>Your Projects</Text>
                <ScrollView horizontal={true} >
                {view}
                </ScrollView>
                <Text>Contributions</Text>
                <ScrollView horizontal={true}>
                {view2}
                </ScrollView>
                </View>:null              
                }
            </View>
        )
    }
}
