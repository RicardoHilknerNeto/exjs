const salarios = [1500, 2200, 1800, 2500, 1900, 3000, 2100, 1700, 2800, 2400];

const salariosComAumento = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15% para salários até 2000
  } else {
    return salario * 1.10; // Aumento de 10% para salários acima de 2000
  }
});

const salariosSuperiores2500 = salariosComAumento.filter(salario => salario > 2500);

const somaSalariosSuperiores2500 = salariosSuperiores2500.reduce((total, salario) => total + salario, 0);

console.log("Salários originais:", salarios);
console.log("Salários com aumento:", salariosComAumento);
console.log("Salários superiores a 2500:", salariosSuperiores2500);
console.log("Soma dos salários superiores a 2500:", somaSalariosSuperiores2500);
