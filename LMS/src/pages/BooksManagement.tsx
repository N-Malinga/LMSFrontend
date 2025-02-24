import React from 'react'
import { sampleBooks } from '../constants/data'
import BookCard from '../components/books/BookCard'
import useBooks from '../hooks/useBooks'

function BooksManagement() {
    const { books, loading, error } = useBooks();

    if (loading) return <div><p>Loading...</p></div>;
    if (error) return <div><p>Error: {error}</p></div>;

    return (
        <div>

            <div className="p-4 sm:ml-64">
                <div className="border-gray-200 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 overflow-hidden">
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                            {books.map((book) => (
                                <BookCard key={book.id} book={book}></BookCard>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksManagement
