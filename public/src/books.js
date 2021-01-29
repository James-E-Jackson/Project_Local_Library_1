const { availableBooks, unavailableBooks } = require("./helper");

function findAuthorById(authorArr, id) 
{
  return authorArr.find((author) => author.id === id);
}

function findBookById(bookArr, id) 
{
  return bookArr.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(bookArr) 
{
return [unavailableBooks(bookArr), availableBooks(bookArr)];
}

function getBorrowersForBook(book, accountArr) 
{
  const returnArr = [];
  const {borrows} = book;
  for(let borrow of borrows)
  {
     const account = accountArr.find((account) => borrow.id === account.id);
     returnArr.push({...account, returned: borrow.returned});
  }
  returnArr.length = 10;
  return returnArr;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
