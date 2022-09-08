import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import React from 'react';

export default function SkiaComponent() {
  const path = Skia.Path.Make();
  path.moveTo(100, 100);
  path.lineTo(130, 130);
  path.rLineTo(30, 30);
  return (
    <Canvas style={{flex: 1}}>
      <Path path={path} color="lightblue" style={'stroke'} strokeWidth={2} />
    </Canvas>
  );
}
