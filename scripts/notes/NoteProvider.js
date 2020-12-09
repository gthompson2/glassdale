const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = [];

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent) 
    
}

export const useNotes = () => {
    return notes.slice()
}