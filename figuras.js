// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// Pi
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Acá interactuamos con el HTML

// CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("El area del cuadrado es: " + area);
}

// TRIANGULO
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = Number(input1.value);

  const input2 = document.getElementById("inputTriangulo2");
  const value2 = Number(input2.value);

  const Base = document.getElementById("inputTrianguloBase");
  const valueBase = Number(Base.value);

  const perimetro = perimetroTriangulo(value1, value2, valueBase);
  alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTrianguloBase");
  const Base = inputBase.value;

  const inputAltura = document.getElementById("inputTrianguloAltura");
  const Altura = inputAltura.value;

  const area = areaTriangulo(Base, Altura);
  alert("El areal del triangulo es de: " + area);
}

// CIRCULO
function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert("El area del circulo es: " + area);
}
