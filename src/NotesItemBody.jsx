import React from "react";
import { showFormattedDate } from "./utils";

function NotesItembody({title, body, createdAt}) {
    return (
        <div className="notes-item__body">
            <h3 className="notes-item__title">{ title }</h3>
            <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
            <p className="notes-item__note">{ body }</p>
        </div>
    );
}

export default NotesItembody;