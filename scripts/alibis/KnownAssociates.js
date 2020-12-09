const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", buttonEvent => {
    if (buttonEvent.target.className === "associateButton"){
        const customEvent = new CustomEvent("alibiClicked", {
            detail: {
                // associates--${criminalObj.id} --> unique to each button
                alibiThatWasClicked: buttonEvent.target.id
            }
        
        })
        eventHub.dispatchEvent(customEvent)
    }
})
