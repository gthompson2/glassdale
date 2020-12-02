
let criminals = []; //an empty array to hold the API data

// This function packages the officers array for export/import
export const useCriminals = () => {
    return criminals.slice()
}


export const getCriminals = () => {
    // fetch pulls the JSON data from the url
    return fetch("https://criminals.glassdale.us/criminals")
        // .then is a method belonging to fetch(), so you can't
        // put semicolons between fetch() and .then, though you 
        // can put spaces and escape characters
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals      
            }
        )
}