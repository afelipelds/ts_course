class Payment {
    private bin: number;
    private cvc: number;
    private year: number;

    constructor( bin: number, cvc: number, year: number ) {
        this.bin = bin;
        this.cvc = cvc;
        this.year = year
    }
        
    private validateBin () {
        return true
    }

    private validateCVC () {
        return true
    }

    private validateYear () {
        return true
    }

    makePayment() {
        if (this.validateBin() && this.validateCVC() && this.validateYear() )
        {
            return 'Pago exitoso'
        }
        else {
            return 'no se pudo :/'
        }
    }

}

let pay = new Payment(123456789012345, 345, 2028)
console.log(pay.makePayment())


