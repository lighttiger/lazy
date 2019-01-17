export class Address {
    public address_line_1: string = "";
    public address_line_2: string = "";
    public city: string = "";
    public zipcode: string = "";
    public state: string = "";
    public phone: string = "";
    public note: string = "";

    constructor() {
    }
}

export class UserAddress {
    public firstName: string = "";
    public lastName: string = "";
    
    public addressLine1: string = "";
    public addressLine2: string = "";
    public state: number = 0;
    public city: number = 0;
    public zipCode: string = "";
    public phoneNumber: string = "";
    public note: string = "";
    constructor() {
    }
}


export class StateCityAddress {
    state: number;
    city: number;
}