const e = prompt("Email");
const p = prompt("pass");

let ec = 0;
let pc = 0;

switch(e)
{
    case "stu@letsupgrade.com":
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
        alert(" you are logged in");
        break;
    case 0:
        alert("try again with correct email and password");
        break;
}
