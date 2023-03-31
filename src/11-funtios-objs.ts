(()=>{
 const login = (data: {email: string, password: number}) => {
  console.log(data.email, data.password);
 }


 login({
  email: 'test@example.com',
  password: 12937192
 })

type Sizes = 'S' | 'M'| 'L'| 'XL';

 const products: any[] = [];

 const addProduct =(data:{
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
 }) => {
  products.push(data);
 }


 addProduct({
  title: 'products1',
  createdAt: new Date(1993,1,1),
  stock: 1,
  size: 'S'
 })


 console.log(products);
})();
