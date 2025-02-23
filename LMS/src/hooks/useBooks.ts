import { use, useEffect, useState } from 'react';
import {Book} from '../types/bookTypes';
import axios from 'axios';


const API_BASE_URL = 'https://localhost:7061/api/Book';

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //fetch all books
    const fetchBooks = async () => {
        setLoading(true);
        try{
            const response = await axios.get<Book[]>(API_BASE_URL);
            setBooks(response.data);
            setError(null);
        }catch(error){
            setError("Failed to fetch books");
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    //fetch a single book
    const fetchBookById = async (id : number) => {
        setLoading(true);
        try{
            const response = await axios.get<Book>(`${API_BASE_URL}/id?id=${id}`);
            setError(null);
            return response.data;
        }
        catch{
            setError("Failed to fetch book");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    //create a book
    const createBook = async (book : Omit<Book, 'id'>) => {
        setLoading(true);
        try{
            const response = await axios.post<Book>(API_BASE_URL, book);
            setBooks([...books, response.data]);
            setError(null);
            return response.data;
        }
        catch{
            setError("Failed to create book");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    //update a book
    const updateBook = async (id:number, updateBook : Omit<Book, 'id'>) => {
        setLoading(true);
        try{
            const response = await axios.put<Book>(`${API_BASE_URL}/${id}`, updateBook);
            setBooks((prevBooks) =>
                prevBooks.map((book) => (book.id === id ? response.data : book))
            );
            setError(null);
            return response.data;
        }
        catch{
            setError("Failed to update book");
            console.error(error);   
        }
        finally{
            setLoading(false);
        }
    }

    //Delete a book by id
    const deleteBook = async (id : number) => {
        setLoading(true);
        try{
            await axios.delete(`${API_BASE_URL}/${id}`);
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
            setError(null);
        }
        catch{
            setError("Failed to delete book");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    //get the book count
    const getBookCount = async () => {
        setLoading(true);
        try{
            const response = await axios.get<number>(`${API_BASE_URL}/count`);
            setError(null);
            return response.data;
        }
        catch{
            setError("Failed to fetch book count");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    //get author count
    const getAuthorCount = async () => {
        setLoading(true);
        try{
            const response = await axios.get<number>(`${API_BASE_URL}/author-count`);
            setError(null);
            return response.data;
        }
        catch{
            setError("Failed to fetch author count");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchBooks();
    }, []);
    
    return {
        books,
        loading,
        error,
        fetchBooks,
        fetchBookById,
        createBook,
        updateBook,
        deleteBook,
        getBookCount,
        getAuthorCount

    };
}