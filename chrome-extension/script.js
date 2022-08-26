const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function() {
  console.log("User has clicked 'SAVE INPUT'")
  myLeads.push(inputEl.value)
  console.log(myLeads)
  renderLeads()
  inputEl.value = ""
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
  listItems +=`"
  <li>
    <a href='${myLeads[i]}' target='_blank'>
      ${myLeads[i]}
    </a>
  </li>
  `
}
ulEl.innerHTML = listItems
console.log(listItems)
}