type IColor = 'yellow' | 'red'

export interface ISlot {
  color: IColor,
  price: number,
  qty: number
} 
export interface IStoreCabinet {
  id: number;
  name: string;
  sku: string;
  subSku: string;
  category: string;
  subCategory: string;
  priceCost: number;
  priceNormal: number;
  status: boolean;
}
