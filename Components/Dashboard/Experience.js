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
                    <View>
                        <Text h4 style={{color:"gray",margin:7}}>{data.company}</Text>
                        <Card>
                            <Text style={{color:"silver"}}>Domain</Text>
                            <Text>{data.domain}</Text>
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
        return (
            <View style={{backgroundColor:"white",paddingVertical:8}}>
                <Button title="Experience" onPress={this.toggleOpen} type="clear" iconRight={true}  icon={this.state.open?<View style={{marginLeft:100}}><Icon name='caret-down' color="black" size={24} /></View>:<View style={{marginLeft:100}}><Icon name='caret-right' color="black" size={24} /></View>} />
                {this.state.open?
                <ScrollView>
                {view}
                </ScrollView>:null
                }
            </View>
        )
    }
}
