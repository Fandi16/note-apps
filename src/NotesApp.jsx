import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./components/NotesInput";
import { getInitialData } from "./utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  componentDidMount() {
    // Memuat catatan dari localStorage saat komponen dimount
    const localNotes = JSON.parse(localStorage.getItem("notes")) || [];
    this.setState({
      Notes: localNotes,
    });
  }

  onDeleteHandler(id) {
  const updatedNotes = this.state.Notes.filter((note) => note.id !== id);
  this.setState({ Notes: updatedNotes });
  // Menyimpan catatan ke localStorage setelah menghapus
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
}


    onAddNoteHandler ( { title, body } )
    {
    const date = new Date();
    this.setState(
      (prevState) => {
        return {
          Notes: [
            ...prevState.Notes,
            {
              id: +new Date(),
              title,
              body,
              createdAt: date.toISOString(),
              archived: false,
            },
          ],
        };
      },
      () => {
        // Menyimpan catatan ke localStorage setelah menambahkan
        localStorage.setItem("notes", JSON.stringify(this.state.Notes));
      }
    );
  }

  render() {
    return (
      <div className="note-app">
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Daftar Catatan</h1>

        {this.state.Notes.length > 0 ? (
          <NotesList Notes={this.state.Notes} onDelete={this.onDeleteHandler} />
        ) : (
          <p className="noting">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteApp;
