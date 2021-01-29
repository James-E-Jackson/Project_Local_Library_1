const { unavailableBooks, getBorrowerId } = require("./helper");
const { findAuthorById } = require("./books");
function findAccountById(accountArr, accountId) 
{
  return accountArr.find((account) => accountId === account.id);
}

function sortAccountsByLastName(accountArr) 
{
  return accountArr.sort((account, other) => account.name.last > other.name.last ?  1: -1);
}

function numberOfBorrows({id}, bookArr) 
{
  return bookArr.filter((book) => getBorrowerId(book.borrows).includes(id)).length
}

function getBooksPossessedByAccount(account, bookArr, authorArr) 
{
    return unavailableBooks(bookArr).filter((book)=> book.borrows[0].id === account.id).map((book) => 
    {
      author = findAuthorById(authorArr, book.authorId);
      return {...book, author}});
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
