for (let i = 10; i <= 1000; i++) {
  i = String(i);
  console.log(i[0]);
}


for (let i = 10; i <= 1000; i++) {
  i = String(i);
  console.log(Number(i[0]) + Number(i[1]));
}


for (let i = 10; i <= 1000; i++) {
  i = String(i);
  if (i[0] === '1') {
      console.log(i);
  }
}


for (let i = 10; i <= 1000; i++) {
  i = String(i);
  if ((Number(i[0]) + Number(i[1]) === 5)) {
      console.log(i);
  }
}