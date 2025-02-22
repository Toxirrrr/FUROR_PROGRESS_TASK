import { reactive } from 'vue'

let arr = reactive({
  api: 'https://jsonplaceholder.typicode.com/',
  users: [],
  posts: [],
  comments: [],
  createModal: false,
  editModal: false,
  deleteModal: false,
  postId: 0,
  err: '',
  post: {
    title: '',
    body: '',
    userId: null,
  },
  closeAll: function () {
    this.editModal = false
    this.createModal = false
    this.deleteModal = false
    this.post.title = null
    this.post.body = null
    this.post.user = 1
    this.err = null
  },
})

export { arr }
