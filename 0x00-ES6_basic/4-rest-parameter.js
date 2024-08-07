export default function returnHowManyArguments(...args) {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
}
