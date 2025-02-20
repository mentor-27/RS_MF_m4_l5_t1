import { useState } from 'react';
import { TCharacter, TEpisode, TLocation } from '../components/types';

export const useSort = <T extends TCharacter[] | TEpisode[] | TLocation[]>(
  props: T
) => {
  const [sort, setSort] = useState(false);

  const toggleSort = () => {
    sort
      ? props.sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        )
      : props.sort(
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
