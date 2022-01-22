function countdown() {
  const newYearsDate = new Date(2023, 00, 01);
  console.log(newYearsDate);
  const currentDate = new Date();
  console.log(currentDate);
  const seconds = (newYearsDate.getTime() - currentDate.getTime()) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  console.log(days);
}

countdown();
