# creating GraphQL CRUD API Endpoint help of AWS AppSync with Lambda Authorizer usign AWS CDK Version 2

Tutorial: https://aws.plainenglish.io/how-to-create-aws-appsync-with-lambda-authorizer-using-aws-cdk-v2-with-nested-stack-66c69f609f84
Code: https://github.com/subbusainath/appsync-nodejs-cdk-lambda-auth

Examples:
query MyQuery {
listNotes {
id
name
completed
}
}

mutation MyMutation {
createNote(note: {completed: true, id: "13", name: "Its a tiger"}) {
id
}
}

query MyQuery2 {
getNoteById(noteId: "13") {
id
name
completed
}
}
