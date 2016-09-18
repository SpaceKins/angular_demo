angular.module('myApp')
.service('BookService',BookService);



function BookService(){
  this.value="I am a book service!";
  this.books=[
  {
      id:1,
      title:'Theory of Everything',
      author:'Stephen Hawkings'
    },
    {
      id:2,
      title:'Plain, Honest Men',
      author:'Richard Beeman'      
    }
  ]
}


BookService.prototype.getBook=function(id){
  return this.books.find((book)=>book.id==id);
}

BookService.prototype.getBooks=function(){
    return this.books;
}

BookService.prototype.addBook= function(bookData){
  const {author,title} = bookData;
  this.books.unshift({
    author,
    title
  })
}