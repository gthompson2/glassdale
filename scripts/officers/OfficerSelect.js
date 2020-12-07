import { useOfficer, getOfficers } from './OfficerProvider.js';


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", event => {
    // if the officerSelect element undergoes a change event:
    if (event.target.id === "officerSelect") {
        // create and dispatch a custom event
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                // event.target.value identifies the currently selected 
                // option element via its value. The officerChosen
                // custom event sends the value to any component with and
                // event listener waiting for officerChosen
                officerThatWasChosen: event.target.value
            }
        })
        // send out the flying customEvent!!!
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (officerCollection) => {
    contentTarget.innerHTML += `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer</option>
        ${
            officerCollection.map(officer => {
                const newArrayElement = `<option value=${officer.id}>${officer.name}</option>`
                return newArrayElement
            })
        }
    </select>
    `
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const officers = useOfficer()
        render(officers)
    })
}