import { arr } from '@/components'

const getPosts = async () => {
  try {
    const response = await fetch(`${arr.api}posts`)

    const newArr = await response.json()

    if(!response) {
      throw 'Malumot Topilmadi'
    }

    arr.posts = newArr.splice(0, 10)
    

    return newArr
  } catch (error) {
    console.log(error);
    
  }
}

const createPost = async (post) => {
  try {
    const response = await fetch(`${arr.api}posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    const newResponse = await response.json()
    
    if (!newResponse.id) {
      throw 1
    }

    alert(`POST N${newResponse.id} SUCCES CREATED`)
    arr.closeAll()

    return response
  } catch (error) {
    console.log(error)
  }
}

const editPost = async (post, id) => {
  try {
    const response = await fetch(`${arr.api}posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    const newResponse = await response.json()
    
    if (!newResponse.status == 200) {
      throw 'EDIT POST FAILED'
    }

    alert(`POST N${newResponse.id} SUCCES CREATED`)
    arr.closeAll()

    return response
  } catch (error) {
    console.log(error)
  }
}

const deletePost = async () => {
  try {
    const response = await fetch(`${arr.api}posts/${arr.postId}`, {
      method: 'DELETE',
    })

    const newResponse = await response.json()
    
    alert(`Post N${arr.postId} Succes Deleted🔋`);
    
    arr.comments = []

    getPosts()

    arr.closeAll()
    
    return newResponse
  } catch (error) {
    console.log(error)
    return
  }
}

export { getPosts, createPost, editPost, deletePost }
