/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
С помощью унарного плюса (арифметический оператор)
необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.*/
const result = +prompt('Введите число', '')
if (typeof result !== 'number') {
    console.log('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
    console.log('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
    console.log('Число чётное')
} else {
    console.log('число нечётное')
}



