import {Canvas, Circle} from '@shopify/react-native-skia';
import React from 'react';

export default function SkiaComponent() {
  return (
    <Canvas style={{flex: 1}}>
      <Circle cx={100} cy={100} r={30} color="lightblue" />
    </Canvas>
  );
}
