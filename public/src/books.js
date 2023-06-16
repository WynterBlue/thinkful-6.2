function findAuthorById(authors, id) {
  return authors.find((authorObj) => authorObj.id === id) 
}

function findBookById(books, id) {
  return books.find((bookObj) => bookObj.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //returns an array with two arrays inside of it.
let finalResult = []
  //The first array contains book objects that are currently checked out
let checkedOut = books.filter(({borrows}) => borrows[0].returned === false)
finalResult.push(checkedOut)
  //The second array contains book objects that have been returned
let returned = books.filter(({borrows}) => borrows[0].returned === true)
finalResult.push(returned)
  //return final result
return finalResult
}

function getBorrowersForBook(book, accounts) {
  // return an array of ten or fewer account objects that represents the accounts by IDs in the provided book's `borrows` array
  //result array
let borrowers = []
//list 10 or less Ids in book's borrow list
book.borrows.forEach((borrowsObj) => {
  accounts.forEach((accountObj) => {
    if(borrowsObj.id === accountObj.id){
      let returned = borrowsObj.returned
      accountObj.returned = returned
      borrowers.push(accountObj)
    }
    else {
      return false
    }
  })
})
// while (borrowers.length > 10) {
//   borrowers.pop()
// }
return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
