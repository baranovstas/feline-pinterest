import { useDispatch } from 'react-redux';

import { toggleLike } from '../../store/reducers/catsSlice';

import catsItemClasses from './CatItem.module.scss';

const CatItem = ({ id, url, isLiked }) => {
  const dispatch = useDispatch();

  return (
    <li className={catsItemClasses.cat}>
      <img
        className={catsItemClasses.image}
        src={url}
        alt="Изображение котика"
      />
      <button
        onClick={() => dispatch(toggleLike({ id, url }))}
        className={`${catsItemClasses.button} ${isLiked && catsItemClasses.button_active}`}
        type='button'
        aria-label="Лайкнуть котика"
        title="Лайкнуть котика"
      />
    </li>
  );
}

export default CatItem;