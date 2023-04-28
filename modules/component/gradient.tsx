// withHooks

import React from 'react';
import { View } from 'react-native';


export interface ComponentGradientArgs {

}
export interface ComponentGradientProps {

}

const TOP_TO_BOTTOM = (percent = 1) => ({
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: percent }
});

const BOTTOM_TO_TOP = (percent = 1) => ({
  start: { x: 0.5, y: 1 },
  end: { x: 0.5, y: 1 - percent }
});

const LEFT_TO_RIGHT = (percent = 1) => ({
  start: { x: 0, y: 0.5 },
  end: { x: percent, y: 0.5 }
});

const RIGHT_TO_LEFT = (percent = 1) => ({
  start: { x: 1, y: 0.5 },
  end: { x: 1 - percent, y: 0.5 }
});

const TOP_LEFT_TO_BOTTOM_RIGHT = (percent = 1) => ({
  start: { x: 0, y: 0 },
  end: { x: percent, y: percent }
});

const BOTTOM_RIGHT_TO_TOP_LEFT = (percent = 1) => ({
  start: { x: 1, y: 1 },
  end: { x: 1 - percent, y: 1 - percent }
});

const TOP_RIGHT_TO_BOTTOM_LEFT = (percent = 1) => ({
  start: { x: 1, y: 0 },
  end: { x: 1 - percent, y: percent }
});

const BOTTOM_LEFT_TO_TOP_RIGHT = (percent = 1) => ({
  start: { x: 0, y: 1 },
  end: { x: percent, y: 1 - percent }
});

const direction = {
  "top-to-bottom": {
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 }
  },
  "bottom-to-top": {
    start: { x: 0.5, y: 1 },
    end: { x: 0.5, y: 0 }
  },
  "left-to-right": {
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 }
  },
  "right-to-left": {
    start: { x: 1, y: 0.5 },
    end: { x: 0, y: 0.5 }
  },
  "top-left-to-bottom-right": {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  "bottom-right-to-top-left": {
    start: { x: 1, y: 1 },
    end: { x: 0, y: 0 }
  },
  "top-right-to-bottom-left": {
    start: { x: 1, y: 0 },
    end: { x: 0, y: 1 }
  },
  "bottom-left-to-top-right": {
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 }
  }
};


export default function m(props: ComponentGradientProps): any {
  return (
    <View>
    </View>
  )
}