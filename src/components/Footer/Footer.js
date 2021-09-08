import "./Footer.css";

const Footer = () => (
  <footer
    className="l-footer"
    role="contentinfo"
    style={{
      maxWidth: "90vw",
      height: "100%",
      width: "100%",
      marginLeft: "3vw",
      alignItems: "flex-end",
      paddingTop: 0,
      paddingBottom: 0,
    }}
  >
    
          <div className="menu-block-wrapper menu-block-asf_common_legal_nav menu-name-menu-legal parent-mlid-0 menu-level-1">
            <ul className="menu" style={{listStyle: "none"}}>
              <li className="first leaf menu-mlid-720">
                <a
                  href="https://oscarluna.dev"
                  rel="noreferrer" style={{fontSize: "36px", textAlign:"center"}}
                >
              A Project By Oscar Armando Luna - I do not own any of the media featured on this website.
                </a>
              </li>
              
            </ul>
          </div>
     
     
    
  </footer>
);

export default Footer;
