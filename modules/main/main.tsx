// withHooks

import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LibIcon, LibTextstyle, LibStyle, LibNavigation, MainPost_list, LibGcurl, LibUpdaterProperty } from 'esoftplay';


export interface MainMainProps {

}
export default function m(props: MainMainProps): any {

  useEffect(() => {
    new LibGcurl().registerToken()
    LibUpdaterProperty.check((b) => {
      if (b) {
        LibUpdaterProperty.install()
      }
    })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <MainPost_list />
      <View style={{ height: 56, flexDirection: 'row', borderTopColor: LibStyle.colorPrimary, borderTopWidth: 2, ...LibStyle.elevation(4), backgroundColor: 'white' }} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <LibIcon.EntypoIcons name="home" color={LibStyle.colorPrimary} />
          <LibTextstyle text="Pengumuman" textStyle="menu" style={{ marginTop: 4 }} />
        </View>
        <TouchableOpacity onPress={() => LibNavigation.navigate("main/search")} style={{ flex: 1 }} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <LibIcon.EntypoIcons name="magnifying-glass" color={"#999"} />
            <LibTextstyle text="Anggota" textStyle="menu" style={{ marginTop: 4, color: "#999" }} />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => LibNavigation.navigate("main/profile")} style={{ flex: 1 }} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <LibIcon.EntypoIcons name="user" color={"#999"} />
            <LibTextstyle text="Saya" textStyle="menu" style={{ marginTop: 4, color: "#999" }} />
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

//`https://app.zeplin.io/project/5d4a9b303edbc29bda8c2e06/screen/5d687e81e83ac45f04eb2881`