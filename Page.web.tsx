import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web"
import React from "react"
import { Text } from "react-native"

export function Page() {
  return (
    <WithSkiaWeb
      getComponent={() => import("./SkiaComponent")}
      fallback={<Text>Loading Skia...</Text>}
    />
  )
}
