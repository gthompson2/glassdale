import { saveNote } from "./NoteProvider.js";
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";

/**
 * TODO:
 * 
 *
 * TODO:
 * 
 * Connect notes to criminal objects by relating them via the criminal ID
 * 
 * Grab value of criminalId from DOM when save note button is clicked
 */
 
 

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // gather the data from the form
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const criminalId = parseInt(document.querySelector("#suspect").value)
        // make a new object representation of a note
        const newNote = {
            // key/value pairs here
            author: author,
            text: text,
            criminalId: criminalId,
            timestamp: Date.now()
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    const criminalsArray = useCriminals()
    console.log("CriminalsArray: ", criminalsArray)

    contentTarget.innerHTML =`
        <input type="text" id="author" placeholder="Author">
        <textarea id="text" placeholder="note" text></textarea>

        <select id="suspect" class="criminalSelect">
            <option value="0">Please select a suspect</option>
            ${criminalsArray.map((criminal) => {
                return `<option value="${ criminal.id }">${ criminal.name }</option>`  
            })}
        </select>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then( () => render())
    
    
}