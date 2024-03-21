import React, {useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [addNote, setAddNote] = useState({
        title: "",
        content: ""
    });

    const [isZoom, setZoom] = useState(false);
    const [row, setRow] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        let note = {
            title: addNote.title,
            content: addNote.content
        }
        console.log('clicked');
        fetch('/api', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(response => response.json()).then(data => {
            console.log(data);
            props.newNote(data);
        })

    }

    function handleChange(event) {
        const { value, name } = event.target;
        setAddNote((prevNote) => {
            return { ...prevNote, [name]: value }
        })
    }

    function expand() {
        setZoom(true);
        setRow(3);
    }

    return <div>
        <form onSubmit={handleSubmit} className='create-note' >
            {isZoom && <input name='title' placeholder='Title' onChange={handleChange} />}
            <textarea onClick={expand} name="content" placeholder='Content' onChange={handleChange} rows={row} />
            <Zoom in={isZoom}>
                <Fab type='submit'><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
}

export default CreateArea;