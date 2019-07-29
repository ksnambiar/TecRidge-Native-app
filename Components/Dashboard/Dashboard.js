import React, { Component } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getCurrentProfile} from "../../Store/actions/profileAction"
import {Card,Avatar, Button} from "react-native-elements"
import { Actions } from 'react-native-router-flux';
import MenuDrawer from 'react-native-side-drawer'
import Menu from "../SideMenu/Menu"
import Experience from "./Experience"
import Projects from "./Projects"
// import console = require('console');
class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             profile:null,
             isLoading:false,
             open:false
        }
        this.profileViewer=this.profileViewer.bind(this)
        this.toggleSide=this.toggleSide.bind(this)
    }
    componentDidMount(){
        this.setState({isLoading:true})
        console.log(this.props.uid);
        const {uid} = this.props;
        this.props.getCurrentProfile(uid)        
    }
    profileViewer(){
    //send to profile page
    Actions.profile({uid:this.props.uid});
    }
    toggleSide(){
        this.setState({open:!this.state.open})
    }
    render() {
        const {profile,loading} = this.props.profile;
        let view;
        let menu =null;
        console.log(profile,loading)
        if(profile && !loading){
           menu=<Menu profile={profile}/>
            view=<View>
                {/* <Button title="Open" onPress={this.toggleSide} /> */}
                <Text>Dashboard</Text>
                <ScrollView>
                <Experience profile={profile} />
                <Projects profile={profile} />
                </ScrollView>
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