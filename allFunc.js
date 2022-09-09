const fs = require('fs')
const yargs = require('yargs')
let loadData = () => {
    try {
        let data = fs.readFileSync('data.json').toString()
        return JSON.parse(data)
    }
    catch (e) {
        return []
    }
}
let saveData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data))
}
let addFunc = (id, name, degree) => {
    let newData = loadData()
    let dublicate = newData.filter((obj) => {
        return obj.id === id, obj.name === name
    })
    let total = 0
    degree.forEach((element) => {
        total += element
    });
    if (dublicate.length == 0) {
        newData.push({
            id,
            name,
            degree,
            total,
        })
        saveData(newData)
        console.log(newData)
    }
    else {
        console.log(' name or id is already exist')

    }
}
let deleteFunc = (id) => {
    let data = loadData()
    deleteId = data.find((el) => el.id === id)
    let idx = data.indexOf(deleteId)
    if (deleteId) {
        data.splice(idx, 1)
        saveData(data)
        return console.log(data)
    }
    console.log("the id is not found")
}
let readFunc = (id) => {
    let data = loadData()
    let readId = data.find((el) => el.id === id)
    if (readId) {
        return console.log(readId)
    }
    else if (!readId) {
        console.log("the id is not found")
        let chose = console.log('do you want add id ? ')
        if (chose == 'yes') {
            return addFunc()
        }
        console.log('ok')
    }

}
let listFunc = () => {
    let data = loadData()
    data.forEach((el) => console.log(el))
}
let uppdateFunc = (name) => {
    let data = loadData()
    uppdaName = data.find((el) => el.name === name)
    let idx = data.indexOf(uppdaName)
    if (uppdaName) {
        data[idx].name = yargs.argv._[1]
        saveData(data)
        return console.log(data)
    }
    console.log('the name is not found')
}
module.exports = {
    addFunc,
    deleteFunc,
    readFunc,
    listFunc,
    uppdateFunc
}