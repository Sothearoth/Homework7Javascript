function checkValidation(obj, errorID) {
    let errorObj = document.getElementById(errorID);
    if (obj.value === '') {
        errorObj.className = 'error';
    } else {
        errorObj.className = 'error d-none'
    }

}


class calculator {
    constructor(val1, val2) {
        this._val1 = val1;
        this._val2 = val2;
    }

    sum() {
        return this._val1 + this._val2;
    }
    minus() {
        return this._val1 - this._val2;
    }
    mul() {
        return this._val1 * this._val2;
    }
    divide() {
        return this._val1 / this._val2;
    }
    modulo() {
        return this._val1 % this._val2;
    }

    calculate(sign) {
        let result = ''
        switch (sign) {
            case '+':
                result = this.sum();
                break;
            case '-':
                result = this.minus();
                break;
            case '*':
                result = this.mul();
                break;
            case '/':
                result = this.divide();
                break;
            case '%':
                result = this.modulo();
                break;
        }
        return result;

    }
    display(value, element) {
        document.getElementById(element).value = value;
    }

}

function calculate(sign) {
    const val1 = parseFloat(document.getElementById('inputVal1').value);
    const val2 = parseFloat(document.getElementById('inputVal2').value);
    let calObj = new calculator(val1, val2);
    const result = calObj.calculate(sign);
    calObj.display(result, 'inputResult');
}