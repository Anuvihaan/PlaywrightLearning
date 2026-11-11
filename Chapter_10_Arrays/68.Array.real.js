let browser=["chrome","firefox","safari","opera","edge"];

browser.pop();
console.log(browser);

browser.shift();
console.log(browser);

for(let i=0;i<browser.length;i++)
{
    console.log(browser[i]);
    if(browser[i]==="opera")
    {
        console.log("opera does not support automation");
    }
}
