let convictions = [];

export const useConvictions = () => {
    return convictions.slice();
}


export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        // convert json data into a format readable by JavaScript
        .then(response => response.json()) 
        // log data to console in table format to show it's there
        // pass data to convictions array
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}

