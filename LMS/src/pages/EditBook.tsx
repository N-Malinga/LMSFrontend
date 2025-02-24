import React from 'react'
import bookCreateImg from '../assets/book_create_image.jpg'
import useBooks from '../hooks/useBooks'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams, useNavigate  } from 'react-router-dom';

function EditBook() {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { fetchBookById, updateBook, loading, error } = useBooks();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [imgLink, setImgLink] = useState('');

    useEffect(() => {
        const fetchBook = async () => {
            if (id) {
                const book = await fetchBookById(parseInt(id));
                if (book) {
                    setTitle(book.title);
                    setAuthor(book.author);
                    setDescription(book.description);
                    setImgLink(book.imgLink || ''); // Set imgLink if available
                }
            }
        };

        fetchBook();
    }, []);

    const [errors, setErrors] = useState<{ title?: string, author?: string, description?: string }>({});

    const validateForm = () => {
        const newErrors: { title?: string, author?: string, description?: string } = {};

        if (!title) {
            newErrors.title = 'Title is required';
        }
        if (!author) {
            newErrors.author = 'Author is required';
        }
        if (!description) {
            newErrors.description = 'Description is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop if there are validation errors
        }

        const updatedBook = {
            title,
            author,
            description,
            imgLink,
        };


        if (id) {
            const updated = await updateBook(parseInt(id), updatedBook);
      
            if (updated) {
 
              Swal.fire({
                title: 'Success!',
                text: 'The book has been updated successfully.',
                icon: 'success',
                timer: 3000, 
                showConfirmButton: false, 
              }).then(() => {
                navigate('/books');
              });
            } else {
              // Show error message
              Swal.fire({
                title: 'Error!',
                text: error || 'Failed to update the book. Please try again.',
                icon: 'error',
                timer: 3000, // Closes automatically after 3 seconds
                showConfirmButton: false, // Hides the "OK" button
              });
            }
          }


    }

    const handleCancel = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to discard all changes?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, discard changes!',
            cancelButtonText: 'No, keep editing',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/books');
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
                                <h1 className="text-3xl font-bold mb-6">Edit book details</h1>

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
                                        />
                                        {errors.title && (
                                            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                                        )}
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
                                        />
                                        {errors.author && (
                                            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
                                        )}
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
                                        ></textarea>
                                        {errors.description && (
                                            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                                        )}
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

export default EditBook
