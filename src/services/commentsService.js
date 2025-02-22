import { arr } from '@/components'

const getPostComments = async (id) => {
  try {
    const response = await fetch(`${arr.api}posts/${id}/comments`)
    const newArr = await response.json()

    if (!response) {
      throw 'Malumot Topilmadi'
    }

    arr.comments = newArr.splice(0, 10)

    return newArr
  } catch (error) {
    console.log(error)
    return
  }
}

const deleteComment = async (postId, id) => {
  try {
    const response = await fetch(`${arr.api}posts/${postId}/comments/${id}`, {
      method: 'DELETE',
    })

    const newResponse = await response.json()
    alert(`Post N${id} Succes Deleted🔋`);
    
    return newResponse
  } catch (error) {
    console.log(error)
    return
  }
}


export { getPostComments, deleteComment }
