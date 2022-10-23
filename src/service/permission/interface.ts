
export interface IRole {
    nameTh:     string;
    name:       string;
    permission: Permission[];
}

export interface Permission {
    nameTh:   string;
    nameEn:   string;
    active:   boolean;
    isEdit:   boolean;
    subMenu?: Permission[];
}
