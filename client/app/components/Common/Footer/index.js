/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Customer Service</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>

            </div>
            <div className='block-content'>
              <ul>
              </ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>

              <h2>Team7 Final Project</h2>
              <br></br>
              <li>Minghui Qiu &nbsp;&nbsp;&nbsp;  qiu.min@northeastern.edu</li>
              <li>Xiaoyang Cai &nbsp;&nbsp;&nbsp;  cai.xiao@northeastern.edu</li>
              <li>Shaojun Bao &nbsp;&nbsp;&nbsp;  bao.sha@northeastern.edu</li>
              <li>Chao Yan &nbsp;&nbsp;&nbsp;  yan.chao@northeastern.edu</li>
              <li>Yuhui Xiao &nbsp;&nbsp;&nbsp;  xiao.yuhu@northeastern.edu</li><br></br>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} Team7</span>
        </div>
        <ul className='footer-social-item'>

        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
