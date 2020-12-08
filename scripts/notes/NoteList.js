/**
 * Listen for customEvent to be triggered by ShowNotesButton.js;
 * Pull note data from the API and generate HTML using Note.js
 * render the HTML in the DOM
 */
import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteList");
const eventHub = document.querySelector(".container");

// When the Show Notes button is clicked, NoteList() gets called
// and starts the process of rendering the notes  
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    // generate HTML from array of note objects (noteArray)
    // join new HTML array into one big string
    // add that string to the DOM
    const allNotesConvertedToStrings = noteArray.map( (noteObj) => {
        return NoteHTMLConverter(noteObj)
    }).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    // pull data from API
    getNotes()
        .then(() => {
            // store aray of objects in allNotes
            const allNotes = useNotes()
            // pass allNotes to render() to send to DOM
            render(allNotes)
        })
}
