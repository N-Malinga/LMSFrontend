import React from 'react'
import bookCreateImg from '../assets/book_create_image.jpg'
import useBooks from '../hooks/useBooks'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ViewBook() {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { fetchBookById, loading, error } = useBooks();

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
                navigate(`/edit-book/${id}`);
            }
        });
    };

    return (
        <div>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-gray-200 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center h-screen mb-4 rounded-sm bg-gray-50 overflow-hidden">
                        <div className="flex flex-row h-fit w-full p-6">
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>Error: {error}</p>
                            ) : (
                                <>
                                    {/* Left Half - Image Section */}
                                    <div className="w-1/2 flex items-center justify-center bg-white p-8 rounded-lg shadow-md mr-4">
                                        <div className="w-full h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                                            <img src={imgLink} alt="Book create image" className='h-full h-48 object-cover' />
                                        </div>
                                    </div>

                                    {/* Right Half - Form Section */}
                                    <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
                                        <h1 className="text-3xl font-bold mb-6 bg-blue-800 p-5 rounded-md" style={{ color: "white" }}>Book Details</h1>

                                        <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                                        <h4 className='p-3'>{author}</h4>
                                        <p className='p-3'>{description}</p>

                                        <button
                                            type="submit"
                                            className="px-6 py-2 m-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={loading}
                                            onClick={() => window.history.back()}>
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={loading}
                                            onClick={handleEdit}
                                        >Edit</button>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook
