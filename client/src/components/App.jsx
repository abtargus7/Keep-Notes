import React, { useState, useEffect } from "react";
import Note from './Note';
import Header from './Header';
import CreateArea from "./CreateArea";
import { Outlet } from "react-router-dom";

function App() {

    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState({});

    const fetchdata = async () => {
        const data = await fetch('/api');
        const jsonData = await data.json();
        setNotes(jsonData);
    }

    useEffect(() => {
        fetchdata();
        // console.log(notes);
    }, []);

    function handleDelete(id, title) {
        

        const bodyData = {
            title : title,
            id : id
        };

        fetch('/api/delete', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        }).then(response => response.json()).then(data => {
            console.log(data);
            setNotes(data);
        })
    }
    function handleNewData(data){
        setNotes((prevNotes) => [...prevNotes, data]);
    }

    function handleEdit(note){
        
    }

    return (
        <div>
            <CreateArea  newNote = {handleNewData} />
            {notes.map((note, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    delete={handleDelete}
                    edit={handleEdit}
                />
            })}
        </div>
    );
}

export default App;