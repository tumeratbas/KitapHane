import React from 'react';
import { Grid, Typography } from '@mui/material';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={3}>
          <BookCard book={book} />
        </Grid>
      ))}
      {books.length === 0 && (
        <Grid item xs={12}>
          <Typography variant="subtitle1">Arama sonucunda kitap bulunamadı.</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default BookList;
