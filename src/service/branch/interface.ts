export interface IPostBranch {
    firstName	:	string
    lastName	:	string
    name	    :	string
    phone	    :	string
    address	    :	string
    district	:	string
    province	:	string
    subDistrict	:	string
    zipcode	    :	string
    imageId?    :	number    
}


export interface IListBranch {
    id:          number;
    name:        string;
    phone:       string;
    address:     string;
    district:    string;
    province:    string;
    subDistrict: string;
    zipcode:     string;
    imageId:     null;
}