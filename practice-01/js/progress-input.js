"use strict";

const totalInput = "1e2";
const completedInput = " 0  ";

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
  console.log("Ошибка: значение не передано или не является строкой");

} else if (totalInput.trim() === "" || completedInput.trim() === "") {
  console.log("Ошибка: пустой ввод");

} else {
  const totalTasks = Number(totalInput.trim());
  const completedTasks = Number(completedInput.trim());

  if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
    console.log("Ошибка: введено не число или недопустимое значение");
  } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: количество задач не может быть дробным");
  } else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: количество задач не может быть отрицательным");
  } else if (totalTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница (не больше 1000 задач)");
  } else if (completedTasks > totalTasks) {
    console.log("Ошибка: выполнено больше, чем существует");
  } else if (totalTasks === 0) {
    console.log("Задач пока нет");
  } else {
    const remainingTasks = totalTasks - completedTasks;
    const percentage = (completedTasks / totalTasks) * 100;

    let status;
    if (completedTasks === 0) {
      status = "Не начато";
    } else if (completedTasks === totalTasks) {
      status = "Завершено";
    } else {
      status = "В работе";
    }

    console.log(`Всего задач: ${totalTasks}`);
    console.log(`Выполнено: ${completedTasks}`);
    console.log(`Осталось: ${remainingTasks}`);
    console.log(`Прогресс: ${percentage.toFixed(1)}%`);
    console.log(`Статус: ${status}`);
  }
}