// withHooks

import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { LibStyle, LibTextstyle, LibCollaps, LibIcon, LibGcurl } from 'esoftplay';


export interface MainPost_itemProps {
  expand: boolean,
  msg: string,
  time: string,
  _key: string,
  title: string,
  admin: string,
  onDelete: () => void,
  onEdit: () => void
}


export default function m(props: MainPost_itemProps): any {
  return (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: 'white' }} >
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <View style={{ flex: 1 }} >
          <LibTextstyle text={props.title} textStyle="body" />
        </View>
      </View>
      <LibTextstyle text={props.time} textStyle="caption1" style={{ marginTop: 12 }} />
      <LibTextstyle textStyle="subtitle2" text={props.msg} style={{ textAlign: 'left' }} />
      {/* <LibIcon.EntypoIcons name={show ? "chevron-up" : "chevron-down"} color={"#aaa"} /> */}
      {/* <LibCollaps show={props.expand} header={(show) => {
        return (
        )
      }}>
        <View style={{ flexDirection: "row-reverse", marginTop: 30, marginBottom: -10 }} >
          <TouchableOpacity
            onPress={props.onDelete}
            style={{ padding: 5, paddingHorizontal: 16, borderRadius: 4, backgroundColor: "#f1f2f3" }} >
            <LibTextstyle text={"Hapus"} textStyle="body" style={{ color: LibStyle.colorRed }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.onEdit}
            style={{ padding: 5, marginRight: 10, paddingHorizontal: 16, borderRadius: 4, backgroundColor: "#f1f2f3" }} >
            <LibTextstyle text={"Ubah"} textStyle="body" style={{ color: LibStyle.colorPrimary }} />
          </TouchableOpacity>
        </View>
      </LibCollaps> */}
    </View>
  )
}