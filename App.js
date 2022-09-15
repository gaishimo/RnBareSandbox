import React from "react"
import { StyleSheet, View } from "react-native"
import { Page } from "./Page"

export default function App() {
  return (
    <View style={styles.container}>
      <Page />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
