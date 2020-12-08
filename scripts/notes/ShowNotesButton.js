/**
 * Generates Show Notes button and waits for it to be clicked.
 * Alerts other components when the click happens via custom Event
  */
const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}