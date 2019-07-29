import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import {connect} from "react-redux"
import {getCurrentProfile} from "../../Store/actions/profileAction"
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./profileAbout";
import {List} from "react-native-elements";
import ProfileCreds from "./ProfileCreds";
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
            // view=<FlatList data={[{key:<ProfileHeader profile={profile} />},{key:<ProfileAbout profile={profile} />}]}   renderItem={(view) => <View>{view.key}</View>}
            // />
          view = <ScrollView>
              <ProfileHeader profile={profile}/>
              <ProfileAbout profile={profile}/>
              <ProfileCreds profile={profile} />
              </ScrollView>  
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