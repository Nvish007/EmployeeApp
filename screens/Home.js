import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = (props) => {
    const data = [
        {id:"1",name:"mallisha",email:"mallisha@abc.com",salary:"4 LPA",phone:"123",position:"web dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:"2",name:"Cashew",email:"cashew@abc.com",salary:"5 LPA",phone:"456",position:"mob dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:"3",name:"Carry",email:"carry@abc.com",salary:"6 LPA",phone:"789",position:"AI dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:"4",name:"Lilly",email:"lilly@abc.com",salary:"7 LPA",phone:"012",position:"Ml dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:"5",name:"Shams",email:"shams@abc.com",salary:"8 LPA",phone:"345",position:"Tester",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        
    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard} 
             onPress={() => props.navigation.navigate("Profile",{item})} >
            <View style={{flexDirection:'row'}}>
            <Image
            style={{height:60,width:60,borderRadius:30}}
            source={{uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}} />
            <View >
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
            </View>
            </View>
           
        </Card>
        )
    })
    return(
    <View style={{flex: 1 }}>
       <FlatList
       data={data}
       renderItem={({item}) => {
         return  renderList(item)
       }}
       keyExtractor={item=>item.id}
       />
        <FAB 
            style={styles.fab}
            small={false}
            icon="plus"
            theme={{colors:{accent:"#006aff"}}}
            onPress={() => props.navigation.navigate("Create")}
     />
    </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    myCard:{
        margin:5,
       
    },
    cardView:{
        padding:6,
       flexDirection:"row"
    },
    text:{
        fontSize:20,
        margin:10,
        flexDirection:'column'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        
      },
})

export default Home