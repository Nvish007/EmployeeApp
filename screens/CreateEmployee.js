import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateEmployee = () =>{
    const[Name,setName] = useState("")
    const[phone,setPhone] = useState("")
    const[email,setEmail] = useState("")
    const[salary,setSalary] = useState("")
    const[picture,setPicture] = useState("")
    const[modal,setModal] = useState(false)

    const pickFromGallary= async()=>{
       const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
       if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        }) 
        
        if(!data.cancelled){
            let newFile = {
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test/${data.uri.split(".")[1]}`
            }
            handleUpload(newFile)
        }

       }else{
        Alert.alert("You Have to Access us for further procedding")
       }
    }

    const pickFromCamera= async()=>{
       const {granted} = await Permissions.askAsync(Permissions.CAMERA)
       if(granted){
        let data = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        }) 
        
        if(!data.cancelled){
            let newFile = {
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test/${data.uri.split(".")[1]}`
            }
            handleUpload(newFile)
        }

       }else{
        Alert.alert("You Have to Access us for further procedding")
       }
    }

    const handleUpload = (image) =>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append('cloud_name','nvish007')

        fetch("https://api.cloudinary.com/v1_1/nvish007/image/upload",{
            method:"post",
            body:data,
        }).then(res=>res.json())
        .then(data =>{
           
            setPicture(data.url)
            setModal(false)
        })
    }

    return(
        <View style={styles.root}>
            <TextInput
                style={styles.inputstyle}
                label="Name"
                value={Name}
                theme={theme}
                onChangeText={text => setName(text)}
             />
             <TextInput
                style={styles.inputstyle}
                label="Email"
                value={email}
                theme={theme}
                onChangeText={text => setEmail(text)}
             />
             <TextInput
                style={styles.inputstyle}
                label="Salary"
                value={salary}
                theme={theme}
                onChangeText={text => setSalary(text)}
             />
             <TextInput
                style={styles.inputstyle}
                label="Phone"
                value={phone}
                theme={theme}
                keyboardType='phone-pad'
                onChangeText={text => setPhone(text)}
             />
              <Button 
              style={styles.inputstyle} 
              icon={picture==""?"upload":"check"} 
              mode="contained"
              theme={theme} 
              onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button
            style={styles.inputstyle} 
            icon="content-save" 
            mode="contained"
            theme={theme} 
            onPress={() => console.log()}>
               Save
            </Button>
            <Modal
            animationType='slide' 
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}>
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}> 
                    <Button 
                    icon="camera" 
                    mode="contained"
                    theme={theme} 
                    onPress={() => pickFromCamera()}>
                    camera
                </Button>
                <Button 
                icon="image-area" 
                mode="contained"
                theme={theme} 
                onPress={() => pickFromGallary()}>
                    Gallary
                </Button>
                    </View>
                <Button 
                onPress={() => setModal(false)}
                 theme={theme}>
                    Cancel
                </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        margin:10,
        padding:10,
        backgroundColor:"#e0e0e0",
    },
    inputstyle:{
        margin:5,
    },
    modalView:{
        position:'absolute',
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    },
    modalButtonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    }
})

export default CreateEmployee