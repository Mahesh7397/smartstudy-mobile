import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useThemescontext } from '../../context/ThemeContext';
import {Fonts} from '../../constants/Fonts'


const { width } = Dimensions.get('window');

const Pageone = ({ navigation }) => {
  const { theme } = useThemescontext()
  return (
    <LinearGradient
      colors={theme.dark ? ['#000000', '#000000', '#302E2E', '#666666'] : ['#8AE0FF', '#BDEEFF', '#F1F8FD']}
      style={styles.container}>
      {/* Top Icon */}
      <View style={{width:'100%',height:'20%',justifyContent:'center',alignItems:'center'
      }}>
        <Image
          source={require('../../assets/images/icon.png')} // replace with your icon
          style={styles.topIcon}
          resizeMode="contain"
        />
      </View>


      {/* Ghost and Text */}
      <View style={[styles.ghostTextContainer,{width:'100%',height:'25%',
      justifyContent:'center',alignItems:'center'}]}>
        <Image
          source={require('../../assets/images/ghost.png')} // replace with your ghost emoji or image
          style={styles.ghostImage}
        />
        <Text style={[styles.instructionText,{color:theme.colors.text,textAlign:'center'}]}>
          You'll start by uploading{'\n'}
          your <Text style={styles.highlight}>study materials</Text>
        </Text>
      </View>

      {/* Book/Notebook/Folder Row */}
      <View style={[styles.materialsContainer,{width:'90%',height:'35%',backgroundColor:theme.colors.background}]}>

      </View>

<View style={{width:'100%',height:'20%',alignItems:'center',justifyContent:'center'}}>
      <View style={styles.dots}>
        
        <View style={[styles.activeDot,{backgroundColor:theme.dark?"#101327":"#184473"}]} />
        <View style={[styles.activeDot,{backgroundColor:theme.dark?"#101327":"#184473"}]} />
        {[...Array(5)].map((_, index) => (
          <View key={index} style={[styles.inactiveDot]} />
        ))}
      </View>

      {/* Next Button */}
      
        <TouchableOpacity style={[styles.button,{backgroundColor:theme.dark?"#101327":"#184473"}]} onPress={()=>navigation.navigate('pagetwo')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>


      {/* Next Button */}

    </LinearGradient>
  )
}

export default Pageone

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcon: {
    width: 80,
    height: 80,
     marginTop: 50,
  },
  ghostTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  ghostImage: {
    width: 150,
    height: 150,
    
  },
  instructionText: {
    fontSize: 20,
    width:'60%',
    height:'100%',
    paddingVertical:'18%',
    fontFamily:Fonts.poppins.Bold
  },
  highlight: {
    color: '#3478f6', // blue
    fontWeight: '700',
  },
  materialsContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  materialIcon: {
    width: 60,
    height: 60,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
  },
dots: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 8,
  },
  activeDot: {
    width: 30,
    height: 6,
    borderRadius: 5,
  },
  inactiveDot: {
    width: 30,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#CFD8DC',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 40,
    width:'90%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily:Fonts.poppins.Bold
  },
})