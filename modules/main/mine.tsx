// withHooks

import React from 'react';
import { View } from 'react-native';
import { ComponentHeader, MainProfile_child, LibInput_base, LibStyle, LibTextstyle, LibNavigation } from 'esoftplay';


export interface MainMineProps {

}
export default function m(props: MainMineProps): any {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <ComponentHeader title="Saya adalah" />
      <View style={{ margin: 8, marginHorizontal: 12, borderRadius: 6, backgroundColor: '#f1f2f3' }} >
        <LibInput_base
          name="search"
          style={{ fontFamily: "Hind-Bold", fontSize: 17, padding: 8, paddingHorizontal: 16, color: '#444' }}
          selectionColor={LibStyle.colorPrimary}
          placeholder={'Cari Nama'}
          onChangeText={() => { }}
        />
      </View>
      <MainProfile_child select onPress={()=>LibNavigation.navigate("main/mine_confirm")} name="Munawar Kholil" number={'M'} />
      <MainProfile_child select onPress={()=>LibNavigation.navigate("main/mine_confirm")} name="Leni Luthfiyani" number={'L'} />
      <MainProfile_child select onPress={()=>LibNavigation.navigate("main/mine_confirm")} name="Nadila Anindya Putri" number={'N'} />
      <MainProfile_child select onPress={()=>LibNavigation.navigate("main/mine_confirm")} name="Nabila Ainayya Putri" number={'N'} />
    </View>
  )
}