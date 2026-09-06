// Question no-1

function describeValue(value){
     
     if(value)
        return console.log(`"${typeof(value)} | truthy"`);
    else
        return console.log(`"${typeof(value)} | falsy"`);


}

describeValue(undefined)