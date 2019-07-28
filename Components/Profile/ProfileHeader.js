import React, { Component } from 'react';
import { View, ImageBackground} from 'react-native';
import {Card, Avatar, SocialIcon,Text} from "react-native-elements";
export default class ProfileHeader extends Component {
    render() {
        const {profile} = this.props;
        return (
            <ImageBackground source={{uri:"https://picsum.photos/id/1/500"}} style={{width: '100%', height: '80%'}}>
            <View style={{justifyContent:"space-evenly",alignItems:"center"}}>
            <Avatar 
                rounded
                source={{
                    uri:`https://robohash.org/${profile.fullName}`
                }}
                size={100}
                />
            <Text h4 style={{color:"white"}}>{profile.fullName}</Text>
            <Text h5 style={{color:"white"}}>{profile.location}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
{profile.facebook.length>0? <SocialIcon type='facebook' iconSize={15} style={{height:35,width:35}} />:null
}
{profile.instagram.length>0?<SocialIcon type='instagram' iconSize={15} style={{height:35,width:35}} />:null}
{profile.twitter.length>0?<SocialIcon type='twitter' iconSize={15} style={{height:35,width:35}} />:null}                
                </View>
            </View>
            </ImageBackground>
//             <Card>
//                 <View style={{flexDirection:"row",justifyContent:"space-around"}}>
//                 <Avatar 
//                 rounded
//                 source={{
//                     uri:`https://robohash.org/${profile.fullName}`
//                 }}
//                 size={85}
//                 />
//                 <View>
//                 <Text>{profile.fullName}</Text>
//                 <Text>{profile.location}</Text>
//                 <View style={{flexDirection:"row",justifyContent:"space-around"}}>
//                 {profile.facebook.length>0? <SocialIcon type='facebook' iconSize={15} style={{height:35,width:35}} />:null
// }
// {profile.instagram.length>0?<SocialIcon type='instagram' iconSize={15} style={{height:35,width:35}} />:null}
// {profile.twitter.length>0?<SocialIcon type='twitter' iconSize={15} style={{height:35,width:35}} />:null}                
//                 </View>
            
//                 </View>
// </View>
//             </Card>
        )
    }
}
