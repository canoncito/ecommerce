/* 
* Este algoritmo se encarga de mostrar el menu y solicitar el producto que desea comprar
Si el usuario ingresa 3 productos o mas para comprar el envio es gratuito, de lo contrario
se le suma 799,99 por gastos en el envio.
*/

function freeShipping(cantProduct, priceProduct){
    if (cantProduct >= 3 ){ 
            let total = cantProduct * priceProduct;
                    /* Creo una alerta donde avisa que el envio es gratuito*/
                    alert('Por su compra tiene el envio gratuito a su domicilio');
                    alert('El precio del producto es de: ' + total);
                }
    else
    {
        let priceShipping = parseFloat(799.99);
        let total = parseFloat(priceShipping + (priceProduct * cantProduct));
        alert('Al valor del producto hay que sumarle un total por el envio de $799.99')
        alert('El valor total del producto es: ' + total)
    }
    return total;
}

 function showPrice(total){ //muestra el total del producto
     alert('El total que deberia abonar es de : '+ total);
 }

function showMenu(menu){ // muestra el menú
    let options = prompt('Seleccione el producto que desea comprar. (EXIT) para salir \n 1. Disco SSD 480 gb KINGSTONG - $4570,49\n 2. Monitor 144h gigabyte ga-27m - $55,680 \n 3. Mother msi 360m-ga 1151 - $25,950');
    return options;
}

function quotation(){ //cotizamos los productos
    let selectedOption = showMenu(); 
    while(selectedOption !== 'EXIT'){
        if(!isNaN(selectedOption !== '')){
            let cantProduct = parseInt(prompt('Ingrese la cantidad de producto'));
                if (cantProduct <= 0){
                    alert('No se puede vender el producto si la cantidad es menor a 1');
                }
                selectedOption = parseInt(selectedOption);
                 //Switch seleccionar la opción
                
                switch(selectedOption){
                    case 1: // producto 1
                        let priceProduct = parseFloat(4570.49);
                        let totalOne = freeShipping(cantProduct, priceProduct);
                        showPrice(totalOne);
                        break;
                    case 2: // producto 2
                        let priceProduct2 = parseFloat(55680);
                        let totalTwo = freeShipping(cantProduct, priceProduct2);
                        showPrice(totalTwo);
                        break;
                    case 2: // producto 3
                        let priceProduct3 = parseFloat(25950);
                        let totalThree = freeShipping(cantProduct, priceProduct3);
                        showPrice(totalThree);
                        break;
                        default:
                        alert('Opción no válida');
                        break;
                }
        }else{
            alert('Seleccione una opción válida');
        }
        selectedOption = showMenu();   
    }
}
/* Llamando a la función principal. */
quotation();