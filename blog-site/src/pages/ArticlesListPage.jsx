import React from 'react'

import articleContent from './demoArticles'
import ArticleLists from '../components/ArticleList/ArticleList'

function ArticleList() {
  return (
    <div>
      <h1>Article List</h1>
      <ArticleLists articles={articleContent} />
    </div>
  )
}

export default ArticleList
