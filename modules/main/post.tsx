// withHooks

import { ComponentButton, ComponentHeader, LibGcurl, LibInput, LibNavigation, LibScroll } from 'esoftplay';
import React, { useRef } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';


export interface MainPostProps {

}
export default function m(props: MainPostProps): any {
  const editPost = LibNavigation.getArgs(props, 'post', 0)

  const inputTitle = useRef<LibInput>(null)
  const inputMsg = useRef<LibInput>(null)

  function doPost(): void {
    if (editPost != 0) {
      new LibGcurl().toastEdit(editPost._key,
        {
          ...editPost,
          title: inputTitle.current!.getText(),
          msg: inputMsg.current!.getText(),
        },
        () => LibNavigation.sendBackResult('1')
      )
      return
    }
    new LibGcurl().toastPost(
      inputTitle.current!.getText(),
      inputMsg.current!.getText(),
      () => LibNavigation.sendBackResult('1')
    )
  }


  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1, backgroundColor: 'white' }} >
      <>
        <ComponentHeader title="Pengumuman" />
        <LibScroll>

          <View style={{ height: 30 }} />
          <LibInput
            label="Judul"
            defaultValue={editPost && editPost.title}
            ref={inputTitle}
          />
          <LibInput
            ref={inputMsg}
            label="Isi"
            defaultValue={editPost && editPost.msg}
            multiline
            style={{ height: 200, textAlignVertical: 'top' }}
          />
          <ComponentButton title="Publikasi" onPress={doPost} />
          <View style={{ height: 10 }} />
        </LibScroll>
      </>
    </KeyboardAvoidingView>
  )
}