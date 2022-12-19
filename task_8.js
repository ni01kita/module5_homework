/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения
в виде «Ключ — Х, значение — Y».*/

let map = new Map();
map.set("1", "string");

map.set(1, "number");

map.set(true, "boolean");
for (let key of map.keys()) {
    for (let key of map.values())
        console.log('Ключ - ' + key + ', Значение - ' + name)
}