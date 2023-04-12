import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@/components/Icons/FavoriteIcon';
import FavoriteFilledIcon from '@/components/Icons/FavoriteFilledIcon';
import { SearchResultsItem } from '@/types/types';
import { addFavorite, removeFavorite } from '@/redux/reducres/favorites/reducer';
import { selectIsInFavoriteList } from '@/redux/reducres/favorites/selectors';

export type Props = SearchResultsItem;

const MovieItem = (item: Props) => {
  const { Poster, Year, Title, imdbID } = item;

  const dispatch = useDispatch();

  const isInFavoriteList = Boolean(useSelector(selectIsInFavoriteList(imdbID)));

  const addToFavorites = () => {
    if (isInFavoriteList) {
      dispatch(removeFavorite({ favorite: item }));
    } else {
      dispatch(addFavorite({ favorite: item }));
    }
  };

  return (
    <Card elevation={4}>
      <CardMedia component="img" height="240" image={Poster} alt={Title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" onClick={addToFavorites}>
          {isInFavoriteList ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
