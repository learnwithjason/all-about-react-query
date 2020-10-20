import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

export default function useSavePost() {
  return useMutation(
    (newPost) => axios
      .patch(`/api/posts/${newPost.id}`, newPost)
      .then((res) => res.data),
    {
      onMutate: (newPost) => {
        // update the data
        queryCache.setQueryData(['posts', newPost.id], newPost)
      },
      onSuccess: (newPost) => {
        queryCache.setQueryData(['posts', newPost.id], newPost)
        
        if (queryCache.getQueryData('posts')) {
          queryCache.setQueryData('posts', old => {
            return old.map(d => {
              if (d.id === newPost.id) {
                return newPost
              }
              return d
            })
          })
        } else {
          queryCache.setQueryData('posts', [newPost])
          queryCache.invalidateQueries('posts')
        }
      },
    }
  )
}
