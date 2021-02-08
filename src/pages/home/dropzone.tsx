import React, { useEffect, Dispatch, SetStateAction } from 'react'

import { useDropzone } from 'react-dropzone'
import drag from '../../assets/drag.svg'
interface IDropzone {
  setDragged: Dispatch<SetStateAction<boolean>>
}
const Dropzone: React.FC<IDropzone> = props => {
  const onDrop = acceptedFiles => {
    console.log(acceptedFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  useEffect(() => {
    if (!isDragActive) {
      props.setDragged(false)
    }
  }, [isDragActive])
  return (
    <div className="drag-area" {...getRootProps()}>
      <label className="area">
        <input {...getInputProps()} />
        <img src={drag} alt="" />
        <p>Solte aqui!</p>
      </label>
    </div>
  )
}
export default Dropzone
