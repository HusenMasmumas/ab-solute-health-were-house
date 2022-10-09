export interface IStockTable {
    key: React.Key;
    date: string;
    code: string;
    sku: string;
    costPrice: number;
    nameProduct: string;
    retailPrice: number;
    amount: number;
    state: string;
}