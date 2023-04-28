// withHooks

import { ComponentButton, ComponentHeader, LibGcurl, LibIcon, LibInput, LibNavigation, LibProgress, LibTextstyle, UseGenealogy, useSafeState } from 'esoftplay';
import React, { useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';


export interface MainRegisterProps {

}
export default function m(props: MainRegisterProps): any {

  const [data, setData] = UseGenealogy()

  const type = LibNavigation.getArgs(props, 'type')
  const id = LibNavigation.getArgs(props, 'id')
  const par_rel = LibNavigation.getArgs(props, 'par_rel', [0])
  const number = LibNavigation.getArgs(props, 'number', 1)
  const name = LibNavigation.getArgs(props, 'name', 1)
  const [g, setG] = useSafeState<any>('m')

  const inputName = useRef<LibInput>(null)

  function register() {
    Keyboard.dismiss()
    LibProgress.show("Sedang mendaftarkan")
    const name = inputName.current!.getText()
    const gcurl = new LibGcurl()
    gcurl.genealogyReg(type == 'rel' ? [0] : par_rel, name, g, (last_id: string) => {
      if (type == 'rel') {
        gcurl.genealogyAddRel(id, last_id)
      }
      setData()
      setTimeout(() => {
        LibProgress.hide()
        LibNavigation.back()
        LibNavigation.back()
        LibNavigation.navigate("main/profile", { data: LibNavigation.getArgsAll(props) })
      }, 1000);
    })
  }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
      <View style={{ flex: 1, backgroundColor: "white" }} >
        <ComponentHeader title={'Tambah ' + (type == 'rel' ? ('Pasangan ke ' + number) : ('Anak ke ' + number))} />
        <View style={{ flex: 1 }} >
          <View style={{ marginTop: 36 }} />
          <LibTextstyle text={name} textStyle={'header'} style={{ marginBottom: 36, fontSize: 26, lineHeight: 30 }} />
          <LibInput
            ref={inputName}
            autoCapitalize='words'
            returnKeyType="done"
            label='Nama' />
          {/* <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: LibStyle.width * 0.2 }} >
            <TouchableOpacity
              onPress={() => setG('m')}
              style={{ height: 80, width: 80, borderRadius: 30, borderWidth: 2, borderColor: g == 'm' ? LibStyle.colorPrimary : "#ccc", backgroundColor: '#f7f8f9', alignItems: 'center', justifyContent: 'center' }} >
              <LibIcon.SimpleLineIcons name="user" size={30} color={g == 'm' ? LibStyle.colorPrimary : "#ccc"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setG('f')}
              style={{ height: 80, width: 80, borderRadius: 30, borderWidth: 2, borderColor: g == 'f' ? LibStyle.colorPrimary : "#ccc", backgroundColor: '#f7f8f9', alignItems: 'center', justifyContent: 'center' }} >
              <LibIcon.SimpleLineIcons name="user-female" size={30} color={g == 'f' ? LibStyle.colorPrimary : "#ccc"} />
            </TouchableOpacity>
          </View> */}
          <View style={{ marginTop: 40 }} />
          <ComponentButton onPress={register} title={"Simpan"} />
        </View>
        {
          type == 'rel' &&
          <TouchableOpacity
            onPress={() => LibNavigation.navigateForResult("main/search1", { forResult: true }).then((item) => {
              new LibGcurl().genealogyAddRel(id, item.id)
              LibNavigation.back()
            })}
            style={{ backgroundColor: "#f5f6f7", flexDirection: 'row', padding: 12 }} >
            <LibTextstyle textStyle={"section"} text="Pilih dari saudara" style={{ flex: 1 }} />
            <LibIcon.EntypoIcons name={"chevron-right"} />
          </TouchableOpacity>
        }
      </View>
    </KeyboardAvoidingView>
  )
}