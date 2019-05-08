import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="copyrightInformation">Copyright © 2018 ENTHERAPY</p>
          </div>
          <div className="column">
            <p className="legalInformation">
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006369"
                target="_blank"
                rel="noopener noreferrer"
              >
                沪公网安备 31011202006369号
              </a>{' '}
              <span>
                <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="noopener noreferrer">
                  沪ICP备17000915号-2
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
