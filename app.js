// TASK 1
const convertFahrToCelsius = (fahrenheit)=>{
    let fahr = Number(fahrenheit);
    let celcius;
    
    if(!isNaN(fahr) && typeof fahrenheit !=="boolean"){
        celcius = ((fahr - 32) / 1.8).toFixed(4);
    }
    else if(Array.isArray(fahrenheit)){
        celcius = `${JSON.stringify(fahrenheit)} is not a valid number but a/an array`
    }
    else{
        celcius = `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${typeof fahrenheit}`
    }
    console.log(celcius)
    return celcius;  
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
    let yuGiOh = [];
    const count = Number(n); 

    if(!isNaN(count) && typeof n !=="boolean"){
        for(let i=1;i<=count;i++){
            yuGiOh.push(stringifyFactors(i));
        }
    }
    else{
        yuGiOh = `invalid parameter: ${JSON.stringify(n)}`;
    }
    console.log(yuGiOh);
    return yuGiOh;
}
checkYuGiOh(true);