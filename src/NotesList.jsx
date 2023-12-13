import React from "react";
import NotesItem from "./NotestItem";

function NotesList ( { Notes, onDelete} )
{
    return (
        <div className="note-list">
            {
                Notes.map( ( Notes ) => (
                    <NotesItem key={ Notes.id } id={Notes.id}onDelete={onDelete} {...Notes} />
                ))
            }
      </div>  
    );
}

export default NotesList;