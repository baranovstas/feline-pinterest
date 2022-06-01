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
  const { page, initialized, isFetching } = useSelector(({ cats }) => cats);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isAllCatsPath = pathname === '/allCats';

  useEffect(() => {
    if (isAllCatsPath) {
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

  if (isFetching && !initialized) {
    return <Spinner />;
  }

  if (!isFetching && initialized) {
    const displayedCats = isAllCatsPath ? transformedCats : transformedCats.filter(item => item.isLiked);

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
    {cats.map(({ id, ...item }, index) => (
      <CatItem index={index + 1} key={id} id={id} {...item} />
    ))}
  </ul>
);

export default CatsList;