import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    };

    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  ontitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onbodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    
    // Menyimpan data ke local storage
    const note = { title: this.state.title, body: this.state.body };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNotes = [...existingNotes, note];
    localStorage.setItem('notes', JSON.stringify(newNotes));

    // Menyampaikan data ke parent component (jika diperlukan)
    this.props.addNote && this.props.addNote(this.state);

    // Mengosongkan state setelah menyimpan
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form className='Note-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="title" value={this.state.title} onChange={this.ontitleChangeEventHandler} />
        <textarea cols="60" rows="10" type="text" placeholder="body" value={this.state.body} onChange={this.onbodyChangeEventHandler}></textarea>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
