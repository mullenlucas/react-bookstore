// Status checker for categories
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer section
export default function reducerBookCategories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction!';
    default: return state;
  }
}

// Action creators section
export const statusChecker = () => ({ type: CHECK_STATUS });
