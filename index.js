//receivesAFunction(callback)
const receivesAFunction = (callback) => callback();

//returnsANamedFunction()
const returnsANamedFunction = () => {
  return (callback = () => console.log("It works!"));
};

//returnsAnAnonymousFunction()
const returnsAnAnonymousFunction = () => () => console.log("It works!");
