import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

function Categories() {
  const info = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categ-sec f-col">
      <button
        type="button"
        id="check-status"
        onClick={() => dispatch(statusChecker())}
      >
        Check status
      </button>
      <p>{info}</p>
    </div>
  );
}

export default Categories;
