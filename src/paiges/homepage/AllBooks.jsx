import { use } from "react";
import Book from "../books/Book";
import { Star } from "lucide";
import { StarIcon } from "lucide-react";


const booksPromise = fetch('/public/booksData.json').then((res) => res.json());

const AllBooks = () => {
    const books =use(booksPromise);
    console.log(books,'books')
    return (
        <div className="my-12">
            <h1 className="font-bold text-3xl text-center">Books</h1>
            <div>
                {books.length}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                        books.map((book) => {
                            return(
                                <div>
                                    <div className="card bg-base-100  shadow-sm">
  <figure className="p-8">
    <img className="h-[300px] rounded-2xl" src={book.image} />
  </figure>
 
  <div className="card-body">
    <div className="flex gap-8">
         {book.tags.map(tag => ( <div className="badge badge-soft badge-accent font-bold text-lg">{tag}</div>))}
  
    </div>
 
    <h2 className="card-title">
      {book.bookName} 
    </h2>
    <h2>{book.author}</h2>
    <div className="card-actions  border-t border-dashed border-gray-300 pt-4 flex justify-between">
      <div className="badge badge-ghost">{book.category}</div>
      <div className="badge badge-ghost" >{book.rating } <StarIcon></StarIcon></div>
    </div>
  </div>
</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    );
};

export default AllBooks;