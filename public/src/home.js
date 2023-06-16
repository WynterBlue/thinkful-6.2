function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((counter, bookObj) => {
    if(bookObj.borrows[0].returned === false){
      counter++ 
    }
    return counter
  }, 0)
}
function listMaker(bookArray){
  let listedObjects = bookArray.reduce((genreList, bookObj) => {
 const {genre} = bookObj
 if (genreList[genre] === undefined) {
   genreList[genre] = 1
   return genreList
 }
 else {
   genreList[genre] += 1
   return genreList
 }
}, {})
return listedObjects
}
function getMostCommonGenres(books) {
//   //returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
//reduce method
//return genres with a count
let genreLookup = listMaker(books)
let result = []
for (let objectKey in genreLookup) {
  let newObj = {name: objectKey, count: genreLookup[objectKey]}
  result.push(newObj)
}
result.sort((a, b) => b.count - a.count)
return result.slice(0,5)


//   //first i need all the genres
// let allGenres = []
// const genreGet = books.forEach((bookObj) => {
//   if (!allGenres.includes(bookObj.genre)){
//     allGenres.push(bookObj.genre)
//   }
// })

// //count how many times each genre shows up in the books array
// const genreCounter = allGenres.forEach((genreObj) => {
//   books.reduce((accumulator, bookObj) => {


//   }, {})
// })
//rob method
// const genreLookup = {}
// books.forEach((bookObj) =>{
//   const {genre} = bookObj
//   if (genreLookup[genre] === undefined) {
//     genreLookup[genre] = 1
//   }
//   else {
//     genreLookup[genre] += 1
//   }
// })
}

function getMostPopularBooks(books) {
    //returns an array containing five objects or fewer that represents the most popular books in the library. 
  /*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
let borrowLookup = books.reduce((bookList, bookObj) => {
  const {title, borrows} = bookObj
  if (bookList[title] === undefined) {
    bookList[title] = borrows.length
    return bookList
  }
  else {
    bookList[title] += borrows.length
    return bookList
  }
 }, {})

 let result = []
 for (let bookObj in borrowLookup) {
  let newObj = {name: bookObj, count: borrowLookup[bookObj]}
  result.push(newObj)
 }

 result.sort((a,b) => b.count - a.count)
return result.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((authorObj) => {
    let count = 0;
    books.forEach((book) => {
      if (book.authorId === authorObj.id) {
        count += book.borrows.length;
      }
    });
    result.push({ name: `${authorObj.name.first} ${authorObj.name.last}`, count });
    }
  );
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);


//intended to do:

  // const result = authors.map(authorObj => {
  //   const count = books.reduce((acc, book) => {
  //   if (book.authorId === authorObj.id) {
  //   return acc + book.borrows.length;
  //   }
  //   return acc;
  //   }, 0);
    
  //   return { name: ${authorObj.name.first} ${authorObj.name.last}, count };
  //   });
    
  //   console.log(result);
  //   return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
