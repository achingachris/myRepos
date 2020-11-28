import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Chris - GitHub Repos</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='https://github.com/ChrisAchinga'>GitHub</Nav.Link>
              <Nav.Link href='http://chrisachinga.me/'>Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='headerText text-center mt-5 mb-4'>
        <h1>My Repositories</h1>
      </Container>
    </header>
  )
}

export default Header
