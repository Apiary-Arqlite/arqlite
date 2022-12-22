
import arqliteLogo2 from '../images/arqlite-logo-2.svg';
import { Section } from './Section';
const Footer = () => {
  return (
    <footer>
      <Section.Footer>
        <section className='footer__container'>
          <img alt='arqlite logo' src={arqliteLogo2} className='footer__logo' />
          <div className='footer__column footer__column-solutions'>
            <p className='footer__column_title'>Solutions</p>
            <ul className='footer__column_container'>
              <li className='footer__column_item'>
                <a href='#construction' className='footer__link'>
                  For construction companies
                </a>
              </li>
              <li className='footer__column_item'>
                <a href='#recycle' className='footer__link'>
                  For plastic producers and recyclers
                </a>
              </li>
              <li className='footer__column_item'>
                <a href="#eco"className='footer__link'>For eco-conscious brands</a>
              </li>
            </ul>
          </div>
          <div className='footer__column footer__column-assistance'>
            <p className='footer__column_title'>Assistance</p>
            <ul className='footer__column_container'>
              <li className='footer__column_item'>
                <a href='#calculator' className='footer__link'>
                  Facility size calculator
                </a>
              </li>
              <li className='footer__column_item'>
                <a href='#calculator' className='footer__link'>
                  Revenue calculator
                </a>
              </li>
              <li className='footer__column_item'>
                <a href="#meeting"className='footer__link'>Arrange a meeting</a>
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
          <div className="footer__link-main-site">
            <a className="footer__link" href='https://google.com' target="_blank" rel="noreferrer">
              → Main corporate website
            </a>
          </div>
        </section>
      </Section.Footer>
    </footer>
  );
};
export default Footer;
