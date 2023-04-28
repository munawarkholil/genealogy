// withHooks

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { applyStyle, LibStyle } from 'esoftplay';


export interface ComponentProps {
  title: string,
  onPress: () => void
}
export default function m(props: ComponentProps): any {
  return (
    <View
      style={styleId_ZBfEYw} >
      <TouchableOpacity
        onPress={props.onPress}
        style={styleId_1tzEni} >
        <Text
          style={styleId_18zm72} >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styleId_ZBfEYw: any = { flexDirection: 'row', justifyContent: "center" }
const styleId_1tzEni: any = { paddingHorizontal: 55, paddingVertical: 13, borderRadius: 6, backgroundColor: LibStyle.colorPrimary }
const styleId_18zm72: any = { fontFamily: "Hind", fontSize: 18, fontWeight: "bold", fontStyle: "normal", lineHeight: 22, letterSpacing: 0.4, textAlign: "center", color: 'white' }