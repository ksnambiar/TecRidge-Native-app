import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getCurrentProfile} from "../../Store/actions/profileAction"
import {Card,Avatar, Button} from "react-native-elements"
// import console = require('console');
class Dashboard extends Component {
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
        this.props.getCurrentProfile(uid)        
    }
    render() {
        const {profile,loading} = this.props.profile;
        let view;
        console.log(profile,loading)
        if(profile && !loading){
            view=<View>
            <Card>
                <View  style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Avatar 
                rounded
                source={{
                    uri:`https://robohash.org/${profile.fullName}`
                }}
                size={55}
                />
                <View>
                <Text>{profile.fullName}</Text>
                <Button title="View Profile" type="outline"/>
                </View>
                </View>
                </Card>
                <Card>
                    
                </Card>
                </View>
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
const mapStateToProps = state=>({
    profile:state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);