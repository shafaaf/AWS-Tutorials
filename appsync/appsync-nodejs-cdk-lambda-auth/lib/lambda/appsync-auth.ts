exports.handler = async(event: { authorizationToken: any }) => {
    console.log(`The Event From this handler =>> ${JSON.stringify(event)}`)
    const response = {
        isAuthorized: true
    };
    return response;
}
