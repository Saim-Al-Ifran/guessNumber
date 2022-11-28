const isLeapyear = (year)=>{
       
    let reminder = year % 4;
    if(reminder == 0){

    console.log(`${year} is a leap year`);

    }else{
    console.log(`${year} is not a leap year`)
    }

}
isLeapyear(4546);