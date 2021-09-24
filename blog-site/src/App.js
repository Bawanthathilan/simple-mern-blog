import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Aboutpage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticleList'
import NavBar from './components/NavBar/NavBar'
import NotFoundPage from './pages/Page-404'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='page-body'>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={Aboutpage} />
            <Route path='/articles-list' component={ArticleList} />
            <Route path='/article/:name' component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
