// useLibs

import React from 'react'
import { usePersistState, LibGcurl, useGlobalState, useGlobalReturn, UseGenealogyProperty } from 'esoftplay'



const _list = useGlobalState(undefined, { persistKey: 'genealogy_list' })
export function list(): useGlobalReturn<any> {
  return _list
}

const _id = useGlobalState(undefined, { persistKey: 'genealogy_id' })
export function id(): useGlobalReturn<any> {
  return _id
}

export default function m(): [() => void] {

  const [data, setData] = UseGenealogyProperty.list().useState()
  const [id, setId] = UseGenealogyProperty.id().useState()

  function checkUpdate() {
    new LibGcurl().genealogyId((last_id) => {
      if (last_id != id) {
        new LibGcurl().genealogyRef().once('value', d => {
          if (d && d.val()) {
            const vl = Object.values(d.val())
            setData(vl)
            setId(last_id)
          }
        })
      }
    })
  }
  return [checkUpdate]
}