let totalCount = document.getElementById("count-el")
let saveCount = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  totalCount.textContent = count
}

function save() {
    let numberDash = count + " - "
    saveCount.textContent += numberDash
    count = 0
    totalCount.textContent = count
}

function reset() {
  count = 0
  totalCount.textContent = count
  saveCount.textContent = "Prev entries: "
}