import { useField } from 'formik'
import React from 'react'

export default function KodlamaIoTextInput({...props}) {
    //console.log(props)
    const [field,meta] = useField(props)
    console.log(field)
  return (
    <div>
      
    </div>
  )
}
