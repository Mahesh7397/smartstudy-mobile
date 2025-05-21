import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemescontext } from '../../context/ThemeContext';

const ContactUsScreen = () => {
  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const socialLinks = {
    youtube: 'https://youtube.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const {theme}=useThemescontext()

  return (
    <ScrollView style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <Text style={[styles.header,{color:theme.colors.text}]}>Contact Us</Text>

      <View style={[styles.card,{backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}>
        <View style={[styles.row,{backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}>
          <View style={[styles.iconContainer,{backgroundColor:theme.dark?theme.colors.Modal:"#e5f7ff"}]}>
            <MaterialCommunityIcons name="email-outline" size={28} color="#3B82F6" />
          </View>
          <View>
            <Text style={[styles.text,{color:theme.colors.text}]}>Write us at</Text>
            <TouchableOpacity onPress={() => handleEmail('smartstudyproject2025@gmail.com')}>
              <Text style={[styles.link,{    color:theme.dark?'#':'#2563EB',}]}>smartstudyproject2025@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.socialCard,{backgroundColor:theme.dark?theme.colors.Modal:"#e5f7ff"}]}>
        <Text style={[styles.subHeader,{color:theme.colors.text}]}>Follow Us</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={[styles.socialIconBox,{backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}
            onPress={() => openLink(socialLinks.youtube)}
          >
            <Image
              source={require('../../assets/images/Logo/youtube.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialIconBox,{backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}
            onPress={() => openLink(socialLinks.linkedin)}
          >
            <Image
              source={require('../../assets/images/Logo/linkedin.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialIconBox,{backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}
            onPress={() => openLink(socialLinks.instagram)}
          >
            <Image
              source={require('../../assets/images/Logo/instagram.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  link: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 3,
  },
  socialCard: {
    borderRadius: 20,
    padding: 15,
  },
  socialRow: {
    flexDirection: 'row',
  },
  socialIconBox: {
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default ContactUsScreen;
