"use strict";
const salary = 15000;
const friendSalary = [12000, 4100, 2548, 25000];
const friend = ['sakib', 'rakib', 'nakib', 'akib'];
friendSalary[0] = 15000;
friendSalary.push(26000);
// friendSalary[0] = '15000';
// friendSalary.push('26000');
friend[0] = 'saakib';
friend.push('sakil');
// friend[0] = 450000;
// friend.push(1500)
let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}
