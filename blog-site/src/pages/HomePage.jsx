import React from 'react'
import './style.css'
import ArticleList from '../components/ArticleList/ArticleLists'
import demodats from './demoArticles'

function HomePage() {
  return (
    <div className='home'>
      <div className='header'>
        <section class='fdb-block'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-12 col-md-6 col-lg-5'>
                <h1 className='blogHomeTitle'>
                  My Thoughts on Programming and Tech
                </h1>
                <p class='lead'>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div class='col-12 col-md-6 ml-md-auto mt-4 mt-md-0'>
                <img
                  alt='image'
                  class='img-fluid'
                  src='https://raw.githubusercontent.com/froala/design-blocks/dev/src/imgs/shapes/2.svg'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ArticleList articles={demodats} />
    </div>
  )
}

export default HomePage
