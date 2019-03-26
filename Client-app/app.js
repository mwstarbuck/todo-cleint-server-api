
const URL = "http://localhost:3000/todos"
let titleTxtBox = document.getElementById('titleTxtBox')
let priorityTxtBox = document.getElementById('priorityTxtBox')
let dateCreatedTxtBox = document.getElementById('dateCreatedTxtBox')
let addToDoBtn = document.getElementById('addToDoBtn')
let getToDoBtn = document.getElementById('getToDoBtn')
let toDoUL = document.getElementById('toDoUL')

addToDoBtn.addEventListener('click', function () {
    let title = titleTxtBox.value
    let priority = priorityTxtBox.value
    let dateCreated = dateCreatedTxtBox.value

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            priority: priority,
            dateCreated: dateCreated
        })
    }).then(response => {
        return response.json()
    }).then(json => console.log(json))

})

getToDoBtn.addEventListener('click', function () {
    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }

    }).then(response => {
        return response.json()
    }).then((json) => {
        let displayList = json.map((item) => {
            return `<li class="toDoLI">
                        <p> ${item.title} --</p>
                        <p> ${item.priority} --</p>
                        <p> ${item.dateCreated} --</p>
                        <p> ${item.dateCompleted} --</p>
                        <p> ${item.isCompleted}</p>
                    </li>`
        })
        toDoUL.innerHTML = displayList.join('')
    })
})
