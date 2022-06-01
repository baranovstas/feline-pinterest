import { combineReducers } from '@reduxjs/toolkit';

import cats from './catsSlice';

const rootReducer = combineReducers({ cats });

export default rootReducer;