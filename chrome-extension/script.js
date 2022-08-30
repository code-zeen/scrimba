const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)  // check

if (leadsFromLocalStorage) {
  console.log("truthy") // check
  myLeads = leadsFromLocalStorage
  renderLeads()
} else {
  console.log("falsey") // check
}

deleteBtn.addEventListener("dblclick", function() {
  console.log("User has double-clicked 'DELETE ALL'")
  localStorage.clear()
  myLeads = []
  renderLeads()
})
inputBtn.addEventListener("click", function () {
  console.log("User has clicked 'SAVE INPUT'")

  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  console.log(myLeads)
  renderLeads()

  console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href="${myLeads[i]}" target="_blank">
          ${myLeads[i]}
        </a>
      </li>
      `
  }
  ulEl.innerHTML = listItems
}