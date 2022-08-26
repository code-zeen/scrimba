const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function() {
  console.log("User has clicked 'SAVE INPUT'")
  myLeads.push(inputEl.value)
  console.log(myLeads)
  renderLeads()
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i]  + "</li>"
}
ulEl.innerHTML = listItems
console.log(listItems)
}