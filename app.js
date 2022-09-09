const yargs = require("yargs");
const allFunc = require('./allFunc')
// add
yargs.command({
    command: 'add',
    builder: {
        id: {
            describ: "this is title student id",
            type: 'number',
            demanOption: true,
        },
        name: {
            describ: "this is student name",
            type: 'string',
            demanOption: true,
        },
        degree: {
            describ: "this is student name",
            type: 'array',
            demanOption: true,
        },

    },
    handler: () => {
        allFunc.addFunc(yargs.argv.id, yargs.argv.name, yargs.argv.degree)
    }
})
yargs.command({
    command: 'delete',
    builder: {
        id: {
            describ: "this is title student id",
            type: 'number',
            demanOption: true,
        }
    },
    handler: () => allFunc.deleteFunc(yargs.argv.id)
})
yargs.command({
    command: 'read',
    builder: {
        id: {
            describ: "this is title student id",
            type: 'number',
            demanOption: true,
        }
    },
    handler: () => allFunc.readFunc(yargs.argv.id)
})
yargs.command({
    command: 'list',
    handler: () => allFunc.listFunc(yargs.argv.id)
})
yargs.command({
    command: 'uppdate',
    builder: {
        name: {
            describ: "this is title student id",
            type: 'string',
            demanOption: true,
        }
    },
    handler: () => allFunc.uppdateFunc(yargs.argv.name)
})
yargs.parse()