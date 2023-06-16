function findAccountById(accounts, id) {
  //It returns the account object that has the matching ID.
  return accounts.find((accountObj) => accountObj.id === id)
}

function sortAccountsByLastName(accounts) {
  //returns a sorted array of the provided account objects by last name
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  
}

function getTotalNumberOfBorrows(account, books) {
  //returns a number that represents the number of times the account's ID appears in any book's `borrows` array.
  // let count = 0
  // for (let bookKey in books) {
  //   const bookObj = books[bookKey]
  //   const bookIds = bookObj.borrows.map((borrowStatus) => borrowStatus.id)
  //   if (bookIds.includes(account.id)){
  //     count++
  //     }
  //   }
  // return count
  //books.filter(({borrows}) => {
  //})
  let counter = 0
  books.forEach(({borrows}) => counter += borrows.filter(({id}) => id === account.id).length)
  return counter
}


function getBooksPossessedByAccount(account, books, authors) {
  //returns an array of book objects, including author information, that represents all books currently checked out by the given account.
  //get account
  const currentAccount = account.id
  //find checked out books first -> check if index 0 is false
  const checkedOutBooks = books.filter((bookObj) => bookObj.borrows.find((borrowsObj)=>borrowsObj.returned === false))
  // see if id is in there (correction: @ index 0*)
  const booksByAccount = checkedOutBooks.filter((bookObj) => {
    if(bookObj.borrows[0].id === currentAccount){
      authors.find((authorObj) => {
        if (authorObj.id === bookObj.authorId){
          let found = authorObj
          bookObj.author = found
        }
      })
      return true
    }
    else{
      return false
    }
  })
  return booksByAccount
  //nest author object inside book object
  // let found = null
  // const finalResult = authors.find((authorObj) => {
  //    booksByAccount.find((bookObj) => {
  //     if (authorObj.id === bookObj.authorId){
  //       found = bookObj.authorId
  //       bookObj.author = found
  //     }
  //   })
  // })

  // let bookIdList = []
  // //get access to books objects
  // for (let bookKey in books) {
  //   const bookObj = books[bookKey]
  //   //get access to books.borrows ids and return statuses
  //   const bookIds = bookObj.borrows.reduce((newBorrow, borrowStatus) => {
  //     newBorrow[borrowStatus.id] = borrowStatus.returned
  //   }, {})
  //   console.log(`loop`)
  //   bookIdList.push(bookIdList)
  //   }
  //   console.log(bookIdList)
  //  return 
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
