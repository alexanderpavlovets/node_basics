const randomGaussian = (mean, deviation, min) => {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num * deviation + mean;
  if (num < min) return randomGaussian(mean, deviation, min);
  return Math.floor(num);
};
const randomInt = (min, max) => Math.floor((Math.random() * (max + 1 - min) + min));