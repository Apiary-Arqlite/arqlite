import { Link } from 'react-router-dom';
import arqliteLogo2 from '../images/arqlite-logo-2.svg';
import { Section } from './Section';
const Footer = () => {
  return (
    <footer>
      <Section.Footer>
        <section className='footer__container'>
          <img alt='arqlite logo' src={arqliteLogo2} className='footer__logo' />
          <div className='footer__column'>
            <p className='footer__column_title'>Solutions</p>
            <ul className='footer__column_container'>
              <li className='footer__column_item'>
                <Link to='/' className='footer__link'>
                  For construction companies
                </Link>
              </li>
              <li className='footer__column_item'>
                <Link to='/' className='footer__link'>
                  For plastic producers and recyclers
                </Link>
              </li>
              <li className='footer__column_item'>
                <Link className='footer__link'>For eco-conscious brands</Link>
              </li>
            </ul>
          </div>
          <div className='footer__column'>
            <p className='footer__column_title'>Assistance</p>
            <ul className='footer__column_container'>
              <li className='footer__column_item'>
                <Link to='/' className='footer__link'>
                  Facility size calculator
                </Link>
              </li>
              <li className='footer__column_item'>
                <Link to='/' className='footer__link'>
                  Revenue calculator
                </Link>
              </li>
              <li className='footer__column_item'>
                <Link className='footer__link'>Arrange a meeting</Link>
              </li>
            </ul>
          </div>
          <div className='footer__column footer__column-contact-info'>
            <p className='footer__column_title '>Arqlite Social Purpose Corp</p>
            <p className='footer__column_text'>
              <a
                className='footer__column_email'
                href='mailto:contact@arqlite.com'
              >
                contact@arqlite.com
              </a>
            </p>
            <p className='footer__column_text'>(657) 232 0058</p>
            <p className='footer__column_text'>
              2111 S Anne St, Santa Ana, CA 92704
            </p>
          </div>
          <div className='footer__copyright'>
            <p className='footer__copyright_text'>
              Arqlite <sup>TM</sup> {new Date().getFullYear()}
            </p>
          </div>
          <div className='footer__link-main-site'>
            <a
              className='footer__link'
              href='https://google.com'
              target='_blank'
              rel='noreferrer'
            >
              → Main corporate website
            </a>
          </div>
        </section>
      </Section.Footer>
    </footer>
  );
};
export default Footer;
