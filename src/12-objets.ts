(()=>{
 type Sizes = 'S' | 'M'| 'L'| 'XL';
 type Products = {
  title: string,
   createdAt?: Date,
   stock: number,
   size?: Sizes,
 }
  const products: Products[] = [];

  const addProduct =(data: Products) => {
   products.push(data);
  }


  addProduct({
   title: 'products1',
   createdAt: new Date(1993,1,1),
   stock: 1,
   size: 'S'
  })
  addProduct({
    title: 'products2',
    stock: 1,
  })
  addProduct({
    title: 'products3',
    createdAt: new Date(1999,1,1),
    stock: 1,
  })


  console.log(products);
 })();
