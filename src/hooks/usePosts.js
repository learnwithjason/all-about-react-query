import React from 'react'
import axios from 'axios'
import { useQuery, queryCache } from 'react-query';

export default function usePosts() {
  return useQuery(
    'posts', 
    () => axios.get('/api/posts').then((res) => res.data),
  )
}
