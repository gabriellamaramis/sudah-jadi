import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const ImageScreen= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>Hotel Grand Mercure Harmoni</Text>
                  <ImageDetail
                      imageSource={require('../assets/grandmercure.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Hayam Wuruk No.36-37, RT.14/RW.1, Kb. Klp., Kec. Taman Sari, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai: Rp.883,311</Text>
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Royal Kuningan Hotel</Text>
                  <ImageDetail
                      imageSource={require('../assets/royaljakarta.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Kuningan Persada No.Kav. 2, RT.1/RW.6, Guntur, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai: Rp.879,999</Text>
                </View>


              <View style={styles.tengah}>
                  <Text style={styles.text}>Ibis Jakarta Harmoni</Text>
                  <ImageDetail
                      imageSource={require('../assets/ibisjakarta.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: Hayam Wuruk No.35, RT.14/RW.1, Kb. Klp., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: Rp.352,723</Text>
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Arosa Hotel Jakarta.</Text>
                  <ImageDetail
                      imageSource={require('../assets/arosa.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: No 3, RT.9/RW.3, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: Rp.763.797</Text>
                </View>
          </View>
          </ScrollView>
          </ImageBackground>
      </View>
      )
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
  tengah:{
      width: "55%",
      marginVertical:20
  }, 
  text:{
      color:'white',
      textAlign: 'center',
      fontSize : 25,
      

  }
  })

export default ImageScreen;