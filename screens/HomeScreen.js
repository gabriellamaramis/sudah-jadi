import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
            
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = 'dfbj'
                     title="Info Hotel"
                     onPress={()=> navigation.navigate('Pilihan')}
                    />
              </View>
            </View>
         </ImageBackground>  
     </View>
   
     )};
 
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
         },
     tengah:{
         width: "70%",
         marginVertical:5
     }, 
     })
 

export default HomeScreen;
