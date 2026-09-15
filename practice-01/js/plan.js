"use strict";

const totalTasks = 5;
const completedTasks = 2;
const dailyLimit = 1001;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: вместо числа передана строка или значение другого типа");
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач не может быть дробным");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: количество задач не может быть отрицательным");
} else if (totalTasks > 1000) {
  console.log("Ошибка: превышена верхняя граница (не больше 1000 задач)");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше, чем существует");

} else if (typeof dailyLimit !== "number") {
  console.log("Ошибка: дневная норма должна быть числом, а не строкой");
} else if (!Number.isFinite(dailyLimit)) {
  console.log("Ошибка: недопустимое значение дневной нормы");
} else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дневная норма не может быть дробной");
} else if (dailyLimit < 1) {
  console.log("Ошибка: дневная норма должна быть не меньше 1");
} else if (dailyLimit > 1000) {
  console.log("Ошибка: превышена верхняя граница дневной нормы (не больше 1000)");

} else {
  let remainingTasks = totalTasks - completedTasks;
  let day = 0;

  console.log(`Осталось задач: ${remainingTasks}`);

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
  }

  while (remainingTasks > 0) {
    day += 1;
    const tasksToday = Math.min(dailyLimit, remainingTasks);
    remainingTasks -= tasksToday;
    console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
  }

  console.log(`Потребуется дней: ${day}`);
}