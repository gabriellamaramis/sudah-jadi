import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = 'gvhgfv'
                     title="Jakarta"
                     onPress={()=> navigation.navigate('Image2')}
                    />
              </View>
            </View>
            <View style={styles.container} >
             <View style={styles.top}>
                  <Button style={styles.Button}
                     text color = 'jhukgi'  title="Manado"
                     onPress={()=> navigation.navigate('Image')}
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
         width: "50%",
         marginVertical:5
     }, 
     })
 

export default HomeScreen;
