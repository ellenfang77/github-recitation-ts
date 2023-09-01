// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req : { params: { num: string } }, res) => {
  const { num } = req.params;

  const fibN : number = fibonacci(parseInt(num));
  let result : string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
