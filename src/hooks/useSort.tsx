import { useState } from 'react';
import { TData } from '@types';

export const useSort = <T extends TData[] | null>(props: T) => {
  const [sort, setSort] = useState(false);

  const toggleSort = () => {
    sort
      ? props?.sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        )
      : props?.sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        );
    setSort(!sort);
  };

  return {
    dataArr: props,
    toggleSort,
  };
};
