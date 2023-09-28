// Write your code here!
const mainNode = document.getElementById('main')
if (mainNode) {
    mainNode.parentNode.removeChild(mainNode)
}
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "Nick Weiland is the champion!"
