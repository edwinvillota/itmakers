import { useState, useEffect } from 'react'
import { Camera } from 'expo-camera'

export function useCamera () {
  const [ granted, setGranted ] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setGranted(status === 'granted')
    })()
  }, [])

  return [granted]
}