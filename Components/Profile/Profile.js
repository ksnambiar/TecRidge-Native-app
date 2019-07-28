import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from "react-redux"
import {getCurrentProfile} from "../../Store/actions/profileAction"
import ProfileHeader from "./ProfileHeader";
class Profile extends Component {
    componentDidMount(){
       const uid= this.props.uid
       this.props.getCurrentProfile(uid);
       console.log(uid);
    }
    render() {
        const {profile,loading} = this.props.profile
        let view;
        if(profile && !loading){
            view=<View>
                <ProfileHeader profile={profile} />
                </View>
        }else{
            view=<Card>
                <Text>Loading ...</Text>
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

export default connect(mapStateToProps,{getCurrentProfile})(Profile)