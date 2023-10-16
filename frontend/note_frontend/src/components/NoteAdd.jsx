import { useState, useEffect } from "react";
import Note from "./Note";
import axios from "axios";

function NoteAdd() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    // Your Local Host can be http://localhost:3000
    const response = await axios.get(" http://YourLocalHost/api/notes/");
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = async () => {
    if (title.trim() === "" || text.trim() === "") return;
    // Your Local Host can be http://localhost:3000
    const response = await axios.post("http://YourLocalHost/api/notes/", {
      title,
      text,
    });
    const newNote = { id: response.data.id, title, text }; 
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setTitle("");
    setText("");
  };

  const handleNoteDelete = async (id) => {
    try {
      // Your Local Host can be http://localhost:3000
      await axios.delete(`http://YourLocalHost/api/notes/${id}/`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Silme işlemi başarısız oldu.', error);
    }
  };
  

  return (
    <div className="p-4  flex  w-full">
      <div className="w-1/2 px-3">
        <h2 className="text-xl font-semibold mb-2">Not ekle </h2>
        <div className="mb-4">
          <label htmlFor="baslik" className="block font-medium mb-1">
            Başlık :
          </label>
          <input
            type="text"
            id="baslik"
            name="baslik"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metin" className="block font-medium">
            Metin Ekle
          </label>
          <textarea
            name="metin"
            id="metin"
            cols="30"
            rows="10"
            value={text}
            onChange={handleTextChange}
            className="border rounded-md p-2 w-3/4 text-black"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          Kaydet
        </button>
      </div>
      <div className="w-1/2 pr-3  rounded-md">
        <h2 className="text-xl font-semibold m-4">Notlarınız</h2>
        <div className="w-full">
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <Note
                  title={note.title}
                  text={note.text}
                  onDelete={() => handleNoteDelete(note.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoteAdd;
