import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { House, Book, OpenAiLogo, CalendarCheck, User } from 'phosphor-react-native'

const icons={
    home:({color,isFocused})=><House size={28} color={color} weight={isFocused ? "fill" : "regular"} />,
    resource:({color,isFocused})=><Book size={28} color={color} weight={isFocused ? "fill" : "regular"} />,
    ai:({color,isFocused})=><OpenAiLogo size={28} color={color} weight={isFocused ? "fill" : "regular"} />,
    task:({color,isFocused})=> <CalendarCheck size={28} color={color} weight={isFocused ? "fill" : "regular"} />,
    profile:({color,isFocused})=> <User size={28} color={color} weight={isFocused ? "fill" : "regular"} />
}

const TabBarBotton = (props) => {
    const {label,color,isFocused}=props
  return (
    <Pressable {...props} style={{flex:1,justifyContent:'center',alignItems:'center',gap:5}}>
      {icons[label]({color,isFocused})}
    </Pressable>
  )
}

export default TabBarBotton

const styles = StyleSheet.create({})