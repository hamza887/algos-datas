const addup =(n)=>{
   let total=0;
   for(let i=0;i<=n;i++){
       total+=i;
   }
   return total;
}
var t1= performance.now();
addup(10000000);
var t2=performance.now();
console.log(`Time elapsed ${(t2-t1)/1000} seconds`);
