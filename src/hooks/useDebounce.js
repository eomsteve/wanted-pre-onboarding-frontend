import { useState, useEffect,useCallback } from 'react';

export const useDebounce = (value)=>{
  const [dataQuery, setDataQuery] = useState(value);
  useEffect(()=>{
    const debounce = setTimeout(()=>{
      setDataQuery(()=>value);
    },300);
    return ()=> clearTimeout(debounce);
  },[value]);
  return dataQuery;
}