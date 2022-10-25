export interface IGlobal<T> {
    code:   number;
    status: string;
    result: T;
}

export interface ITotal<T> {
    data:      T;
    count:     number;
    total:     number;
    page:      number;
    pageCount: number;
}
