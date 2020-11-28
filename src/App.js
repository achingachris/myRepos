import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import withListLoading from './components/WithListLoading'

const App = () => {
  const ListLoading = withListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = `https://api.github.com/users/chrisachinga/repos`
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data
      setAppState({ loading: false, repos: allRepos })
    })
  }, [setAppState])

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
