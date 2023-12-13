import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./components/NotesInput";
import { getInitialData } from "./utils";

class NoteApp extends React.Component
{
    constructor(props){
        super( props );
        this.state = {
            Notes: getInitialData(),
        }

        this.onDeleteHendler = this.onDeleteHendler.bind( this );
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHendler ( id )
    {
        const Notes = this.state.Notes.filter( Notes => Notes.id !== id );
        this.setState( { Notes } );

    }
    onAddNoteHandler ( { title, body } )
    {
    const date = new Date();
    this.setState((prevState) => {
        return {
        Notes: [
            ...prevState.Notes,
            {
            id: +new Date(),
            title,
            body,
            createdAt: date.toISOString(),
            archived: false,
            }
        ]
        }
    });
    }

    render ()
    {
        return (
            <div className="note-app">
                <h2>Tambah Kontak</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h1>  Daftar Catatan </h1>
               
                {this.state.Notes.length > 0 ? (
                    <NotesList Notes={this.state.Notes} onDelete={this.onDeleteHendler} />
                ) : (
                    <p className="noting">Tidak ada catatan</p>
                ) }
                
            </div> 
        )
    }
}

export default NoteApp;