import './Footer.css';
import gh from '../images/github.svg';
import li from '../images/174857.png'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2022 Paul Baliasny, powered by <a className='footer__copyright' href='https://unsplash.com/' target='_blank' rel="noreferrer noopener">unsplash.com</a></p>
            <div className='footer__navbar-item_symbols'>
                <a href='https://github.com/Paul-Baliasny-2021' target='_blank' rel="noreferrer noopener"><img className="footer__navbar-social" src={gh} alt='Github logo' /></a>
                <a href='https://www.linkedin.com/in/pavel-baliasny/' target='_blank' rel="noreferrer noopener"><img className="footer__navbar-social" src={li} alt='linkedin logo' /></a>
            </div>
        </footer>
    )
}

export default Footer;