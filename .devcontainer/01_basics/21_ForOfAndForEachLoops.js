//const coding=["js","ruby","java","python","cpp"]

//const values=coding.forEach( (item) =>{
//     console.log(item)
//     return item;
// })
// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num) => num>=4)

// const newNums=myNums.filter((num) => {
//     return num>4;
// })

const newNums=[]

myNums.forEach((num) =>{
    if(num>=4){
        newNums.push(num);
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks=books.filter((bk) => bk.genre==='History')
//   console.log(userBooks);

  const userBooks=books.filter((bk)=> {return bk.publish>=1990 &&  bk.genre==='History'})
  console.log(userBooks);


  const myNumbers=[1,2,3,4,5,6,7,8,9,10]

  //const newNums1=myNumbers.map( (num) => num*10)

  const newNums1=myNumbers
  .map((num) =>num*10)
  .map((num)=>num+1)
  .filter((num)=> num>=40)
  console.log(newNums1)
  

  //Reduced Methods
  const ourNums=[1,2,3]

//   const myTotal=ourNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
//   },0)


//know we write Arrow Function
const myTotal=myNums.reduce((acc,currval)=> acc+currval,0)
  console.log(myTotal);


  const shoppingCard=[
    {
        itemName:"JS course",
        Price:999
        
    },
    {
        itemName:"Java course",
        Price:2999

    },
    {
        itemName:"Mobile dev course",
        Price:1999

    },
    {
        itemName:"data science course",
        Price:12999
    }
  ]

  const priceToPay=shoppingCard.reduce((acc,item)=>acc+item.Price,0);
  console.log(priceToPay);



  