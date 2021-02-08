import React from 'react'
import { Container } from '../../styles/pages/home/FileList'
import { MdFileUpload } from 'react-icons/md'
const FileList: React.FC = () => {
  return (
    <Container>
      <div className="list-area">
        <ul>
          <li></li>
        </ul>
        <div className="more-area">
          <label>
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
