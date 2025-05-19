import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useThemescontext } from '../../context/ThemeContext';
import { Fonts } from '../../constants/Fonts';

const { width } = Dimensions.get('window');

const FAQsScreen = () => {  
    const {theme}=useThemescontext()
  const faqData = [
    {
      icon: <MaterialIcons name="assignment" size={24} color={theme.colors.text} />,
      title: 'Task Management',
      questions: ['How do I add a new task?', 'Can I edit or delete a task?'],
    },
    {
      icon: <Ionicons name="notifications-outline" size={24} color={theme.colors.text} />,
      title: 'Reminders & Notifications',
      questions: [
        'How do I set up reminders for tasks?',
        'Why didn’t I receive a notification?',
      ],
    },
    {
      icon: <MaterialIcons name="event-note" size={24} color={theme.colors.text} />,
      title: 'Study Planner Usage',
      questions: [
        'How can I view my planned tasks?',
        'Is there a way to organize tasks by priority?',
      ],
    },
    {
      icon: <Ionicons name="person-outline" size={24} color={theme.colors.text} />,
      title: 'Account & Settings',
      questions: [
        'How do I change my password?',
        'How can I update my email address?',
      ],
    },
  ];


  return (
    <ScrollView style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <Text style={[styles.header,{color:theme.colors.text}]}>FAQs</Text>
      <View style={[styles.card,{backgroundColor:theme.colors.Modal}]}>
        {faqData.map((item, index) => (
          <View key={index}>
            <View style={styles.row}>
              {item.icon}
              <View style={{ marginLeft: 10 }}>
                <Text style={[styles.title,{color:theme.colors.text}]}>{item.title}</Text>
                {item.questions.map((q, i) => (
                  <Text style={[styles.question,{color:theme.colors.text}]} key={i}>
                    {q}
                  </Text>
                ))}
              </View>
            </View>
            {index !== faqData.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
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
    fontFamily: Fonts.poppins.Bold,
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily:Fonts.poppins.Regular,
    marginBottom: 5,
  },
  question: {
    fontSize: 14,
    fontFamily:Fonts.Roboto,
    fontWeight:'regular',
    marginBottom: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    marginLeft: 34,
  },
});

export default FAQsScreen;
