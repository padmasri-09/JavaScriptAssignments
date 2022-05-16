let n1 = 1, n2 = 1, n3;

console.log('Fibonacci Series:');

for (let i = 1; i <= 100; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}