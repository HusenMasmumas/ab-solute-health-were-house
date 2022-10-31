
export interface IPostUser {
    firstName:   string;
    lastName:    string;
    isActive:    boolean;
    username:    string;
    phone:       string;
    email:       string;
    address:     string;
    district:    string;
    province:    string;
    subDistrict: string;
    zipcode:     string;
    password?:    string;
    roleId:      number;
    imageId?:     number;
}
export interface IGetUsers {
    isActive:    boolean;
    id:          number;
    firstName:   string;
    lastName:    string;
    username:    string;
    phone:       string;
    email:       string;
    address:     string;
    district:    string;
    province:    string;
    subDistrict: string;
    zipcode:     string;
    roleId:      number;
    role:        Role;
    image:       null;
    fullName:    string;
}

export interface Role {
    id:   number;
    name: string;
}

