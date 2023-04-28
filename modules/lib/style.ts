import React from "react";
import { Dimensions, StatusBar, Platform } from "react-native";

const { height, width } = Dimensions.get("window");
const isIphoneX = Platform.OS === "ios" && ((height === 812 || width === 812) || (height === 896 || width === 896))
const STATUSBAR_HEIGHT = (Platform.OS === "ios" ? isIphoneX ? 44 : 20 : StatusBar.currentHeight) || 0;
const STATUSBAR_HEIGHT_MASTER = (Platform.OS === "ios" ? isIphoneX ? 44 : 20 : StatusBar.currentHeight) || 0;
const colorPrimary = "#ff7b00"
const colorPrimaryDark = "#ff7b00"
const colorAccent = "#FFF"
const colorGrey = "#F1F1F3"
const colorRed = "red"
const colorTextPrimary = "#353535"
const colorTextBody = "#353535"
const colorTextCaption = "#686868"
const colorLightGrey = "#fbfbfb"

function elevation(value: any): any {
  if (Platform.OS === "ios") {
    if (value == 0) return {}
    return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 }
  }
  return { elevation: value }
}

// Add your default style here
/*
Sample :

###################
le
const styles = StyleSheet.create({
  container: {
    ...defaultStyle.container
  },
});

##################

*/

const defaultStyle = {
  container: {
    flex: 1,
  },
  imageSliderSize: {
    width: width,
    height: width * 0.8 // make image ratio square
  },
  statusBar: {
    height: STATUSBAR_HEIGHT_MASTER,
    backgroundColor: colorPrimaryDark
  },
  overflowHidden: {
    overflow: "hidden"
  },
  textPrimary13: {
    fontSize: 13,
    color: colorPrimary
  },
  textPrimaryDark13: {
    fontSize: 13,
    color: colorPrimaryDark
  },
}

export default class Style {
  static isIphoneX: boolean = isIphoneX;
  static STATUSBAR_HEIGHT: number = STATUSBAR_HEIGHT;
  static STATUSBAR_HEIGHT_MASTER: number = STATUSBAR_HEIGHT_MASTER;
  static colorPrimary: string = colorPrimary;
  static colorPrimaryDark: string = colorPrimaryDark;
  static colorAccent: string = colorAccent;
  static colorGrey: string = colorGrey;
  static colorRed: string = colorRed;
  static colorTextPrimary: string = colorTextPrimary;
  static colorTextBody: string = colorTextBody;
  static colorTextCaption: string = colorTextCaption;
  static colorLightGrey: string = colorLightGrey;
  static elevation(val: number): any { return elevation(val) };
  static width: number = width;
  static height: number = height;
  static defaultStyle: any = defaultStyle;
}