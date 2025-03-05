// code your solution here
// Define saturdayFun as a function declaration.
// It returns a string using the default activity 'roller-skate' when no argument is provided.
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Define mondayWork as a function expression.
// It returns a string using the default activity 'go to the office' when no argument is provided.
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Define wrapAdjective as a higher-order function.
// It takes one parameter (wrapper) and returns a function that takes an adjective
// and wraps it using the wrapper provided.
function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Exporting the functions if needed for testing or external use
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
};
