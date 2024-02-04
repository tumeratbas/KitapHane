import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  CardActions,
  Button,
} from '@mui/material';
import './BookList';

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  // Kitap özetini kontrol et
  const shortSummary = book.volumeInfo?.description?.slice(0, 200);
  const fullSummary = book.volumeInfo?.description;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {book.volumeInfo?.imageLinks?.thumbnail && (
        <CardMedia
          component="img"
          height="100"
          image={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expanded ? fullSummary : shortSummary}
          {fullSummary && (
            <Button size="small" onClick={handleExpandClick}>
              {expanded ? 'daha az' : 'daha fazlası için'}
            </Button>
          )}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {fullSummary}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BookCard;
