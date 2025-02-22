<script setup>
import './PostsComp.scss'
import { arr } from '@/components'
import { getPosts, deletePost, createPost, editPost } from '@/services/postsService'
import { getPostComments } from '@/services/commentsService'
getPosts()

function create() {
  let post = {
    title: arr.post.title,
    body: arr.post.body,
    userId: arr.post.user || 1,
  }

  console.log(post)

  if (!arr.post.title || !arr.post.body) {
    return alert('INPUT VALUE REQUIRED')
  }

  createPost(post)
}

function edit() {
  let post = {
    title: arr.post.title,
    body: arr.post.body,
  }

  if (!arr.post.title || !arr.post.body) {
    return alert('INPUT VALUE REQUIRED')
  }

  editPost(post, arr.id)
}
</script>

<template>
  <section class="posts" id="posts">
    <div class="container">
      <div class="posts__wrapper">
        <div class="posts__left-wrapper">
          <h1 class="posts__header">Posts</h1>
          <ul class="posts__list">
            <li class="posts__item" v-for="item in arr.posts" :key="item.id" :title="item.id">
              <div class="posts__item-text-wrapper" @click="getPostComments(item.id)">
                <h3 class="posts__item-header">{{ item.title }}</h3>
                <p class="posts__item-text">
                  {{ item.body }}
                </p>
              </div>
              <div class="posts__item-btn-wrapper">
                <button
                  class="posts__item-del"
                  @click="
                    () => {
                      ;(arr.deleteModal = true), (arr.postId = item.id)
                    }
                  "
                >
                  <img src="/icons/del.svg" alt="delete" width="14" height="14" />
                  DELETE
                </button>
                <button
                  class="posts__item-edit"
                  @click="
                    () => {
                      ;(arr.editModal = true), (arr.postId = item.id)
                    }
                  "
                >
                  <img src="/icons/edit.svg" alt="edit" width="14" height="14" />
                  EDIT
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div class="posts__right-wrapper" v-show="arr.comments.length > 1">
          <h2 class="posts__header">Comments</h2>
          <ul class="posts__list">
            <li class="posts__item" v-for="item in arr.comments" :key="item.id">
              <div class="posts__item-text-wrapper">
                <h3 class="posts__item-header">{{ item.name }}</h3>
                <p class="posts__item-email">
                  {{ item.email }}
                </p>
                <p class="posts__item-text">
                  {{ item.body }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <!-- EDIT -->
    <div class="post__modal" v-show="arr.editModal">
      <div class="post__wrapper">
        <h2 class="post-header">EDIT POST</h2>
        <input class="post-input" type="text" placeholder="title" v-model="arr.post.title" />
        <input class="post-input" type="text" placeholder="body" v-model="arr.post.body" />
        <div class="modal__btn__wrapper">
          <button class="modal-btn" @click="arr.closeAll">Cancel</button>
          <button class="modal-btn" @click="edit">Save Changes</button>
        </div>
      </div>
    </div>

    <!-- CREATE -->
    <div class="post__modal" v-show="arr.createModal">
      <div class="post__wrapper">
        <h2 class="post-header">CREATE POST</h2>
        <input class="post-input" type="text" placeholder="title" v-model="arr.post.title" />
        <input class="post-input" type="text" placeholder="body" v-model="arr.post.body" />
        <input
          class="post-input"
          type="number"
          placeholder="user id = default id 1"
          v-model="arr.post.user"
        />
        <div class="modal__btn__wrapper">
          <button class="modal-btn" @click="arr.closeAll">Cancel</button>
          <button class="modal-btn" @click="create">Save Changes</button>
        </div>
      </div>
    </div>
    <!-- DELETE -->
    <div class="post__modal" v-show="arr.deleteModal">
      <div class="post__wrapper">
        <h2 class="post-header">DELETE POST</h2>
        <div class="modal__btn__wrapper" style="margin: 0">
          <button class="modal-btn" @click="arr.closeAll">Cancel</button>
          <button class="modal-btn" @click="deletePost">Save Changes</button>
        </div>
      </div>
    </div>
    <div class="alert__modal" v-show="arr.err">
      <div class="alert__wrapper">
        <button class="alert__btn">{{ arr.err }}</button>
      </div>
    </div>
  </Teleport>
</template>
