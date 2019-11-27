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
                  <Text style={styles.text}>Hotel Genio Manado</Text>
                  <ImageDetail
                      imageSource={require('../assets/genio.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Sugiono No.21, Pinaesaan, Kec. Wenang, Kota Manado, Sulawesi Utara 95122</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai: 377.273</Text>
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Novotel Manado Golf Resort and Convention Center</Text>
                  <ImageDetail
                      imageSource={require('../assets/c.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: A.A Maramis Kayuwatu, Jl. Kairagi No.II, Kairagi Dua, Mapanget, Manado City, North Sulawesi 95254</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai: 701.800</Text>
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Whiz Prime Hotel Megamas Manado</Text>
                  <ImageDetail
                      imageSource={require('../assets/Whiz.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Piere Tendean Boulevard, Manado, Kota Manado, Sulawesi Utara 95111</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: 630.996</Text>
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Lion Hotel</Text>
                  <ImageDetail
                      imageSource={require('../assets/bela.jpg')}
                  />
                  <Text>Informasi :

                  </Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Sugiono No.21, Pinaesaan, Kec. Wenang, Kota Manado, Sulawesi Utara 95122</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: Rp.377.273</Text>
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Lagoon</Text>
                  <ImageDetail
                      imageSource={require('../assets/l.jpg')}
                  />
                  <Text>Best Western The Lagoon</Text>
                  <Text> </Text>
                  <Text>Alamat: Jl. Wolter Monginsidi No.1, Bahu, Kec. Malalayang, Kota Manado, Sulawesi Utara 95115</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: Rp.763.797</Text>
                </View>

                <View style={styles.tengah}>
                  <Text>Ibis Manado City Center Boulevard</Text>
                  <Text style={styles.text}></Text>
                  <ImageDetail
                      imageSource={require('../assets/ibis.jpg')}
                  />
                  <Text> </Text>
                  <Text>Alamat: Boulevard, Jl. Piere Tendean, RW.Lingkungan 3, North Sario, Sario, Manado City, North Sulawesi 95111</Text>
                  <Text> </Text>
                  <Text>Booking Kamar Hotel Mulai dari: Rp.672.840</Text>
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