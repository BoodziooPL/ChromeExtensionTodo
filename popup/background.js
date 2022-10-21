const inputValue = document.querySelector('.task')
const btnTask = document.querySelector('.submitBtn')
const task = document.querySelector('li')
let delBtn = document.querySelectorAll('.delete')
const doneBtn = document.querySelector('.complete')
const taskList = document.querySelector('.taskLists')
const tools = document.querySelector('.tasks')
let values = inputValue.value
let arr = []

const setTasks = () => {
  let values = inputValue.value
  arr.push(values)
  if (localStorage.getItem('myTask') == null) {
    localStorage.setItem('myTask', JSON.stringify(arr))
  } else {
    let newArr = []
    newArr.push(values)
    let uploadArr = JSON.parse(localStorage.getItem('myTask')).concat(newArr)

    localStorage.setItem('myTask', JSON.stringify(uploadArr))
  }
  addTasktoPopup()
}

const createAndPushElements = () => {
  // creating blocks
  const divWrapper = document.createElement('div')
  const listItem = document.createElement('li')
  const divTool = document.createElement('div')
  const btnComplete = document.createElement('button')
  const btnDelete = document.createElement('button')
  listItem.innerHTML = JSON.parse(localStorage.getItem('myTask'))[i]
  // adding class Lists and btn value
  divWrapper.classList.add('toolsTask')
  listItem.classList.add('data-task')
  divTool.classList.add('tools')
  btnComplete.classList.add('complete')
  btnDelete.classList.add('delete')
  btnComplete.innerHTML = "<i class='fa-solid fa-check'></i>"
  btnDelete.innerHTML = '<i class="fa-solid fa-eraser"></i>'
  //connecting every blocks
  divTool.append(btnComplete, btnDelete)
  divWrapper.append(listItem, divTool)
  taskList.appendChild(divWrapper)
}

const addTasktoPopup = () => {
  let localStorageLength = JSON.parse(localStorage.getItem('myTask')).length
  for (i = localStorageLength - 1; i < localStorageLength; i++) {
    createAndPushElements()
  }
}

if (localStorage.length > 0 == true) {
  let localStorageLength = JSON.parse(localStorage.getItem('myTask')).length
  for (i = 0; i < localStorageLength; i++) {
    createAndPushElements()
  }
}

let btns = document.querySelectorAll('.delete')
btns.forEach((item, index) => {
  item.addEventListener('click', () => {
    let arrJson = JSON.parse(localStorage.getItem('myTask'))
    arrJson.splice(index, 1)
    localStorage.setItem('myTask', JSON.stringify(arrJson))
    console.log(arrJson.length)
  })
})

tools.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.toolsTask').remove()
  }
})

btnTask.addEventListener('click', setTasks)
