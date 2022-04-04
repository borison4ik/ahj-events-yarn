let RND = 0;

export default function random(SIZE) {
  let number = Math.floor(Math.random() * SIZE ** 2);
  if(number === RND) {
    do {
      number = Math.floor(Math.random() * SIZE ** 2);
    } while (number === RND);
  }
  RND = number;
  return number;
}
