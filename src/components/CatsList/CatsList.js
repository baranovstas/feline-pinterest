import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CatItem from '../CatItem/CatItem';
import Spinner from '../Spinner/Spinner';

import { fetchCats, updatePage } from '../../store/reducers/catsSlice';
import { selectTransformedCats } from '../../store/selectors/catsSelectors';

import catsListClasses from './CatsList.module.scss';

const CatsList = () => {
  const transformedCats = useSelector(state => selectTransformedCats(state));
  const { page, initialized, isFetching, likedCats } = useSelector(({ cats }) => cats);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchCats(page));
  }, [page]);

  const handleScroll = e => {
    if ((window.innerHeight + window.scrollY) >= e.target.documentElement.scrollHeight) {
      dispatch(updatePage());
    }
  };

  if (isFetching && !initialized && isHomePage) {
    return <Spinner />;
  }

  if (!isFetching && initialized) {
    const displayedCats = isHomePage ? transformedCats : likedCats.map(item => ({ ...item, isLiked: true }));

    return <View cats={displayedCats} />;
  }
  else if (isFetching && initialized) {
    return (
      <>
        <View cats={transformedCats} />
        <p style={{ textAlign: 'center', marginTop: '50px' }}>... загружаем еще котиков ...</p>
      </>
    );
  }
}

const View = ({ cats }) => (
  <ul className={catsListClasses.cats}>
    {cats.map(({ id, ...item }) => (
      <CatItem key={id} id={id} {...item} />
    ))}
  </ul>
);

export default CatsList;