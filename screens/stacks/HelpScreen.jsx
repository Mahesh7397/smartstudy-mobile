import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useThemescontext } from '../../context/ThemeContext';
import { Fonts } from '../../constants/Fonts';
import { navigationRef } from '../../hooks/navigationRef';

const { width } = Dimensions.get('window');

const HelpScreen = () => {

  const {theme}=useThemescontext()

    const menuItems = [
    {
      title: 'FAQs',
      subtitle: 'Find answers to common questions',
      path:'faq',
      icon: <Ionicons name="help-circle-outline" size={24} color={theme.colors.text} />,
    },
    {
      title: 'Tutorials',
      subtitle: 'Learn how to use the app effectively',
      path:'faq',
      icon: <Ionicons name="play-circle-outline" size={24} color={theme.colors.text}  />,
    },
    {
      title: 'Retrieve Streak',
      subtitle: 'Retrieve your study streak (2 more chances left)',
      path:'faq',
      icon: <Ionicons name="flame-outline" size={24} color={theme.colors.text}  />,
    },
    {
      title: 'Contact us',
      subtitle: 'Reach out for assistance',
      path:'contact',
      icon: <Ionicons name="chatbox-ellipses-outline" size={24} color={theme.colors.text}  />,
    }
  ];
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <Text style={[styles.header,{color:theme.colors.text}]}>Help Desk</Text>
      <View style={[styles.card,{backgroundColor:theme.dark? '#3A6678' : '#CCF0FF'}]}>
        {menuItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.row} onPress={()=>navigationRef.navigate(item.path)}>
              {item.icon}
              <View style={{ marginLeft: 10 }}>
                <Text style={[styles.title,{color:theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.subtitle,{color:theme.colors.text}]}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
            {index !== menuItems.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontFamily:Fonts.poppins.Bold,
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height:'45%',
    justifyContent:'space-evenly'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily:Fonts.poppins.Regular,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    fontFamily:Fonts.Roboto,
    fontWeight:'regular'
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e1e1',
    marginLeft: 34,
  }
})