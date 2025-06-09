import { View,
  Text,
  StyleSheet,
  Image,

  TouchableOpacity,
  SafeAreaView, } from 'react-native'
import React ,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {useThemescontext} from '../../context/ThemeContext'
import { useSupplayContext } from '../../context/SupplayContext'

const CollegeForm = () => {
  const {theme}=useThemescontext()
   const [country, setCountry] = useState('India');
  const [college, setCollege] = useState('');

    const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('Select Country');

  const {name}=useSupplayContext()
  const userName = 'Mohamed'; 
  return (
    <LinearGradient 
    style={styles.container}
    colors={theme.dark?['#000000','#000000','#302E2E','#666666']:['#8AE0FF', '#BDEEFF','#F1F8FD']}
    >
       <View style={styles.topbox}>
          <View style={{width:'90%',height:'70%',backgroundColor:'red',position:'relative'}}>
            <Image source={require('../../assets/images/ghost.png')} style={{width:'40%',height:'90%',position:'absolute',top:'25%'}} resizeMode='contain'/>
          </View>
          <View style={{width:'50%',height:'35%',position:'absolute',borderRadius:12,borderWidth:1,top:'20%',right:'10%'}}>
             <Text>Nice to meet you</Text>
             <Text>{name}</Text>
          </View>
       </View>
      <View style={styles.bodybox}>

      </View>
    </LinearGradient>
  )
}

export default CollegeForm

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  topbox:{
    width:'100%',
    height:'40%',
    backgroundColor:'plum',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  bodybox:{
    width:'100%',
    height:'60%',
    backgroundColor:'red'
  }
})
