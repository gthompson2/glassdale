import { useConvictions, getConvictions } from './ConvictionProvider.js';

/**
 * Tasks:
 * 1. Listen for the selection of a crime in the browser and capture the chosen value
 *      a. The event will be triggered on the select element ("change")
 * 2. Send out a message (customEvent) via eventHub
 */

//The HTML element that contains all componenets is your Event Hub.
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime") // contentTarget points to the element that ConvictionSelect has direct effect on


//listen for a "change" event within the eventHub
eventHub.addEventListener("change", event => {
    //This only happens if the "crimeSelect" element changes
    if (event.target.id === "crimeSelect") {
        //create custom event
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                // event.target.value identifies an option element generated by render()
                // the crimeChosen custom event sends the value to any component listening for this event
                // when the crimeSelect element undergoes a change event
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
    // pulls conviction data from API
    getConvictions().then(() => {
        // stores array generated from API in convictions
        const convictions = useConvictions();
        // send array to render() for HTML generation of dropdown menu
        render(convictions)
    })
}