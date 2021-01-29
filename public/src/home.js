const { availableBooks, unavailableBooks, arrayToFive, isBorrowed} = require("./helper");

function totalBooksCount(bookArr) 
{
  return bookArr.length;
}

function totalAccountsCount(accountArr) 
{
  return accountArr.length;
}

function booksBorrowedCount(bookArr) 
{
  return unavailableBooks(bookArr).length;
}

function getMostCommonGenres(bookArr) 
{
  const genreArr = [];
  genreArr.push({name: bookArr[0].genre, count: 1});

  for(let i = 1; i < bookArr.length; i++)
  {
    if(genreArr.map((genre) => genre.name).includes(bookArr[i].genre))
    {
      genreArr.find((genre) => genre.name === bookArr[i].genre).count++;
    }else
    {
      genreArr.push({name: bookArr[i].genre, count: 1});
    }
  }
  genreArr.sort((genre, other) => other.count - genre.count );

  if(genreArr.length > 5)
  {
    return arrayToFive(genreArr);
  }
  return genreArr;
}

function getMostPopularBooks(bookArr) 
{
  const popBookArr = [];

  for(let i = 1; i < bookArr.length; i++)
  {
    popBookArr.push({name: bookArr[i].title, count: bookArr[i].borrows.length})
  }
  popBookArr.sort((title, other) => other.count - title.count );

  if(popBookArr.length > 5)
  {
    return arrayToFive(popBookArr);
  }
  return popBookArr;
}

function getMostPopularAuthors(bookArr, authorArr) 
{
  const popAuthorArr = [];
  for(let author of authorArr)
  {
   if(!popAuthorArr.map((popAuthor) => popAuthor.name).includes(author.name))
   {
    const authorName = `${author.name.first} ${author.name.last}`
    const numBorrows = bookArr.filter((book) => book.authorId === author.id).reduce((acc, book) => 
     {
       acc = acc.concat(book.borrows);
       return acc;
     }, []).length;
    
    popAuthorArr.push({name: authorName, count: numBorrows})
   }
   
  }

  popAuthorArr.sort((title, other) => other.count - title.count );
  if(popAuthorArr.length > 5)
  {
    return arrayToFive(popAuthorArr);
  }
  return popAuthorArr;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
