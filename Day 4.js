function table(num)
{
    for(let i = 1; i<=10; i++)
    {
        console.log(num,"*",i,"=",num*i);
    }
}

let n = prompt("Enter a Number");
table(n);
