import React from "react"
import { Button, View } from "react-native"
import { HapticEngine, HapticPatternType } from "react-native-core-haptics-api"

// eventType
// AudioContinuous
// AudioCustom
// HapticTransient: 一時的
// HapticContinuous: 持続的

// event parameter
// - HapticsIntensity
// - HapticsSharpness
// - AudioVolume
// - AudioPich
// - AudioPan
// - AudioBrightness

export function Page() {
  const checkSharpness = async () => {
    try {
      const pattern: HapticPatternType = {
        hapticEvents: [...Array(20).keys()].map(i => ({
          duration: 0.1,
          eventType: { rawValue: "HapticContinuous" },
          relativeTime: 0.2 * i,
          parameters: [
            {
              parameterID: { rawValue: "HapticSharpness" },
              value: i < 10 ? 0.01 : 1,
            },
          ],
        })),
      }

      await HapticEngine.start(undefined)
      await HapticEngine.makePlayer(pattern, undefined)

      const startTime = 0
      await HapticEngine.startPlayerAtTime(pattern, startTime, undefined)

      // setTimeout(async () => {
      //   try {
      //     await HapticEngine.stop(undefined)
      //   } catch (e) {
      //     console.log(e)
      //   }
      // }, 5000)
    } catch (e) {
      console.log(e)
    }
  }

  const checkIntensity = async () => {
    try {
      const pattern: HapticPatternType = {
        hapticEvents: [...Array(20).keys()].map(i => ({
          duration: 0.1,
          eventType: { rawValue: "HapticContinuous" },
          relativeTime: 0.2 * i,
          parameters: [
            {
              parameterID: { rawValue: "HapticIntensity" },
              value: i < 10 ? 0.01 : 1,
            },
          ],
        })),
      }

      await HapticEngine.start(undefined)
      await HapticEngine.makePlayer(pattern, undefined)

      const startTime = 0
      await HapticEngine.startPlayerAtTime(pattern, startTime, undefined)

      // setTimeout(async () => {
      //   try {
      //     await HapticEngine.stop(undefined)
      //   } catch (e) {
      //     console.log(e)
      //   }
      // }, 5000)
    } catch (e) {
      console.log(e)
    }
  }

  const checkEventType = async () => {
    try {
      const pattern: HapticPatternType = {
        hapticEvents: [...Array(20).keys()].map(i => ({
          duration: 0.1,
          eventType: {
            rawValue: i < 10 ? "HapticTransient" : "HapticContinuous",
          },
          relativeTime: 0.2 * i,
          parameters: [
            {
              parameterID: { rawValue: "HapticIntensity" },
              value: 0.5,
            },
          ],
        })),
      }

      await HapticEngine.start(undefined)
      await HapticEngine.makePlayer(pattern, undefined)

      const startTime = 0
      await HapticEngine.startPlayerAtTime(pattern, startTime, undefined)

      // setTimeout(async () => {
      //   try {
      //     await HapticEngine.stop(undefined)
      //   } catch (e) {
      //     console.log(e)
      //   }
      // }, 5000)
    } catch (e) {
      console.log(e)
    }
  }

  const basic = async () => {
    const pattern: HapticPatternType = {
      hapticEvents: [
        {
          duration: 0.3,
          eventType: { rawValue: "HapticContinuous" },
          relativeTime: 0,
          parameters: [
            { parameterID: { rawValue: "HapticIntensity" }, value: 0.7 },
            { parameterID: { rawValue: "HapticShapness" }, value: 0.4 },
          ],
        },
        {
          duration: 0.3,
          eventType: { rawValue: "HapticContinuous" },
          relativeTime: 0.5,
          parameters: [
            { parameterID: { rawValue: "HapticIntensity" }, value: 0.7 },
            { parameterID: { rawValue: "HapticShapness" }, value: 0.4 },
          ],
        },
      ],
    }
    await HapticEngine.start(undefined)
    await HapticEngine.makePlayer(pattern, undefined)

    const startTime = 0
    await HapticEngine.startPlayerAtTime(pattern, startTime, undefined)

    setTimeout(async () => {
      await HapticEngine.stop(undefined)
    }, 3000)
  }

  const test = async () => {
    try {
      const pattern = {
        hapticEvents: [...Array(30).keys()].map(i => ({
          duration: i < 10 ? 0.2 : 0.15,
          relativeTime: [...Array(i).keys()].reduce(
            (sum, current) => sum + (current < 10 ? 0.25 : 0.18),
            0,
          ),
          eventType: { rawValue: "HapticContinuous" },
          // relativeTime: i * 0.3,
          parameters: [
            {
              parameterID: { rawValue: "HapticSharpness" },
              value: 0.1,
            },
            {
              parameterID: { rawValue: "HapticIntensity" },
              value: i < 15 ? 0.8 : 1,
            },
          ],
        })),
      }

      await HapticEngine.start(undefined)
      await HapticEngine.makePlayer(pattern, undefined)

      const startTime = 0
      await HapticEngine.startPlayerAtTime(pattern, startTime, undefined)

      // setTimeout(async () => {
      //   try {
      //     await HapticEngine.stop(undefined)
      //   } catch (e) {
      //     console.log(e)
      //   }
      // }, 5000)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Test" onPress={test} />
      <Button title="Basic" onPress={basic} />
      <Button title="Check Sharpness" onPress={checkSharpness} />
      <Button title="Check Intensity" onPress={checkIntensity} />
      <Button title="Check EventType" onPress={checkEventType} />
    </View>
  )
}
