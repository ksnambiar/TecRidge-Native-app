import React, { Component } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getCurrentProfile} from "../../Store/actions/profileAction"
import {Card,Avatar, Button,ButtonGroup} from "react-native-elements"
import { Actions } from 'react-native-router-flux';
import MenuDrawer from 'react-native-side-drawer'
import Icon from "react-native-vector-icons/FontAwesome"
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
             open:false,
             index:0
        }
        this.profileViewer=this.profileViewer.bind(this)
        this.toggleSide=this.toggleSide.bind(this)
        this.topHandle=this.topHandle.bind(this)
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
    topHandle(index){
        this.setState({index})
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
                <Text>Loading</Text>
                </Card>
        }
        return (
            <View>
                <View style={{backgroundColor:"white",width:"100%",flexDirection:"row"}}>
                < ButtonGroup
                onPress={this.topHandle}
                selectedIndex={this.state.index}
                buttons={[<Icon name='home' size={24} color="gray" />,,<Icon name='bars' size={24} color="gray" />]}
                containerStyle={{height:30,width:"100%"}}
                />
                </View>
                {view}
            </View>
        )
    }
}
const mapStateToProps = state=>({
    profile:state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);