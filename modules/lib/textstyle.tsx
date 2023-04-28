// 
import React from "react";
import { Text, StyleSheet } from "react-native";
import { LibComponent, LibStyle } from "esoftplay";

export interface LibTextstyleProps {
  textStyle: "header" | "title" | "subtitle" | "subtitle2" | "subheader" | "caption1" | "body" | "section" | "section_action" | "menu",
  style?: any,
  children?: string | "",
  numberOfLines?: number,
  ellipsizeMode?: string,
  text: string | ""
}

export interface LibTextstyleState {

}

export default class etextstyle extends LibComponent<LibTextstyleProps, LibTextstyleState>{
  props: any

  constructor(props: LibTextstyleProps) {
    super(props)
    this.props = props
  }

  scale: number = 1

  styles: any = {
    header: {
      fontFamily: "Hind",
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 22,
      letterSpacing: 0.4,
      textAlign: "center",
      color: "#434040"
    },
    title: {
      fontFamily: "Hind",
      fontSize: 30,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 36,
      letterSpacing: 0,
      color: "#434040"
    },
    subtitle: {
      fontFamily: "Hind",
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 18,
      letterSpacing: 0.4,
      color: "#918e8e"
    },
    subtitle2: {
      fontFamily: "Hind",

      fontSize: 16,

      fontWeight: "normal",

      fontStyle: "normal",

      lineHeight: 22,

      letterSpacing: 0.4,

      textAlign: "center",

      color: "#434040"
    },
    subheader: {
      fontFamily: "Hind",
      fontSize: 18,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 24,
      letterSpacing: 0.4,
      color: "#ff7b00"
    },
    caption1: {
      fontFamily: "Hind",
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 18,
      letterSpacing: 0.4,
      color: LibStyle.colorPrimary
    },
    body: {
      fontFamily: "Hind",
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 22,
      letterSpacing: 0.4,
      color: "#434040"
    },
    section: {
      fontFamily: "Hind",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 20,
      letterSpacing: 0.4,
      color: "#434040"
    },
    section_action: {
      fontFamily: "Hind",
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 20,
      letterSpacing: 0.4,
      textAlign: "right",
      color: "#ff7b00"
    },
    menu: {
      fontFamily: "Hind",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 16,
      letterSpacing: 0.3,
      textAlign: "center",
      color: "#ff7b00"
    }
  }

  render(): any {
    var st;
    if (typeof this.props.style === "object") {
      st = Object.assign({}, this.styles[this.props.textStyle], {
        fontSize: this.styles[this.props.textStyle].fontSize * this.scale,
        letterSpacing: this.styles[this.props.textStyle].letterSpacing * this.scale
      }, this.props.style)
    } else {
      st = StyleSheet.flatten([this.styles[this.props.textStyle], {
        fontSize: this.styles[this.props.textStyle].fontSize * this.scale,
        letterSpacing: this.styles[this.props.textStyle].letterSpacing * this.scale
      }, this.props.style])
    }
    return (
      <Text {...this.props} style={st}>
        {this.props.text ? String(this.props.text) : this.props.children ? String(this.props.children) : ''}
      </Text>
    );
  }
}