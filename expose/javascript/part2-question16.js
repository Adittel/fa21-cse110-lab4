let statistics =
{redCars: 21,
blueCars: 45,

greenCars: 12,
raceCars: 5,
blackCars: 40,
rareCars: 2}
var a=Object.keys(statistics);
var b=0;
for (const property in statistics) {
    if(a[b].charAt(0)=='r'){
       console.log(`${property}: ${statistics[property]}`);
        
    } else if(statistics[property]%2==1){
        console.log(`${property}: ${statistics[property]}`);
        
    }else{
            let x = 0;
        }
        b+=1;

    
}