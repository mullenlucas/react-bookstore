// Status checker for categories
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

// Reducer section
const reducerBookCategories = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Pending...';
    default: return state;
  }
};

// Action creators section
export const statusChecker = (category) => ({ type: CHECK_STATUS, category });

export default reducerBookCategories;
