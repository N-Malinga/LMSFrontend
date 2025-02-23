import React from 'react'
import bookCreateImg from '../assets/book_create_image.jpg'
import useBooks from '../hooks/useBooks'
import { useState } from 'react';
import Swal from 'sweetalert2';

function Addbook() {

    const { createBook, loading, error } = useBooks();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newBook = {
            title,
            author,
            description,
            imgLink: "https://covers.openlibrary.org/b/id/10692642-L.jpg"
        };

        const createdBook = await createBook(newBook);

        if (createdBook) {
            setTitle('');
            setAuthor('');
            setDescription('');

            Swal.fire({
                title: 'Success!',
                text: 'The book has been saved successfully.',
                icon: 'success',
                timer: 3000, // Closes automatically after 2 seconds
                showConfirmButton: false, // Hides the "OK" button
              });
        }else{
            Swal.fire({
                title: 'Error!',
                text: error || 'Failed to save the book. Please try again.',
                icon: 'error',
                timer: 3000, // Closes automatically after 3 seconds
                showConfirmButton: false, // Hides the "OK" button
              });
        }

        
    }

    const handleCancel = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to clear all entered data?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, clear it!',
          cancelButtonText: 'No, keep it',
        }).then((result) => {
          if (result.isConfirmed) {
            // Clear the form fields
            setTitle('');
            setAuthor('');
            setDescription('');
    
            // Show confirmation message
            Swal.fire({
              title: 'Cleared!',
              text: 'All entered data has been cleared.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          }
        });
      };


    return (
        <div>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-gray-200 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center h-screen mb-4 rounded-sm bg-gray-50 overflow-hidden">
                        <div className="flex flex-row h-fit w-full p-6 ">
                            {/* Left Half - Image Section */}
                            <div className="w-1/2 flex items-center justify-center bg-white p-8 rounded-lg shadow-md mr-4">
                                <div className="w-full h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                                    <img src={bookCreateImg} alt="Book create image" />
                                </div>
                            </div>

                            {/* Right Half - Form Section */}
                            <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
                                <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>

                                {/* Display error message if there's an error */}
                                {error && (
                                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-6">
                                        <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                            Book Title
                                        </label>
                                        <input
                                            type="text"
                                            id="bookTitle"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter book title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="bookAuthor" className="block text-sm font-medium text-gray-700 mb-2">
                                            Book Author
                                        </label>
                                        <input
                                            type="text"
                                            id="bookAuthor"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter book author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="bookDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                            Book Description
                                        </label>
                                        <textarea
                                            id="bookDescription"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            rows={4}
                                            placeholder="Enter book description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-end space-x-4">
                                        <button
                                            type="button"
                                            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={loading}
                                        >
                                            {loading ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addbook
