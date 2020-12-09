import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener('alibiClicked', event => {
    const criminals = useCriminals()
    const criminal = criminals.find((perp) => {
        return perp.id === parseInt(event.detail.alibiThatWasClicked)
    })
    const alibi = criminal.known_associates //alibi is an array of objects
    alibiRender(alibi)
})

const alibiRender = (associateArray) => {
    let associateList = ``
    for (const associateObj of associateArray){
        associateList += `
        Associate #${(associateArray.indexOf(associateObj))+1}: ${associateObj.name}
        Alibi: ${associateObj.alibi}
        `
    }
    window.alert(associateList)
}