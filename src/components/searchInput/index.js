import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from './style/searchInput';
import { useSelector } from 'react-redux';
import { valueSearch } from '../../store/actions';
import { useDispatch } from 'react-redux';

export default function SearchInput() {
  const show = useSelector((state) => state.showSearch);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    if (/\w/.test(e.target.value) || /\w/.test(search)) {
      history.push('/search');
      dispatch(valueSearch(e.target.value));
    }
  };

  return (
    <Input
      placeholder='search for a movie, tv'
      ref={inputRef}
      show={show}
      onChange={(e) => handleChange(e)}
      value={search}
    />
  );
}
