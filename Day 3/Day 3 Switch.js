const e = prompt("Email");
const p = prompt("pass");

let ec = 0;
let pc = 0;

switch(e)
{
    case "abc@gmail.com":
        ec = 1;
        break;
}

switch(p)
{
    case "12345":
        pc = 1;
        break;
}

let res = ec * pc;

switch(res)
{
    case 1:
        alert("Hurray! You are logged in");
        break;
    case 0:
        alert("Try Again");
        break;
}