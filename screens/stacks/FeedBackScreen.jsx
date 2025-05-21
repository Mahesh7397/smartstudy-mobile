import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemescontext } from '../../context/ThemeContext';
import { Fonts } from '../../constants/Fonts';

const { width } = Dimensions.get('window');

const FeedBackScreen = () => {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState('');

  const { theme } = useThemescontext()
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Feedback</Text>

      {/* Stars */}
      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Pressable key={num} onPress={() => setRating(num)}>
            <Ionicons
              name={num <= rating ? 'star' : 'star-outline'}
              size={40}
              color="#FFC107"
              style={{ marginHorizontal: 5 }}
            />
          </Pressable>
        ))}
      </View>

      <Text style={[styles.subText, { color: theme.colors.text }]}>Tell us a bit about why you chose {rating}</Text>

      {/* Textarea */}
      <View style={[styles.textAreaWrapper, { color: theme.dark ? '#3A6678' : '#CCF0FF' ,backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF'}]}>
        <TextInput
          placeholder="Your suggestions here..."
          placeholderTextColor={theme.colors.text}
          multiline
          value={feedback}
          onChangeText={setFeedback}
          style={[styles.textArea, { backgroundColor: theme.dark ? '#3A6678' : '#CCF0FF', color: theme.colors.text }]}
        />
        <TouchableOpacity style={styles.attachBtn}>
          <Text style={styles.attachText}>attach</Text>
          <Ionicons name="attach" size={16} color="#007AFF" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={[styles.submitText,{color:'#ffffff'
        }]}>Submit</Text>
      </TouchableOpacity>

      {/* Bottom tab nav would go here if using Tab.Navigator */}
    </View>
  )
}

export default FeedBackScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.poppins.Bold,
    marginBottom: 20,
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontFamily: Fonts.Roboto,
    fontWeight: 'regular',
    marginBottom: 20,
  },
  textAreaWrapper: {
    width: '100%',
    borderRadius:20,
    padding: 15,
    height: width * 0.5,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  textArea: {
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
  },
  attachBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attachText: {
    color: '#007AFF',
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: '#17406e',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  submitText: {
    fontSize: 18,
    fontFamily: Fonts.poppins.Regular,
  },
})