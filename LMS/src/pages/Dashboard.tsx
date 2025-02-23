import React from 'react'
import cover_Image from '../assets/cover_image.jpg'
import { sampleBooks } from '../constants/data'
import BookCard from '../components/books/BookCard'
import useBooks from '../hooks/useBooks'

function Dashboard() {
  const { books, loading, error} = useBooks();

  if(loading) return <div><p>Loading...</p></div>;
  if(error) return <div><p>Error: {error}</p></div>;

  return (
    <div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center justify-center h-48 my-4 rounded-lg bg-gray-50 overflow-hidden">
            <img
              src={cover_Image}
              className="object-cover"
              alt=""
            />

          </div>
          <div className="mb-4 rounded-lg bg-gray-50">
            <h2 className='text-xl font-bold font-semibol pt-4 pl-7'>Recently Added Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {books.slice(-4).reverse().map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50">
              <p className="text-2xl text-gray-400">
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50">
              <p className="text-2xl text-gray-400">

              </p>
            </div>

            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50">
              <p className="text-2xl text-gray-400">

              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
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
