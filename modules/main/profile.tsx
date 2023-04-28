// withHooks

import { ComponentHeader, LibCollaps, LibIcon, LibNavigation, LibSlidingup, LibStyle, LibTextstyle, MainProfile_child, UseGenealogy, UseGenealogyProperty, useSafeState } from 'esoftplay';
import React, { useMemo, useRef } from 'react';
import { RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native';

export interface MainProfileProps {

}
export default function m(props: MainProfileProps): any {


  const menuRef = useRef<LibSlidingup>(null)
  const params = LibNavigation.getArgs(props, "data")
  const [data] = UseGenealogyProperty.list().useState()
  const updater = UseGenealogy()[0]
  let last = useRef<any>().current
  const [item, setItem] = useSafeState<any>()

  const post = data && data.filter((item: any) => item.id == params.id)[0]
  const parent = data && data.filter((item: any) => post.par_rel.includes(item.id))
  const relation = data && data.filter((item: any) => post.rel_id.includes(item.id) && item.id != post.id)
  const [rel, setRel] = useSafeState(relation && relation[0])
  // console.log(relation)
  // const [rel_length, setRel_length] = useSafeState(relation?.length)

  let children = []
  if (rel)
    children = data && data.filter((item: any) => item.par_rel.includes(post.id) && item.par_rel.includes(rel.id))

  useMemo(() => {
    if (data != last) {
      setRel(relation[0])
      // setRel_length(1)
      last = data
    }
  }, [data])

  if (!data) return null
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <ComponentHeader title="Keluarga" />
      <ScrollView refreshControl={<RefreshControl onRefresh={updater} refreshing={false} />}>
        <View style={{ marginVertical: 36 }} >
          <LibTextstyle textStyle='title' text={post.name} style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold' }} />
          <LibTextstyle textStyle="subtitle2" text={relation.length + " Pasangan, " + children.length + " Anak"} />
        </View>
        {
          parent && parent.length > 0 &&
          <LibCollaps header={(show) => (
            <View style={{ backgroundColor: "#f5f6f7", flexDirection: 'row', padding: 12, paddingRight: 20 }} >
              <LibTextstyle textStyle={"section"} text="Orang Tua" style={{ flex: 1 }} />
              <LibIcon.EntypoIcons name={show ? "chevron-up" : "chevron-down"} />
            </View>
          )} >
            <>
              {parent && parent.map((item: any, index: number) => (<MainProfile_child
                key={index.toString()}
                onPress={() => LibNavigation.replace("main/profile", { data: item })}
                number={item.name[0]} name={item.name} />))}
            </>
          </LibCollaps>
        }
        <View style={{ flexDirection: 'row', backgroundColor: '#f5f6f7', alignItems: 'center' }} >
          <LibTextstyle textStyle="section" text={"Pasangan"} style={{ padding: 12, flex: 1 }} />
          <TouchableOpacity onPress={() =>
            LibNavigation.navigate("main/register", {
              type: 'rel',
              number: relation.length + 1,
              ...post,
            })}
            style={{ height: 30, width: 30, marginRight: 16 }} >
            <LibIcon.EntypoIcons name="plus" color={LibStyle.colorPrimary} size={28} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal style={{ paddingHorizontal: 12, paddingVertical: 3, }} >
            {
              relation.map((item: any, i: number) => {
                return (
                  <TouchableOpacity
                    onPress={() => setRel(item)}
                    key={i.toString()}
                    style={{ backgroundColor: 'white', marginRight: 10, paddingHorizontal: 30, paddingVertical: 8, borderColor: item == rel ? LibStyle.colorPrimary : "transparent", borderRadius: 30, borderWidth: 2 }} >
                    <LibTextstyle textStyle={"body"} text={item.name} style={{ color: item == rel ? LibStyle.colorPrimary : LibStyle.colorTextBody }} />
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
        {
          rel &&
          <>
            <View style={{ flexDirection: 'row', backgroundColor: '#f5f6f7', alignItems: 'center' }} >
              <LibTextstyle textStyle="section" text={"Anak"} style={{ padding: 12, flex: 1 }} />
              <TouchableOpacity onPress={() => {
                LibNavigation.navigate("main/register", {
                  ...post,
                  type: 'child',
                  number: children.length + 1,
                  par_rel: [rel.id, post.id],
                  name: post.name + '\n&\n' + rel.name,

                })
              }} style={{ height: 30, width: 30, marginRight: 16 }} >
                <LibIcon.EntypoIcons name="plus" color={LibStyle.colorPrimary} size={28} />
              </TouchableOpacity>
            </View>
            {children && children.map((item: any, index: number) => (<MainProfile_child
              key={index.toString()}

              onPress={() => LibNavigation.push("main/profile", { data: item })}
              // onPress={() => {
              //   setItem(item)
              //   menuRef.current!.show()
              // }}
              number={String(index + 1)} name={item.name} />))}
          </>
        }
      </ScrollView>
      {/* <View style={{ marginVertical: 16 }} >
        <ComponentButton title="Ubah Akun" onPress={() => LibNavigation.navigate("main/mine")} />
      </View> */}
      <LibSlidingup ref={menuRef}>
        <View style={{ backgroundColor: "white" }} >
          <LibTextstyle style={{ padding: 20, backgroundColor: '#f5f6f7', color: LibStyle.colorPrimary }} textStyle="caption1" text={item && item.name || " "} />
          <TouchableOpacity onPress={() => { LibNavigation.replace("main/profile", { data: item }) }} style={{ padding: 20 }}>
            <LibTextstyle text="Lihat Profil" textStyle={"body"} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }}>
            <LibTextstyle text="Laporkan Salah Nama" textStyle={"body"} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ padding: 20 }}>
            <LibTextstyle text="Tambah Pasangan" textStyle={"body"} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }}>
            <LibTextstyle text="Tambah Anak" textStyle={"body"} />
          </TouchableOpacity> */}
        </View>
      </LibSlidingup>
    </View>
  )
}

//`https://app.zeplin.io/project/5d4a9b303edbc29bda8c2e06/screen/5d687e81e83ac45f04eb2881`