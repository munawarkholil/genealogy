// withHooks

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LibStyle, LibTextstyle, LibIcon, applyStyle } from 'esoftplay';


export interface MainProfile_childProps {
  number: string,
  name: string,
  select?: boolean,
  onPress?: (item: any) => void
}
export default function m(props: MainProfile_childProps): any {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <View style={styleId_Z20F52R} >
        <View style={styleId_ZYAE6m}>
          <LibTextstyle text={props.number} textStyle={'body'} style={styleId_21Duj3} />
        </View>
        <LibTextstyle textStyle={"body"} text={props.name} style={styleId_Z10EzIY} />
        <LibIcon.EntypoIcons name={props.select ? "check" : "chevron-right"} color={"#999"} />
      </View>
    </TouchableOpacity>
  )
}
const styleId_Z20F52R: any = { flexDirection: 'row', padding: 12, marginHorizontal: 12, marginVertical: 3, alignItems: 'center', borderBottomColor: '#f1f2f3', borderBottomWidth: 1 }
const styleId_ZYAE6m: any = { height: 36, width: 36, borderRadius: 18, backgroundColor: LibStyle.colorPrimary, alignItems: 'center', justifyContent: 'center' }
const styleId_21Duj3: any = { color: 'white' }
const styleId_Z10EzIY: any = { marginLeft: 16, flex: 1 }