import React from 'react'

const Upvote = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    })
    const body = await result.json()
    setArticleInfo(body)
  }
  return (
    <div>
      <button onClick={() => upvoteArticle()}>UpVote</button>
      <p>This post han been upvoted {upvotes}</p>
    </div>
  )
}

export default Upvote
