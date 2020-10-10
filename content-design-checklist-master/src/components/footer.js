import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section className='about'>
        <div className='about-wrap'>
          <div className='about-items'>
            <h2>About</h2>
            <p>Digital Content Design is a free web resource for providing design principal information and allowing teams to create their own content design checklist.</p>
          </div>
        </div>
      </section>
      
      <section className='navigation-footer'>
        <div className='navigation-footer-wrap'>
          <div className='navigation-items'>
            <Link to ="/"> Strategy </Link> • 
            <Link to ="/"> Scope </Link> • 
            <Link to ="/"> Structure </Link> • 
            <Link to ="/"> Skeleton </Link> • 
            <Link to ="/"> Surface </Link>
          </div>
        </div>
      </section>

      <section className='copyright'>
        <div className='copyright-wrap'>
        <small className='footer-copyright'>Digital Content Design © 2020</small>
      </div>

      </section>
    </div>
  );
}

export default Footer;
