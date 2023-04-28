// withHooks

import { ComponentHeader, LibInput_base, LibList, LibLoading, LibNavigation, LibStyle, LibTextstyle, MainProfile_child, UseGenealogy, UseGenealogyProperty, useSafeState } from 'esoftplay';
import React from 'react';
import { View } from 'react-native';


export interface MainSearchProps {

}
export default function m(props: MainSearchProps): any {
  const [updater] = UseGenealogy()
  const [data, setData] = UseGenealogyProperty.list().useState()
  const [query, setQuery] = useSafeState('')
  const forResult = LibNavigation.getArgs(props, 'forResult', false)

  function renderRow(item: any, index: number) {
    return (
      <MainProfile_child
        name={item.name}
        number={item.name[0]}
        onPress={() => forResult ? LibNavigation.sendBackResult(item) : LibNavigation.navigate("main/profile", { data: item })}
      />
    )
  }
  if (!data) return <LibLoading />

  const fdata = data.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <ComponentHeader title="Semua Anggota" />
      <View style={{ marginVertical: 16, marginHorizontal: 12, borderRadius: 6, backgroundColor: '#f1f2f3' }} >
        <LibInput_base
          name="search"
          style={{ fontFamily: "Hind-Bold", fontSize: 17, padding: 8, paddingHorizontal: 16, color: '#444' }}
          selectionColor={LibStyle.colorPrimary}
          placeholder={'Cari'}
          onChangeText={setQuery}
        />
      </View>
      <LibTextstyle textStyle="subtitle" text={fdata.length + ' Orang'} style={{ paddingHorizontal: 16, marginBottom: 20 }} />
      {
        data &&
        <LibList
          data={fdata.sort((item: any, itema: any) => item.name.localeCompare(itema.name))}
          keyExtractor={(x) => x.id.toString()}
          renderItem={renderRow}
        />
      }
    </View>
  )
}