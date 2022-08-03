// Code your solutions in this file

function writeCards(names,eventType)
{
    const messages=[];
    for (let i = 0; i < names.length; i++)
    {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${eventType} gift!`
    }
    return messages;
}


function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}