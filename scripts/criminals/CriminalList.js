import { useCriminals, getCriminals } from './CriminalProvider.js';
import { Criminal } from './Criminal.js';

const criminalElement = document.querySelector(".criminalsContainer");
const criminalHTML = [];

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
        let perps = useCriminals() // perps now holds the array

        for (const perp of perps) {
            criminalHTML.push(Criminal(perp));
        }
        criminalElement.innerHTML += criminalHTML.join(" ")

    }
    )
}