import { createSelector } from '@reduxjs/toolkit';

const selectCats = ({ cats: { cats } }) => cats;

const selectLikedCats = ({ cats: { likedCats } }) => likedCats;

const selectTransformedCats = createSelector(
  selectCats,
  selectLikedCats,
  (cats, likedCats) => cats.map(({ id, url }) => ({
    id,
    url,
    isLiked: likedCats.findIndex(item => item.id === id) !== -1
  }))
);

export { selectTransformedCats };