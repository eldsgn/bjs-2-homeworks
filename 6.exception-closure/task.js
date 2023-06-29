function parseCount(number) {
    let parseFloatResult = Number.parseFloat(number);
    if(Number.isNaN(parseFloatResult)) {
        throw new Error('Невалидное значение');
    }
    return parseFloatResult;
}

function validateCount(number) {
    try {
        return parseCount(number);
    }
    catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if(a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        else if(a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let halfMeter = this.perimeter / 2;
        let num =  Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c));
        return +num.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}