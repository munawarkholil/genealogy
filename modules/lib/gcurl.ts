import React from 'react'
import firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import { Alert, } from 'react-native'
import * as Notifications from 'expo-notifications'
import { LibUtils } from 'esoftplay'
import AsyncStorage from '@react-native-community/async-storage'

export default class m {

  genealogyRef(): firebase.database.Reference {
    return firebase.database().ref('genealogy')
  }

  genealogyIdRef(): firebase.database.Reference {
    return firebase.database().ref('genealogy_id')
  }

  genealogyId(callback: (id: string) => void): void {
    this.genealogyIdRef().once('value', s => {
      if (s && s.val()) {
        callback(s.val())
      }
    })
  }

  genealogySetId(): void {
    this.genealogyIdRef().set((new Date().getTime() / 1000).toFixed(0))
  }

  genealogyNextId(callback: (id: number) => void): void {
    this.genealogyRef().once('value', s => {
      if (s && s.val()) {
        const x = s.val()
        callback(x[x.length - 1].id + 1)
      } else {
        callback(1)
      }
    })
  }

  genealogyList(callback: (s: any) => void): void {
    this.genealogyRef().once('value', s => {
      if (s && s.val())
        callback(s.val())
    })
  }

  genealogyReg(par_id: number, name: string, gender: "m" | "f", callback: (insertId: string) => void): void {
    this.genealogyNextId(next_id => {
      this.genealogyRef().child(String(next_id)).set({
        id: next_id,
        rel_id: [next_id],
        par_rel: par_id,
        name: name,
        gender: gender
      }, () => {
        callback(String(next_id))
        this.genealogySetId()
      })
    })
  }

  genealogyAddRel(id: string, rel_id: string): void {
    this.genealogyRef().child(id).child("rel_id").once('value', s => {
      this.genealogyRef().child(id).child("rel_id").set(LibUtils.uniqueArray([...s.val(), Number(rel_id)]))
    })
    this.genealogyRef().child(rel_id).child("rel_id").once('value', s => {
      this.genealogyRef().child(rel_id).child("rel_id").set(LibUtils.uniqueArray([...s.val(), Number(id)]))
    })
    this.genealogySetId()
  }

  toastRef(): firebase.database.Reference {
    return firebase.database().ref('toast')
  }
  toastIdRef(): firebase.database.Reference {
    return firebase.database().ref('toast_id')
  }

  tokenRef(): firebase.database.Reference {
    return firebase.database().ref('token')
  }

  tokenPost(token: string): void {
    this.tokenRef().push().set(token)
  }

  registerToken(): void {
    AsyncStorage.getItem("token").then((t) => {
      if (!t) {
        setTimeout(async () => {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          if (status !== 'granted') {
            Alert.alert('Pemberitahuan dinonaktifkan', 'Mohon aktifkan melalui pengaturan di smartphone anda');
            return;
          }
          let { data } = await Notifications.getExpoPushTokenAsync();
          this.tokenPost(data)
          AsyncStorage.setItem("token", data)
        }, 0);
      }
    })
  }

  push(to: any, title: string, msg: string): void {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accept-encoding': 'gzip, deflate',
        'host': 'exp.host'
      },
      body: JSON.stringify({
        to: to,
        title: title,
        body: msg,
        priority: "max",
        sound: "default",
        channelId: "android",
        _displayInForeground: true,
      }),
    }).then((response) => response.json())
      .then((responseJson) => { })
      .catch((error) => { console.log(error) });
  }

  tokenPushAll(title: string, msg: string): void {
    this.tokenRef().once('value', (s) => {
      if (s && s.val()) {
        let allToken = Object.values(s.val())
        while (allToken.length) {
          const tokens = allToken.splice(0, 90)
          this.push(tokens, title, msg)
        }
      }
    })
  }

  toastPost(title: string, msg: string, callback: (a: any) => void): void {
    let post: any = {
      title: title,
      time: (new Date().getTime() / 1000).toFixed(0),
      msg: msg,
      admin: 'Admin',
    }
    this.toastRef().push().set(post, callback)
    this.tokenPushAll(title, msg)
    this.toastSetId()
  }

  toastId(callback: (id: number) => void): void {
    firebase.database().ref('toast_id').once('value', s => {
      if (s && s.val()) {
        callback(s.val())
      }
    })
  }

  toastList(callback: (list: any) => void): void {
    this.toastRef().once('value', (s) => {
      if (s && s.val()) {
        const sVal = s.val()
        const keys = Object.keys(sVal)
        const list = keys.map((key) => ({ _key: key, ...sVal[key] }))
        callback([...list].reverse())
      }
    })
  }

  toastEdit(key: string, value: any, callback: (list: any) => void): void {
    this.toastRef().child(key).set(value, () => this.toastList(callback))
    this.toastSetId()
  }

  toastDelete(key: string, callback: () => void): void {
    this.toastRef().child(key).remove(callback)
    this.toastSetId()
  }

  toastSetId(): void {
    this.toastIdRef().set((new Date().getTime() / 1000).toFixed(0))
  }

}