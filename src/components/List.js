import { Card, Container, Button } from 'react-bootstrap'

const List = (props) => {
  const { repos } = props
  if (!repos || repos.length === 0)
    return <p>No Repositories Loaded, Refresh or check your Network</p>
  return (
    <ul>
      {repos.map((repo) => {
        return (
          <Container className='mt-3'>
            <Card border="success" key={repo.id}>
              <Card.Header className='cardHeaderText'>GitHub Repo: {repo.full_name}</Card.Header>
              <Card.Body className='cardText'>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
                <Button variant='success' className="mt-3">
                  <a className='text-white' href={repo.html_url}>
                    GitHub
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Container>
        )
      })}
    </ul>
  )
}
export default List
