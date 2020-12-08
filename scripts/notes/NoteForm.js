import { saveNote } from "./NoteProvider.js";

/**
 * TODO:
 * 
 * Add event listener for a click on the form btn
 * 
 * Gather data from the form
 * 
 * Convert form data to an object
 * 
 * Create a custom event to broadcast the form data to 
 * whichever module is listening
 * 
 * Send the data to be stored in the DB via the API
 */

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // gather the data from the form
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value
        // make a new object representation of a note
        const newNote = {
            // key/value pairs here
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML =`
        <input type="text" id="author" placeholder="Author">
        <textarea id="text" placeholder="note" text></textarea>
        <input type="text" id="suspect" placeholder="Suspect Name">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}