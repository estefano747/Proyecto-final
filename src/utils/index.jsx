export const ApiWebURL = "https://servicios.campus.pe/"

export const agregarCarrito = (item, cantidadProducto) => {
    item.cantidad = Number(cantidadProducto);
    item.precio = item.preciorebajado === "0" ? item.precio : item.preciorebajado;

    let carrito = [];
    if (sessionStorage.getItem("carritocompras")) {
        carrito = JSON.parse(sessionStorage.getItem("carritocompras"));

        const index = carrito.findIndex((producto) => producto.idproducto === item.idproducto);
        if (index === -1) {
            carrito.push(item);
        } else {
            carrito[index].cantidad += item.cantidad;
        }
    } else {
        carrito.push(item);
    }

    sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
};
