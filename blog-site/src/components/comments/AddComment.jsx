import React, { useState } from 'react'

function AddComment({ articleName, setArticleInfo }) {
  const [username, setUsername] = useState('')
  const [commentText, setCommentText] = useState('')

  const addCommentForm = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const body = await result.json()
    setArticleInfo(body)
    setUsername('')
    setCommentText('')
  }

  return (
    <div>
      <h3>Add Comment</h3>
      <label>Name</label>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>Comment</label>
      <textarea
        rows='4'
        cols='50'
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      />
      <button onClick={() => addCommentForm()}>Add Comment</button>
    </div>
  )
}

export default AddComment
