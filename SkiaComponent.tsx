import { Canvas, Circle } from "@shopify/react-native-skia"
import React from "react"
import { Dimensions } from "react-native"

const window = Dimensions.get("window")
const canvasSize = window

const circles = [
  { radius: 40, blur: 40 },
  { radius: 50, blur: 60 },
  { radius: 60, blur: 80 },
  { radius: 70, blur: 100 },
  { radius: 80, blur: 120 },
]

export default function SkiaComponent() {
  return (
    <Canvas style={[canvasSize]}>
      <Circle cx={100} cy={100} r={20} color="lightblue" />
    </Canvas>
  )
}
