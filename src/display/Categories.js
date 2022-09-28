import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <div className="categ-sec">
      <button
        type="button"
        id="check-status"
        onClick={() => dispatch(statusChecker())}
      >
        Check status
      </button>
    </div>
  );
}

export default Categories;
