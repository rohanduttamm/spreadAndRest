// function max (){
//   console.log(arguments);
// }

function sum (){
  arguments.reduce((sum, val) =>{
    return sum + val
  });
}

//args cant work with arrow YETT
// const max = ()=>{
//   console.log(arguments)
// };

const max = function(){
  const args = Array.from(arguments);
  return args.reduce((max, val) => {
    return val > max ? val : max;
  })
}

//rest operator

// when there is a function and the "..." in the parenthesis and followed by words is rest operator
// function doSomething(...aidhhd)

function sum(...nums){
  return nums.reduce((sum, n) => sum + n)
}

const sumAll = (...vals) => {
  if (!vals.length) return undefined;
  return vals.reduce((sum,n) => sum + n);
};

function makeFamily(parent1, parent2, ...children){
  return {
    //have it set to an array
    parents: [parent1, parent2],
    kids: children.length ? children : 0
  };
}

const filterByType = (type, ...vals) =>{
  return vals.filter((v) => typeof v === type);
};

//spread operator

const things = ['string', 2,5, 'FOOD', true, 54, false, 69, 'fairy-tooth',10,22,88,'mom','banana', 'vegetables', true, true, false, true, false, false];

//lets you spread out the array ito single args
filterByType('string', ...things);

const pallete = ['fruity orange', 'mango green', 'sky blue'];

const palleteCopy = [...pallete, 'midnight purple']

//spread Object

const tea = {
  type : 'oolang',
  name : 'winter sprout',
  origin : 'taiwan'
};

const teaData = {
  steepTime : '30s',
  brewTime : 175,
  origin : 'japan'
};

//const tea2 = {...tea};

const teaTin = {...tea, price : 25};

//if you switch the order up for object then it updates the litteral
const newTea = {...tea, name : 'golden frost'}

const allTea = {...tea, ...teaData, origin : 'china'};
