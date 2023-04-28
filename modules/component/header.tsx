// withHooks

import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { LibIcon, LibStyle, LibTextstyle, LibNavigation, applyStyle, LibStatusbar } from 'esoftplay';


export interface ComponentHeaderProps {
  title: string,
  home?: boolean,
  onPost?: () => void
}
export default function m(props: ComponentHeaderProps): any {

  const styleId_1y7nlB: any = { height: 50, width: 50, alignItems: 'center', justifyContent: 'center', opacity: props.home ? 0 : 1 }
  const styleId_vqK4y: any = { opacity: props.home ? 1 : 0, height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }

  return (
    <>
      <LibStatusbar style="dark" />
      <View style={styleId_Z1MkJdY} >
        <TouchableOpacity disabled={props.home} onPress={() => { LibNavigation.back() }} style={styleId_1y7nlB} >
          <LibIcon.EntypoIcons color={LibStyle.colorPrimary} name='cross' />
        </TouchableOpacity>
        <View style={styleId_Z3XYpX} >
          <LibTextstyle text={props.title || ' '} textStyle="header" />
        </View>
        <TouchableOpacity onPress={props.onPost} disabled={!props.home} style={styleId_vqK4y} >
          <LibIcon.EntypoIcons color={LibStyle.colorPrimary} name='plus' />
        </TouchableOpacity>
      </View>
    </>
  )
}
const styleId_Z1MkJdY: any = { ...LibStyle.elevation(4), flexDirection: 'row', paddingTop: LibStyle.STATUSBAR_HEIGHT, alignItems: 'center', backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: LibStyle.colorPrimaryDark }
const styleId_Z3XYpX: any = { flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 }