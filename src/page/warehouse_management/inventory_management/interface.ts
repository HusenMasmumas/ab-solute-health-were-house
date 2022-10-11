type IColor = 'yellow' | 'red'

export interface ISlot {
  color: IColor,
  price: number,
  qty: number
} 
export interface IStoreCabinet {
  key: number;
  name: string;
  sku: string;
  category: string;
  lot: string;
  price: number;
  dueDate: string;
  qty: number;
  status: string;
  slots: ISlot[]
}
