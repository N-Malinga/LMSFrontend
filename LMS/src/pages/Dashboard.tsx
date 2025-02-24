import React from 'react'
import cover_Image from '../assets/cover_image copy.jpg'
import { sampleBooks } from '../constants/data'
import BookCard from '../components/books/BookCard'
import useBooks from '../hooks/useBooks'
import BookIcon from '../assets/bookIcon.png'
import AuthorIcon from '../assets/authorIcon.png'
import { useState, useEffect } from 'react';

function Dashboard() {
  const { books, loading, error, getBookCount, getAuthorCount } = useBooks();

  const [bookCount, setBookCount] = useState<number | null>(null);
  const [authorCount, setAuthorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const bookCount = await getBookCount();
        const authorCount = await getAuthorCount();
        setBookCount(bookCount ?? 0);
        setAuthorCount(authorCount ?? 0);
      } catch (err) {
        console.error('Failed to fetch counts:', err);
      }
    };

    fetchCounts();
  }, []);

  if (loading) return <div><p>Loading...</p></div>;
  if (error) return <div><p>Error: {error}</p></div>;

  return (
    <div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center justify-center h-100 my-4 rounded-lg bg-gray-50 overflow-hidden">
            <img
              src={cover_Image}
              className="object-cover"
              alt=""
            />

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Book Count Card */}
            <div className="flex items-center justify-around rounded-lg p-6 shadow-md" style={{ backgroundColor: "var(--primary-color)" }}>
              <div className="flex items-center justify-center">
                <img src={BookIcon} alt="Book Icon" className="w-30 h-30 mr-4" />
                <div>
                  <p className="text-2xl text-white font-semibold">
                    Book Count
                  </p>
                </div>
              </div>

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>There is an error</p>
              ) : (
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white">
                  <p className="text-3xl font-bold">
                    {bookCount}
                  </p>
                </div>
              )}
            </div>

            {/* Author Count Card */}
            <div className="flex items-center justify-around rounded-lg p-6 shadow-md" style={{ backgroundColor: "var(--primary-color)" }}>

              <div className="flex items-center">
                <img src={AuthorIcon} alt="Author Icon" className="w-30 h-30 mr-4" />
                <div>
                  <p className="text-2xl text-white font-semibold">
                    Author Count
                  </p>
                </div>
              </div>

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>there is an error</p>
              ) : (
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white">
                  <p className="text-3xl font-bold">
                    {authorCount}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold font-semibol pt-4 pb-5'>Recently Added Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {books.slice(-4).reverse().map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50">
            <p className="text-2xl text-gray-400">

            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">

              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">

              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">

              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
