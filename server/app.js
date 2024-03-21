import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

main().catch(err => console.log(err));

async function main() {
    app.use(bodyParser.json());
    await mongoose.connect('mongodb://127.0.0.1:/keeper');

    const noteSchema = new mongoose.Schema({
        title: String,
        content: String
    });

    const Note = mongoose.model("Note", noteSchema);

    app.get('/api', async (req, res) => {
        const dbData = await Note.find();

        res.json(dbData);
    })

    app.post('/api', async (req, res) => {
        const newTitle = req.body.title;
        const newContent = req.body.content;

        const newNote = new Note({
            title: newTitle,
            content: newContent
        })
        newNote.save();
        console.log(newNote);
        res.json(newNote);
    })

    app.delete('/api/delete', async (req, res) => {
        const deleteNoteTitle = req.body.title;
        const deleteNote = await Note.deleteOne({title: deleteNoteTitle});
        const newData = await Note.find();
        res.json(newData);
    })

}

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
