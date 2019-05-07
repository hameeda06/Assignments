//Variables 
var bookTitle = "javascript book";
var bookAuth = "John Doe";
var bookPubdate = "06/05/2019";
var bookCategory = "Knowledge";
numberOfPages = 500;
isAvailable = true;
isPopular = true;

//Print all
console.log(bookTitle); 
console.log(bookAuth); 
console.log(bookPubdate); 
console.log(bookCategory); 
console.log(numberOfPages); 
console.log(isAvailable); 
console.log(isPopular); 
console.log("-----------------------"); 

//create an object of book
var book = {
	bookTitle: "javascript book",
	bookAuth: "John Doe",
    bookPubdate: "06/05/2019",
	bookCategory: "Knowledge",
	numberOfPages: 500,
	isAvailable: true,
	isPopular: true
};
console.log(book.bookCategory);
//fuunction Book(title, author, publishDate, category, isbnNum )