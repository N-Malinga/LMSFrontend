import React from 'react';
import { Book } from '../../types/bookTypes';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={book.imgLink}
        alt={`Cover of ${book.title}`}
        className="w-full h-48 object-cover"
      />


      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-sm text-gray-600 mb-4 truncate w-full">
          <strong>Description:</strong> {book.description}
        </p>


        <div className="flex gap-2">
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Edit
          </button>
          <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;