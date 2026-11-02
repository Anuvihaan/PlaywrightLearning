let environment="staging";
let baseUrl=environment==="Prod"
?"https://api.example.com"
:"https://staging-api.example.com";
console.log(baseUrl);