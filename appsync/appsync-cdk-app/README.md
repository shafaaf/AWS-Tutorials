# CDK AppSync project

Done from: https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/

## Common commands

aws configure
npm run build && cdk diff

The diff command compares the current version of a stack defined in your app with the already-deployed version and displays a list of differences.


Build and deploy the API to see it in the AppSync console. To do so, run the following command from your terminal:
npm run build && cdk deploy




### Common queries / mutations

mutation createNote {
createNote(note: {
id: "001"
name: "My note"
completed: false
}) {
id
name
completed
}
}

query getNoteById {
getNoteById(noteId: "001") {
id
name
completed
}
}

query listNotes {
listNotes {
id
name
completed
}
}

mutation updateNote {
updateNote(note: {
id: "001"
completed: true
}) {
id
completed
}
}


mutation deleteNote {
deleteNote(noteId: "001")
}

subscription onCreate {
onCreateNote {
id
name
completed
}
}
