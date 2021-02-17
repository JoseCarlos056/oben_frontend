import React, { useEffect, Dispatch, SetStateAction } from 'react'

import { useDropzone } from 'react-dropzone'
import drag from '../../assets/drag.svg'
interface IDropzone {
  onUpload: () => void
}
const Dropzone: React.FC<IDropzone> = () => {
  const onDrop = acceptedFiles => {
    console.log(acceptedFiles)
  }

  const { getInputProps } = useDropzone({ onDrop })

  return (
    <></>
  )
}
export default Dropzone
