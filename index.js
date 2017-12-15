const arr = [];
let tails=0;
function printBadges(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;

};
function maybeTrue() {
  return Math.random() >= 0.9;
};
function tailsNeverFails(){
  tails=0;
    do
    {
      tails=tails+1;
    }while(maybeTrue());
    return (`You got ${tails} tails in a row!`);
};
