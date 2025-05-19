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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons name="call-outline" size={28} color="#3B82F6" />
          </View>
          <View>
            <Text style={styles.text}>
              Our 24/7 customer service
            </Text>
            <TouchableOpacity onPress={() => handleCall('+916381181744')}>
              <Text style={styles.link}>+91 6381181744</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCall('+917397423635')}>
              <Text style={styles.link}>+91 7397 423 635</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="email-outline" size={28} color="#3B82F6" />
          </View>
          <View>
            <Text style={styles.text}>Write us at</Text>
            <TouchableOpacity onPress={() => handleEmail('smartstudyproject2025@gmail.com')}>
              <Text style={styles.link}>smartstudyproject2025@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.socialCard}>
        <Text style={styles.subHeader}>Follow Us</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.socialIconBox}
            onPress={() => openLink(socialLinks.youtube)}
          >
            <Image
              source={require('../../assets/images/Logo/youtube.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIconBox}
            onPress={() => openLink(socialLinks.linkedin)}
          >
            <Image
              source={require('../../assets/images/Logo/linkedin.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIconBox}
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
    backgroundColor: '#eaf9fd',
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
    backgroundColor: '#d5f3ff',
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
    backgroundColor: '#b9eaff',
    borderRadius: 25,
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
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 3,
  },
  socialCard: {
    backgroundColor: '#d5f3ff',
    borderRadius: 20,
    padding: 15,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIconBox: {
    backgroundColor: '#b9eaff',
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
