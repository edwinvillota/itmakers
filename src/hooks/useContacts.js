import { useState, useEffect } from 'react'
import * as Contacts from 'expo-contacts'

export function useContacts () {
  const [granted, setGranted] = useState(false)
  const [list, setContacts] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        setGranted(true)
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers]
        })

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })()
  }, [])

  return [granted, list]
}