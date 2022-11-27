import {useAsync} from '../useAsync';
import * as searchApi from '../../services/requests';

export default function useSearch(){
  const {
    data: searchList,
    loading: searchLoading,
    error: searchError,
    act: searchUsers,
  } = useAsync(searchApi.searchUsers);

  return {
    searchList,
    searchLoading,
    searchError,
    searchUsers,
  };
}

