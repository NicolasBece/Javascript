function suma(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))
    const segundodigito = parseInt(prompt('Escriba el segundo digito'))

    let sumas = (primerdigito + segundodigito)

    alert('La suma de ambos digitos es de ' + sumas)

}

function opMatematicas(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))
    const segundodigito = parseInt(prompt('Escriba el segundo digito'))

    let sumas = (primerdigito + segundodigito)
    let resta = (primerdigito - segundodigito)
    let multiplicacion = (primerdigito * segundodigito)
    let division = (primerdigito / segundodigito)
    alert('La suma de los digitos es de ' + sumas + ' la resta de los digitos es de ' + resta + ' la multiplicacion de los digitos es de ' + multiplicacion + ' la division de los digitos es de ' + division)
}

function cuadrado(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))

    let cuadrado = (primerdigito * primerdigito)

    alert('el cuadrado del numero es de ' + cuadrado)
}

function area(){
    const base = parseInt(prompt('Escriba la base del triangulo'))
    const altura = parseInt(prompt('Escriba la altura del triangulo'))

    let area = ((base * altura) / 2)

    alert('el area del triangulo es de ' + area)
}

function conversion(){
    const metro = parseInt(prompt('Escriba una unidad en metros'))

    let decimentros = ( metro * 10) 
    let centimentros = ( decimentros * 10)
    let milimetros = ( centimentros * 10 )
    
    alert('los decimetros son ' + decimentros + ' los centrimetros son ' + centimentros + ' los milimetros son ' + milimetros)
}

function mayorq(){
    const pnumero = parseInt(prompt('Escriba el primer digito'))
    const snumero = parseInt(prompt('Escriba el segundo numero'))

    if (pnumero === snumero) {
        alert('Ambos números son iguales')
    } else if (pnumero > snumero) {
        alert('El número mayor es ' + pnumero)
    } else {
        alert('El número mayor es ' + snumero)
    }
}

function menorq(){
    const pnumero = parseInt(prompt('Escriba el primer digito'));
    const snumero = parseInt(prompt('Escriba el segundo numero'));
    const tnumero = parseInt(prompt('Escriba el tercer digito'));


    if (pnumero === snumero && snumero === tnumero) {
        alert('Todos los números son iguales');
    } else if (pnumero <= snumero && pnumero <= tnumero) {
        alert('El número menor es ' + pnumero);
    } else if (snumero <= pnumero && snumero <= tnumero) {
        alert('El número menor es ' + snumero);
    } else {
        alert('El número menor es ' + tnumero);
    }
}

function promedio(){
    const nombre = prompt('escriba su nombre y apellido')
    const nota1 = parseInt(prompt('Escriba la primera nota'))
    const nota2 = parseInt(prompt('Escriba la segunda nota'))
    const nota3 = parseInt(prompt('Escriba la tercera nota'))
    const nota4 = parseInt(prompt('Escriba la cuarta nota'))
    const nota5 = parseInt(prompt('Escriba la quinta nota'))

    let promedio = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5)

    if(promedio === 5){
        alert(nombre + ' su nota promedio es de ' + promedio + ' calificacion perfecta')
    }
    else if (promedio >= 3.5){
        alert(nombre + ' su nota promedio es de ' + promedio + ' calificacion buena ')
    }
    else if (promedio >= 2){
        alert(nombre + ' su nota promedio es de ' + promedio + ' calificacion mala ')
    }   
    else{
        alert(nombre + ' su nota promedio es de ' + promedio + ' calificaion pesima')
    }
}

function parimpar(){
    const pnumero = parseInt(prompt('Escriba el numero'))

    if(pnumero % 2 === 0){
        alert('El numero ' + pnumero + ' es par')
    }

    else{
        alert('El numero ' + pnumero + ' es impar')
    }
}

function inversion(){
    const inversion = parseInt(prompt('Escriba el total a invertir'))

    let ganancia = (inversion*0.08)
    let total = (ganancia + (inversion))


    alert ('El total de la inversion es de ' + total + ' su ganancia es de ' + ganancia)
}

function rango(){
    let minimo = Infinity;
    let maximo = -Infinity;
    
    let cantidad = parseInt(prompt('¿Cuántos números vas a ingresar?'));
    
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt('Escribe el número ' + (i + 1)));
        
        if (numero < minimo) {
            minimo = numero;
        }
        if (numero > maximo) {
            maximo = numero;
        }
    }
    
    // Mostrar los resultados
    alert('El número mínimo es ' + minimo);
    alert('El número máximo es ' + maximo);
}

function factorial() {
    const numero = parseInt(prompt('Escriba un número para calcular su factorial'));

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }


    alert('El factorial de ' + numero + ' es ' + factorial);
}

function precio(){
    const precioOriginal = parseFloat(prompt("Inserta el precio original del producto:"));
    const descuento = parseFloat(prompt("Inserta el porcentaje de descuento a aplicar:"));

    let cantDescuento = (precioOriginal * descuento) / 100;
    let precioFinal = precioOriginal - cantDescuento;

    alert("El precio final del producto después de aplicar un descuento del " + descuento + "% es: " + precioFinal + " pesos");
    return precioFinal.toFixed(2);
}