import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiList")


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
        <div><b>Associate #${(associateArray.indexOf(associateObj))+1}</b>: ${associateObj.name}
        <br>&emsp;<b>Alibi</b>: ${associateObj.alibi}</div>
        `
    }
    contentTarget.innerHTML = associateList
}