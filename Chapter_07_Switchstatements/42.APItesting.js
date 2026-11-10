let responseCode=404;

switch(responseCode){

    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown Response Code");
}