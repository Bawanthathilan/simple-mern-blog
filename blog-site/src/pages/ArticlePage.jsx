import React, { useState, useEffect } from 'react'
import demoArticles from './demoArticles'
import ArticleList from '../components/ArticleList/ArticleLists'
import CommentList from '../components/comments/CommentList'
import NotFoundPage from '../pages/Page-404'
import Upvote from '../components/Upvote/Upvote'
import AddComment from '../components/comments/AddComment'

const ArticlePage = ({ match }) => {
  const name = match.params.name
  const article = demoArticles.find((article) => article.name === name)

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      console.log(body)
      setArticleInfo(body)
    }
    fetchData()
  }, [name])

  if (!article) return <NotFoundPage />
  const otherArticles = demoArticles.filter((article) => article.name !== name)
  return (
    <>
      <h1>{article.title}</h1>
      <Upvote
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      ></Upvote>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentList comments={articleInfo.comments} />

      <AddComment articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles</h3>
      <ArticleList articles={otherArticles} />
    </>
  )
}

export default ArticlePage
