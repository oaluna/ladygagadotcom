import "./Footer.css";

const disclaimer = `A Project By Oscar Armando Luna - I do not own any of the media
            featured on this website.`;
const disclaimerCaps = disclaimer.toUpperCase();

const Footer = () => (
  <footer
    className="l-footer"
    role="contentinfo"
    style={{
      display: "flex",
      height: "100%",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingTop: "15vh",
      paddingBottom: 0,
    }}
  >
    <div className="menu-block-wrapper menu-block-asf_common_legal_nav menu-name-menu-legal parent-mlid-0 menu-level-1">
      <ul className="menu" style={{ listStyle: "none" }}>
        <li className="first leaf menu-mlid-720">
          <a
            href="https://oscarluna.dev"
            rel="noreferrer"
            style={{ fontWeight: 700, fontSize: "30px", textAlign: "center", color: "#f16e70" }}
          >
            <p>{disclaimerCaps}</p>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
