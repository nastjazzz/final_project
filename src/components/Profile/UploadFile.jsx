import React, {useRef, useState} from "react";
import * as axios from "axios";

const UploadFile = () => {
    const [file, setFile] = useState('');
    const [fileData, setFileData] = useState({path: '', name: ''});
    console.log('fileData', fileData);

    const elem = useRef();

    const onChangeFile = (e) => {
        const file = e.target.files[0];
        console.log('file', file);
        setFile(file);
    }

    const onClickUpload = (e) => {
        const data = new FormData();
        data.append('file', file);
        axios.post('http://localhost:3000/upload', data)
            .then(res => {
                console.log('res upload', res);
                setFileData({
                    path: 'http://localhost:3000' + res.data.path,
                    name: res.data.name
                })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='file-upload'>
            <input type={'file'} name={'file'} ref={elem} onChange={onChangeFile} />
            <button onClick={onClickUpload}>Загрузить</button>
            {fileData.path && <img src={fileData.path} alt={fileData.name}/>}
        </div>
    )
}

export default UploadFile;