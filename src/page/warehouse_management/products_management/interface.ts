export interface subSKU {
    id:number,
    name:string,
    amount:number
} 
export interface ProductsType {
    key: number;
    name: string;
    sku: string;
    subSku: subSKU[],
    category: string;
    subCategory: string;
    priceNormal: number;
    priceCost: number;
    status: string;
}