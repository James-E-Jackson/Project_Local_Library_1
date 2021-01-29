function isBorrowed(book)
{
    return !book.borrows.map((borrow) => borrow.returned).every((returned) => returned ===true);
}
function availableBooks(bookArr)
{
    return bookArr.filter((book) => !isBorrowed(book));
}
function unavailableBooks(bookArr)
{
    return bookArr.filter((book) => isBorrowed(book));
}
function getBorrowerId(borrows)
{
    return borrows.map((borrow) => borrow.id);
}
function arrayToFive(array)
{
    const returnArr = [];

    for(let i = 0; i < 5; i++)
    {
        returnArr.push(array[i]);
    }

    return returnArr;
}

module.exports = {
    isBorrowed,
    availableBooks,
    unavailableBooks,
    getBorrowerId,
    arrayToFive,
    
};