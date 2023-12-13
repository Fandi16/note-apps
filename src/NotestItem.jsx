import React from "react";
import NotesItembody from "./NotesItemBody";
import DeleteButton from "./components/DeleteButton";

function NotesItem ( {title, body, createdAt, onDelete ,id } )
{
    return (
        <div className="note-item">
            <NotesItembody title={ title } body={ body } createdAt={ createdAt } />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

export default NotesItem;