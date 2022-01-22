function countdown() {
  const newYearsDate = new Date(2023, 00, 01);
  const currentDate = new Date();
  const seconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  console.log(days);
}

countdown();
