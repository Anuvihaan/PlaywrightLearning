let responseTime=200;
let sla=1000;
let slastatus =responseTime<=sla?"within SLA":"SLA breached";
console.log(`Response: ${responseTime}ms - ${slastatus}`);
//template literal is used to print the response time and SLA status in a formatted manner.
'${sla}'