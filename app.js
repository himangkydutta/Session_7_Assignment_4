/*Here we are using function named outer function. Passing an inner function as 
  argument to outer function.Calling the inner function within outer function that should 
  display “Hello World From Inner Function” in console
*/

//Approach 1
function outerfunction(funcarg)
{
    return funcarg();

};

function innerfunction()
{
  console.log('Hello world from inner function');
};

outerfunction(innerfunction);

//Approach 2
function outfc(innerfunction)
{
  function innerfunction()
  {
    console.log('Hello world from inner function');
  };
  innerfunction(); 
}

outfc();