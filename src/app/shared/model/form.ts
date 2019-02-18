export class Customer {
    public customerId : number = 0;
    public firstName : string = '';
    public lastName : string = '' ;
    public dob: Date = null;
    public age : number = 0;
    public address : string = '';
    public city : string = '';
    public state : string = '';
    public country : string = '';
    public zipcode : number = 0;
    public emailId : string = '';
    public emailPriority: string = '';
    public phone: number = 0;
    public phonePriority: String = '';
    public proofType: string = '';
    public proofNumber: string = '';
    public annualIncome: number = 0;
    public monthlyIncome: number = 0;
}
export class CustomerGeneralInfo {
     public firstName : string;
     public lastName : string;
     public dob : Date;
     public age : number;
     public address : string;
     public city : string;
     public state : string;
     public country: string;
     public zipcode: number;
}

export class CustomerContactInfo {
     public emailId : string;
     public emailPriority: string;
     public phone: number;
     public phonePriority: String;
}

export class CustomerIdentityInfo {
     public proofType: string;
     public proofNumber: string;
}

export class CustomerIncomeInfo {
     public annualIncome: number;
     public monthlyIncome: number;
}