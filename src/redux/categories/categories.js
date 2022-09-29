// Status checker for categories
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer section
const reducerBookCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction!';
    default: return state;
  }
};

// Action creators section
const statusChecker = () => ({ type: CHECK_STATUS });

export { reducerBookCategories, statusChecker };
