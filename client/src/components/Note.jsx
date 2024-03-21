import React from "react";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={ () => props.delete(props.id, props.title)}><DeleteForeverRoundedIcon /></button>
    </div>
  );
}

export default Note;
