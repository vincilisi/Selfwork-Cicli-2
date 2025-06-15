let accumulator = 0;
let counter = 0 ;

for ( let i = 1; i<=20; i++){
    if(i % 2 ==0){
        console.log(i);
    }
    else{
        accumulator = accumulator+i
        counter++
    }
}
console.log(`la media dei numeri dispari e' ${accumulator / counter}`);