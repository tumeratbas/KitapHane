import React, { useState, useEffect } from 'react';
import { Container, InputAdornment, TextField, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookCard from './BookCard';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 20;

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async () => {
    try {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();
  
      const fetchedBooks = data.items || [];
      setBooks(fetchedBooks);
      setTotalPages(Math.ceil(data.totalItems / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Kitap arama hatası:', error);
      setBooks([]);
      setTotalPages(0);
    }
  };
  
  useEffect(() => {
    setCurrentPage(1); // Her arama yapıldığında sayfa numarasını sıfırla
    handleSearch();
  }, [searchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCurrentPage(1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage, searchTerm]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 2 }}>
        Ne Arıyorsun?
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Kitap adı, yazar veya konu ara"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid key={book.id} item xs={12} sm={6} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};

export default HomePage;
