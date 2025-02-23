import React from 'react';
import { Book } from '../../types/bookTypes';
import useBooks from '../../hooks/useBooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {

  const { deleteBook, loading, error } = useBooks();
  const navigate = useNavigate();

  const handleDelete = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call the onDelete callback with the book ID
        await deleteBook(book.id);
        if (!error && !loading) {
          Swal.fire({
            title: 'Deleted!',
            text: 'The book has been deleted.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });

          setTimeout(() => {
            window.location.reload();
          }, 2000);

        } else {
          Swal.fire({
            title: 'Error!',
            text: error || 'Failed to delete the book. Please try again.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
          });
          return;

        }

      }
    });
  }

  const handleEdit = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to edit this book?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, edit it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the EditBook page with the book ID
        navigate(`/edit-book/${book.id}`);
      }
    });
  };


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
          <button
            onClick={handleEdit}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Edit
          </button>
          <button
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;