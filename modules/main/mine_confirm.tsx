// withHooks

import React from 'react';
import { View } from 'react-native';
import { ComponentHeader, LibTextstyle, ComponentButton } from 'esoftplay';


export interface MainMine_confirmProps {

}
export default function m(props: MainMine_confirmProps): any {
  return (
    <View style={{ flex: 1 }} >
      <ComponentHeader title="Konfirmasi Akun" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <LibTextstyle text={"Saya adalah"} textStyle={"subtitle2"} />
        <LibTextstyle text="Munawar Kholil" textStyle="title" />
      </View>
      <View style={{ marginVertical: 30 }} >
        <ComponentButton title={"Ya"} onPress={() => { }} />
      </View>
    </View>
  )
}