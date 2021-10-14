import Search from './Search'
import { Navbar, Container } from 'react-bootstrap';

export default function Header () {

    return(
        <div>
            <Navbar bg="dark" variant="dark" className="navbar">
                <Container>
                <Navbar.Brand href="/home"></Navbar.Brand>
                <Search onSearch={onSearch} />
                </Container>
            </Navbar>
            
        </div>
    )
}