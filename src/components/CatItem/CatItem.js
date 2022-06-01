import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { toggleLike } from '../../store/reducers/catsSlice';

import catsItemClasses from './CatItem.module.scss';

const CatItem = ({ id, url, isLiked, index }) => {
  const dispatch = useDispatch();

  return (
    <li tabIndex={index} className={catsItemClasses.cat}>
      <img
        className={catsItemClasses.image}
        src={url}
        alt="Изображение котика"
      />
      <button
        onClick={() => dispatch(toggleLike(id))}
        className={`${catsItemClasses.button} ${isLiked && catsItemClasses.button_active}`}
        type='button'
        aria-label="Лайкнуть котика"
        title="Лайкнуть котика"
      />
    </li>
  );
}

export default CatItem;