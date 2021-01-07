/**
 * Listen for customEvent to be triggered by ShowNotesButton.js;
 * Pull note data from the API and generate HTML using Note.js
 * render the HTML in the DOM
 */
import { deleteNote, getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalProvider.js";


const contentTarget = document.querySelector(".noteListDisplay");
const eventHub = document.querySelector(".container");

// When the Show Notes button is clicked, NoteList() gets called
// and starts the process of rendering the notes  
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

/**  
 * This event listener ensures that when a new note is saved while
 * notes are being shown, the new note is generated
*/
eventHub.addEventListener("noteStateChanged", customEvent => {

    // calling getNotes() by itself instead of NoteList() prevents 
    // notes from being automatically displayed 
    getNotes()
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")){
        const [prefix, id] = clickEvent.target.id.split("--")
        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

const render = (noteArray, criminals) => {
    // generate HTML from array of note objects (noteArray)
    // join new HTML array into one big string
    // add that string to the DOM
    const allNotesConvertedToStrings = noteArray.map( (noteObj) => {
        const associatedCriminal = criminals.find((criminal) => {
            return criminal.id === noteObj.criminalId
        })

        noteObj.criminalName = associatedCriminal.name
        return NoteHTMLConverter(noteObj)
    }).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    // pull data from API
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            // store aray of objects in allNotes
            const allNotes = useNotes()
            // pass allNotes to render() to send to DOM
            render(allNotes, criminals)
        })
}
