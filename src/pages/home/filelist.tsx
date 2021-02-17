import React, { useEffect, Dispatch, SetStateAction, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useDropzone } from 'react-dropzone'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import {
  Container,
  ListFiles,
  Preview,
  FileInfo
} from '../../styles/pages/home/FileList'
import { MdFileUpload, MdCheckCircle, MdError, MdLink } from 'react-icons/md'
import drag from '../../assets/drag.svg'
interface IFileList {
  setDragged: Dispatch<SetStateAction<boolean>>
  dragged: boolean
}
interface IFile {
  file: File
  id: string
  name: string
  readableSize: string
  preview: string
  progress: number
  uploaded: boolean
  error: boolean
  url: string
}
const FileList: React.FC<IFileList> = props => {
  const [fileslist, setFileslist] = useState<IFile[]>([])
  const onDrop = (files: Array<File>) => {
    const uploadedFiles = files.map((file: File) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))
    setFileslist([...fileslist, ...uploadedFiles])
  }
  const { getRootProps, isDragActive, getInputProps } = useDropzone({ onDrop })
  useEffect(() => {
    console.log(isDragActive)
    if (!isDragActive) {
      // props.setDragged(false)
    }
  }, [isDragActive])
  return (
    <Container
      {...getRootProps()}
      dragged={props.dragged}
      onClick={e => {
        e.stopPropagation()
      }}
    >
      <div className="list-area">
        <div className="drag-area">
          <label className="area">
            <input {...getInputProps()} />
            <img src={drag} alt="" />
            <p>Arraste e solte aqui!</p>
          </label>
        </div>

        <ListFiles>
          {!!fileslist.length &&
            fileslist.map((file: IFile) => (
              <li key={file.id}>
                <FileInfo>
                  <Preview src={file.preview} />
                  <div>
                    <strong>{file.name}</strong>
                    <span>
                      {file.readableSize}{' '}
                      {file.url && <button onClick={() => {}}>Excluir</button>}
                    </span>
                  </div>
                </FileInfo>

                <div>
                  {!file.uploaded && !file.error && (
                    <CircularProgressbar
                      styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                      }}
                      strokeWidth={10}
                      value={file.progress}
                    />
                  )}
                  {file.url && (
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdLink
                        style={{ marginRight: 8 }}
                        size={24}
                        color="#222"
                      />
                    </a>
                  )}
                  {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
                  {file.error && <MdError size={24} color="#e57878" />}
                </div>
              </li>
            ))}
        </ListFiles>
        <div className="more-area">
          <label
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <input type="file" />
            <MdFileUpload />
            <p>Mais Arquivos</p>
          </label>
        </div>
      </div>
    </Container>
  )
}
export default FileList
