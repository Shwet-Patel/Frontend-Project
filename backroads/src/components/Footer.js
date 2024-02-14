import { pageLinks , socialLinks } from "../Data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
       
        <ul className="footer-links">
          {pageLinks.map ((item) => {
          return (
            <li key = {item.id}>
            <a href={item.href} className="footer-link">
              {item.text}
            </a>
          </li>
          );
        } )} 
        
        
        </ul>
        <ul className="footer-icons">
          {socialLinks.map ((item) => {
            return (
              <li key = {item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className={item.icon}></i>
            </a>
          </li>
          
            );
          })}
          
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;