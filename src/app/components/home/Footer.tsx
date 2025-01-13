const Footer = () => {
  return (
    <footer>
      <div className="container section">
        <div className="up">
          <div className="logo"></div>
          <ul className="social-icons">
            <li className="facebook">
              <a href="/homeFace">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="youtube">
              <a href="/homeyou">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="instagram">
              <a href="/homeinsta">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="search">
              <a href="/home">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="manual-border"></div>
      <div className="container section">
        <div className="down">
          <p>Copyright © 2025</p>
          <p>Powered By Abdullah Arafa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
