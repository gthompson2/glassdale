/**
 * Generates HTML representations of notes when called and passed
 * a note object as an argument
 */
export const NoteHTMLConverter = (noteObj) => {
    return `
        <section class="note">
            <div class="note__text">${ noteObj.text }</div>
            <div class="note__suspect">Suspect: ${ noteObj.criminalName }</div>
            <div class="note__author">Author: ${ noteObj.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObj.timestamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObj.id}">Delete</button>
        </section>
    `
}