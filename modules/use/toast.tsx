// useLibs

import React from 'react'
import { usePersistState, LibGcurl, useGlobalState, useGlobalOption, useGlobalReturn, UseToastProperty } from 'esoftplay'


const _data = useGlobalState<any>(undefined, { persistKey: "toast_list" })
const _id = useGlobalState<any>(undefined, { persistKey: "toast_id" })


export function data(): useGlobalReturn<any> {
  return _data
}
export function id(): useGlobalReturn<any> {
  return _id
}


export default function m(): [any, () => void] {

  const [data, setData] = UseToastProperty.data().useState()
  const [id, setId] = UseToastProperty.id().useState()

  function checkUpdate() {
    new LibGcurl().toastId((last_id) => {
      if (id != last_id) {
        new LibGcurl().toastList(d => {
          setData(d)
          setId(last_id)
        })
      }
    })
  }

  return [data, checkUpdate]
}