/**
 * Necesito un programa el cual indicandole el producto y la cantidad de cuotas (3, 6 o 12)
 * Me indique cual es el total del precio del producto con intereses y cuanto vale cada cuota
 */

 //le pide al usuario el nombre del producto, y devuelve el precio del mismo
 function obtenerPrecioProducto() {
    //precios de los productos
    let precioAireAcondicionadoSplit = 100000;
    let precioAireAcondicionadoPortatil = 90000;
    let precioVentilador = 20000;
  
    let producto = prompt("Ingrese el producto que desea comprar: (aire split, aire portatil, ventilador)");
    let precio;
  
    switch (producto) {
      case "aire split":
        precio = precioAireAcondicionadoSplit;
        break;
      case "aire portatil":
        precio = precioAireAcondicionadoPortatil;
        break;
      case "ventilador":
        precio = precioVentilador;
        break;
      default:
        precio = false;
        break;
    }
  
    return precio;
  }
  
  function obtenerCantidadCuotas() {
    let cuotas = Number(prompt("Ingrese en cuantas cuotas va a pagar el producto: (3, 6 o 12)"));
  
    if (!(cuotas === 3 || cuotas === 6 || cuotas === 12)) {
      cuotas  = false;
    }
  
    return cuotas;
  }
  
  function obtenerValorCuota(precio, cantidadCuotas) {
    //intereses de cuotas (la formula seria total = precio * interes)
    let interesTresCuotas = 1.3; //Interes del 30% en tres cuotas
    let interesSeisCuotas = 1.5; //Interes del 50% en seis cuotas
    let interesDoceCuotas = 1.9; //Interes de l 90% en doce cuotas
    let valorCuota;
  
    if (cantidadCuotas === 3) {
      valorCuota = precio * interesTresCuotas;
    }
    if (cantidadCuotas === 6) {
      valorCuota = precio * interesSeisCuotas;
    }
    if (cantidadCuotas === 12) {
      valorCuota = precio * interesDoceCuotas;
    }
  
    return valorCuota / cantidadCuotas;
  }
  
  //logica del "negocio"
  function calculoCuotasDeProductos() {
    let precio = obtenerPrecioProducto();
    let cantidadCuotas = obtenerCantidadCuotas();
    let valorCuota; //valor de cada cuota individual
  
    //validaciones
    if (precio === false) {
      alert("Ingrese un producto valido de los tres que se indican");
      calculoCuotasDeProductos();
      return;
    }
  
    if (cantidadCuotas === false) {
      alert("Ingrese un valor de cuotas valido (3, 6 o 12)");
      calculoCuotasDeProductos();
      return;
    }
  
    valorCuota = obtenerValorCuota(precio, cantidadCuotas);
  
    alert("para el producto seleccionado es un precio total de $" + precio + " en " + cantidadCuotas + " cuotas de $" + valorCuota);
  }
  
  calculoCuotasDeProductos();