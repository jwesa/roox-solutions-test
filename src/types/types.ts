interface ICompany {
    name: string;
}

interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number | undefined;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: ICompany;
    address: IAddress;
    comment?: string;
    // to fix
    [key: string]: any;
}

export interface IValue {
    name: string;
    username: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    comment: string;
    [key: string]: string;
}
