//customer class holds all the customer detail to display it in final view 
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
    public emailId1 : string = '';
    public emailPriority1: string = '';
    public emailId2 : string = 'N/A';
    public emailPriority2: string = 'N/A';
    public phone1: number = 0;
    public phonePriority1: String = '';
    public phone2: number = null;
    public phonePriority2: String = 'N/A';
    public proofType: string = '';
    public proofNumber: string = '';
    public annualIncome: number = 0;
    public monthlyIncome: number = 0;
}

//class holds general form customer details
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
//class holds contact form customer details
export class CustomerContactInfo {
     public emailId1 : string;
     public emailPriority1: string;
     public emailId2 : string;
     public emailPriority2: string;
     public phone1: number;
     public phonePriority1: String;
     public phone2: number;
     public phonePriority2: String;
}
//class that holds identity form customer details
export class CustomerIdentityInfo {
     public proofType: string;
     public proofNumber: string;
}
//class that holds income form customer details
export class CustomerIncomeInfo {
     public annualIncome: number;
     public monthlyIncome: number;
}