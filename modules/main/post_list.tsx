// withHooks

import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { LibList, MainPost_item, usePersistState, LibGcurl, LibNavigation, ComponentHeader, UseToast, LibScroll, LibTextstyle } from 'esoftplay';
import moment from 'moment/min/moment-with-locales'

export interface MainPost_listProps {

}

moment.locale('id')
export default function m(props: MainPost_listProps): any {

  const [data, setData] = UseToast()

  useEffect(setData, [])

  function renderItem(item: any, index: any) {
    return <MainPost_item
      expand={index == 0}
      {...item}
      time={moment(item.time * 1000).format('dddd, DD MMMM YYYY')}
      onDelete={() => doDelete(item._key)}
      onEdit={() => doEdit(item)}
    />
  }


  function doDelete(key: string) {
    Alert.alert('Hapus Pengumuman ini?', undefined, [
      {
        text: 'Tidak',
        onPress: () => { }
      },
      {
        text: 'Ya',
        onPress: () => new LibGcurl().toastDelete(key, setData)
      }
    ], { cancelable: true })
  }

  function doEdit(post: any) {
    LibNavigation.navigateForResult('main/post', { post: post }).then(setData)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }} >
      <ComponentHeader title="Pengumuman" home onPost={() => LibNavigation.navigateForResult('main/post').then(setData)} />
      {
        !data &&
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <LibTextstyle text="Belum ada pengumuman" textStyle="body" />
        </View>
      }
      <LibList
        data={data}
        onRefresh={setData}
        renderItem={renderItem}
      />
    </View>
  )
}