export default class App {

    retirar(saldo, retiro) {
        let dinero;

        if(retiro <= saldo) {
            dinero = (saldo) - (retiro);
        } else if (retiro > saldo){
            dinero = -1;
        }

        return dinero;
    }

    totalVenta(costoProducto, numeroProductos) {
        let ventas 

        if (numeroProductos < 11) {
            ventas = (numeroProductos * costoProducto) - ((numeroProductos * costoProducto) * 0.05);
        } else if (numeroProductos > 11 && numeroProductos < 21) {
            ventas = (numeroProductos * costoProducto) - ((numeroProductos * costoProducto) * 0.10);
        } else if (numeroProductos > 21) {
            ventas = (numeroProductos * costoProducto) - ((numeroProductos * costoProducto) * 0.15);
        }

        return ventas;
    }

    costoBoletos(numeroAsiento, dia) {
        let boletos;

        switch (dia) {
            case (1):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50 - (50 * 0.10);
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60 - (60 * 0.10);
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70 - (70 * 0.10);
            } else {
                boletos = 80 - (80 * 0.10);
            }

            break;

            case (2):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70
            } else {
                boletos = 80
            }

            break;

            case (3):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50 - (50 * 0.10);
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60 - (60 * 0.10);
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70 - (70 * 0.10);
            } else {
                boletos = 80 - (80 * 0.10);
            }

            break;

            case (4):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70
            } else {
                boletos = 80
            }

            break;

            case (5):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70
            } else {
                boletos = 80
            }

            break;

            case (6):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70
            } else {
                boletos = 80
            }

            break;

            case (7):  
            if(numeroAsiento > 0 && numeroAsiento < 11) {
                boletos = 50
            } else if(numeroAsiento > 10 && numeroAsiento < 21) {
                boletos = 60
            } else if(numeroAsiento > 20 && numeroAsiento < 30) {
                boletos = 70
            } else {
                boletos = 80
            }

            break;
            default:
            boletos = -1
        }

        return boletos;
    }
}

let app = new App();

console.log('implemented retirar()');
console.log(app.retirar(500, 345));
console.log(app.retirar(500, 600));

console.log('implemented totalVenta()');
console.log(app.totalVenta(30, 9));
console.log(app.totalVenta(59, 16));
console.log(app.totalVenta(46, 5));

console.log('implemented costoBoletos()');
console.log(app.costoBoletos(25, 1));
console.log(app.costoBoletos(55, 2));
console.log(app.costoBoletos(7, 3));
console.log(app.costoBoletos(32, 4));
console.log(app.costoBoletos(78, 5));
console.log(app.costoBoletos(13, 6));
console.log(app.costoBoletos(3, 7));
console.log(app.costoBoletos(2, 8));
