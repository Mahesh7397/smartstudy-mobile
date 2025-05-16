import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useThemescontext } from '../../context/ThemeContext'
import { useSupplayContext } from '../../context/SupplayContext'
import { Fonts } from '../../constants/Fonts'
import { Feature } from '../../constants/Fuatures'

const FeatureList = ({ item }) => {

  const {theme} =useThemescontext()
  return (
    <View style={{
      width: '47%', height: 130, marginVertical: 20, margin: 2, backgroundColor: theme.dark ? '#162665' : '#CCF0FF', shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 6,
      borderRadius: 18
    }}>
      <View style={{width:'100%',height:'60%',flexDirection:'row',alignItems:'center'}}>
        <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
           <View style={{backgroundColor:'#00ADEF',width:45,height:45,borderRadius:'50%',justifyContent:'center',alignItems:'center'}}>
              {item.icon}
           </View>
        </View>
        <View>
        <Text style={{fontSize:18,fontFamily:Fonts.Roboto,fontWeight:'regular',color:theme.dark?'#ffffff':'#0582D2'}}>Smart</Text>
        <Text style={{fontSize:18,fontFamily:Fonts.poppins.Bold,color:'#195EFF'}}>{item.title}</Text>
        </View>
      </View>
      <View style={{width:'100%',height:'40%',alignItems:'center'}}>
        <Pressable style={{width:'60%',height:'80%',backgroundColor:'#184473',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontFamily:Fonts.Roboto,fontWeight:'bold',textAlign:'center',color:'#ffffff'}}>Explore</Text>
        </Pressable>
      </View>
    </View>
  )
}

const HomeScreen = () => {

  const { theme } = useThemescontext()
  const { user } = useSupplayContext()

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }} showsVerticalScrollIndicator={false}>
      <View style={{ width: '95%', height: 225, alignSelf: 'center', padding: 2, margin: 10, borderColor: 'black', flexDirection: 'row' }}>
        <View style={{ width: '50%', height: '100%', justifyContent: 'center', position: 'relative' }}>
          <Image source={require('../../assets/images/ghost.png')} style={{ width: '70%', height: '80%' }} />
          <View style={{ width: '70%', height: '10%', backgroundColor: theme.dark ? '#162665' : '#CCF0FF', borderRadius: '100%' }} />
          <View style={{ width: 22, height: 22, backgroundColor: theme.dark ? '#162665' : '#CCF0FF', position: 'absolute', top: '22%', right: '20%', borderRadius: '100%' }} />
          <View style={{ width: 32, height: 32, backgroundColor: theme.dark ? '#162665' : '#CCF0FF', position: 'absolute', top: '10%', right: 0, borderRadius: '100%' }} />
        </View>
        <View style={{ width: '50%', height: '100%' }}>
          <View style={{ backgroundColor: theme.dark ? '#162665' : '#CCF0FF', width: '95%', maxHeight: '80%', minHeight: '60%', borderRadius: 20, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ width: '80%', fontSize: 16, fontFamily: Fonts.poppins.Regular, color: theme.colors.text, textAlign: 'center`' }}>Hey {user?.name} ! Time to <Text style={{ fontFamily: Fonts.poppins.Bold }}> ace</Text> those<Text style={{ fontFamily: Fonts.poppins.Bold }}> studies!</Text></Text>
          </View>
        </View>
      </View>
      {/**Ads Space */}
      <View style={{ width: '100%', height: 400, justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{ width: '90%', height: '45%', backgroundColor: '#ffffff', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Ads area</Text>
        </View>
        <View style={{ width: '90%', height: '45%', backgroundColor: '#ffffff', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Ads area</Text>
        </View>
      </View>
      {/**TaskBox */}
      <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
        <View style={{ width: '90%', height: 50 }}>
          <Text style={{ fontSize: 24, fontFamily: Fonts.poppins.Bold, lineHeight: 38, color: theme.colors.text }}>Today's <Text style={{ color: '#195EFF' }}>Task</Text></Text>
        </View>
        <View style={{ width: '90%', height: 'auto', minHeight: 100, backgroundColor: theme.dark ? '#162665' : '#CCF0FF', borderRadius: 18 }}>

        </View>
      </View>
      {/**Features */}
      <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
        {/**header */}
        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 32, fontFamily: Fonts.poppins.Bold, lineHeight: 38, color: theme.colors.text }}>Explore our Top </Text>
          <Text style={{ fontSize: 32, fontFamily: Fonts.poppins.Bold, lineHeight: 38, color: '#195eff' }}>Features!!</Text>
        </View>
        {/**List of features */}
        <View style={{ width: '90%' }}>
          <FlatList
            data={Feature}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
            renderItem={({ item }) =><FeatureList item={item}/>}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {

  },
})