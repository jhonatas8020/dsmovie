import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href='/'>
                        <h1>DSMovie</h1>
                    </a>
                    <a href="https://github.com/jhonatas8020">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/jhonatas8020</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;