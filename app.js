// TASK 1
const convertFahrToCelsius = (fahrenheit)=>{
    if(typeof fahrenheit === 'number'){
        const celcius = (fahrenheit - 32) / 1.8;
        return `${celcius.toFixed(4)}`;
    }
    else if(Array.isArray(fahrenheit)){
        return `${JSON.stringify(fahrenheit)} is not a valid number but a/an array`
    }
    else{
        return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${typeof fahrenheit}`
    }
}


// TASK 2
const stringifyFactor = (factor)=>{
    if(factor===2){
        return 'yu';
    }
    else if(factor===3){
        return 'gi';
    }
    else{
        return 'oh';
    }
}

const stringifyFactors = (number)=>{
    const factors = [2,3,5];
    let hasFactorOf2or3or5 = false;
    let convertedString = "";
    factors.forEach((factor)=>{
         if(number%factor === 0 && convertedString ===""){
            hasFactorOf2or3or5 = true;
            convertedString = convertedString.concat(stringifyFactor(factor));
         }
         else if(number%factor === 0){
            hasFactorOf2or3or5 = true;
            convertedString = convertedString.concat('-',stringifyFactor(factor));
         }
    })
    return hasFactorOf2or3or5 ? convertedString:number;
}

const checkYuGiOh = (n)=>{
    if(typeof n !== 'number'){
        console.log(`invalid parameter: ${JSON.stringify(n)}`);
        return;
    }
    let yuGiOh = []; 
    for(let i=1;i<=n;i++){
        yuGiOh.push(stringifyFactors(i));
    }
    console.log(yuGiOh);
}

