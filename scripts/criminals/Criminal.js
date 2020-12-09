/**
 * 
 * new Date().toLocalDateString() formats the date data in a way that is readable
 * 
 */
export const Criminal = (criminalObj) => {
    return `
            <section class="criminal">
                <h3>${criminalObj.name}</h3>
                <div>Age: ${criminalObj.age}</div>
                <div>Crime: ${criminalObj.conviction}</div>
                <div>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
                <div>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
                <div>
                    <button class="associateButton" id="${criminalObj.id}">Associate Alibis</button>
                </div>
            </section>        
    `
}

