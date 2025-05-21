import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useThemescontext } from '../../context/ThemeContext'

const Pagefive = ({ navigation }) => {
    const { theme } = useThemescontext()
  return (
      <LinearGradient
                colors={theme.dark ? ['#000000', '#000000', '#302E2E', '#666666'] : ['#8AE0FF', '#BDEEFF', '#F1F8FD']}
                style={styles.container} >
                <View style={[styles.imagecontainer,{justifyContent:'center',alignItems:'center'}]}>
                    <Image
                        source={require('../../assets/images/icon.png')} // replace with your icon
                        style={styles.topIcon}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.textcontainer}>
                    <View style={styles.textBlock}>
                        <Text style={[styles.title, { color: theme.dark ? '#195EFF' : '#171A1F' }]}>NewsBites</Text>
                        <Text style={[styles.description, { color: theme.colors.text }]}>
                           Stay informed with the latest updates from around the world in many fields - tailored to your interest
                        </Text>
                    </View>
                </View>
                <View style={styles.bodycontainer}>
                    <Image source={require('../../assets/images/Wellcome/5_page.png')} style={{ width: '90%', height: '80%' }} resizeMode='contain'/>
                </View>
                <View style={styles.footer}>
                    <View style={styles.dots}>
    
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        <View style={[styles.activeDot, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} />
                        {[...Array(1)].map((_, index) => (
                            <View key={index} style={[styles.inactiveDot]} />
                        ))}
                    </View>
    
                    {/* Next Button */}
    
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.dark ? "#101327" : "#184473" }]} onPress={() => navigation.navigate('pagesix')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
  )
}

export default Pagefive

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: "center",
        justifyContent:'space-evenly'
    },
    imagecontainer: {
        width: '100%',
        height: '20%'
    },
    textcontainer: {
        width: '90%',
        height: '20%',
    },
    bodycontainer: {
        width: '100%',
        height: '40%',
        alignItems:"center"
    },
    footer: {
        width: '100%',
        height: '20%',
        justifyContent:'center',
        alignItems:'center'
    },
      dots: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 8,
  },
    topIcon: {
        width: 80,
        height: 80,
        marginTop: 50,
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
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
      title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
     width:'100%',
  },
})