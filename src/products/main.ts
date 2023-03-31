import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'products1',
  createdAt: new Date(1993,1,1),
  stock: 6,
  size: 'S'
 })
 addProduct({
   title: 'products2',
   stock: 12,
 })
 addProduct({
   title: 'products3',
   createdAt: new Date(1999,1,1),
   stock: 5,
 })
 const total = calcStock();
 console.log(total)

