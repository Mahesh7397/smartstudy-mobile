import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { useThemescontext } from '../context/ThemeContext';


const Loading = () => {
    const {theme}=useThemescontext()
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <LottieView source={require('../assets/Animations/Loading_Animation.json')}
      autoPlay
      loop
      style={{width:200,height:200}}
      />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    animation:{

    }
})