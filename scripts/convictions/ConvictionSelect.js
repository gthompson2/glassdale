import { useConvictions, getConvictions } from './ConvictionProvider.js';

/**
 * Tasks:
 * 1. Listen for the selection of a crime and capture the chosen value
 *      a. The event will be triggered on the select element ("change")
 * 2. Send out a message (customEvent) via eventHub
 */

//The HTML element that contains all componenets is your Event Hub.
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")


//listen for a "change" event within the eventHub
eventHub.addEventListener("change", event => {
    //This only happens if the "crimeSelect" element changes
    if (event.target.id === "crimeSelect") {
        //create custom event
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime</option>
            ${
                convictionsCollection.map(crime => {
                    const newArrayElement = `<option value=${crime.id}>${crime.name}</option>`
                    return newArrayElement
                })
            }
        </select>
        `
}

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        const convictions = useConvictions();
        render(convictions)
    })
}