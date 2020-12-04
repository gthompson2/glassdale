import { useCriminals, getCriminals } from './CriminalProvider.js';
import { Criminal } from './Criminal.js';
import { useConvictions } from '../convictions/ConvictionProvider.js';

const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer");

const render = (criminals) => {
    let criminalCards = []
    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
    }
    criminalElement.innerHTML = criminalCards.join(" ")
}

//Listen for the custom event that was dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property that was added to event detail
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people
            that committed the crime
        */
       const crimes = useConvictions()
       const crime = crimes.find(crime => crime.id === parseInt(event.detail.crimeThatWasChosen))

       const criminals = useCriminals()
       const matchingCriminals = criminals.filter((criminal) => {
           return criminal.conviction === crime.name
       })
       render(matchingCriminals)

       
    }
}
)



export const CriminalList = () => {
    /**
     * getCriminals() has to finish fetching and parsing data 
     * before you can use said data, or import the array from useCriminals().
     * We need another .then() to make sure that the program waits until
     * getCriminals() is done. 
     * 
     * We can use .then on getCriminals() because getCriminals returns
     * the results of calling fetch(). fetch() returns a promised object,
     * and by extension, getCriminals() does the same.
     */
    getCriminals().then(() => {
        let perp = useCriminals()
        render(perp)

    })
}