import React from 'react'
import bookCreateImg from '../assets/book_create_image.jpg'

function Addbook() {
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
                                <h1 className="text-2xl font-bold mb-6">Add a New Book</h1>

                                <div className="mb-6">
                                    <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                        Book Title
                                    </label>
                                    <input
                                        type="text"
                                        id="bookTitle"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter book title"
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
                                    ></textarea>
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addbook
