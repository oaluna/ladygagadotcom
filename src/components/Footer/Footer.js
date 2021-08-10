import "./Footer.css";

const Footer = () => (
  <footer
    className="l-footer"
    role="contentinfo"
    style={{
      marginTop: "73%",
      maxWidth: "90vw",
      height: "auto",
      width: "100%",
      marginLeft: "3vw",
      alignItems: "flex-end",
      paddingTop: 0,
      paddingBottom: 0,
    }}
  >
    <div className="l-region l-region--footer"></div>
    <nav>
      <div className="l-region l-region--footer-nav">
        <nav
          id="block-menu-block-iga-common-socials-footer"
          role="navigation"
          className="block block--menu-block block--menu-block-iga-common-socials-footer delta--iga-common-socials-footer"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h2 className="block__title">Social Links</h2>
          <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_footer menu-name-socials-menu parent-mlid-0 menu-level-1">
            <ul className="menu">
              <li className="first leaf menu-mlid-45131">
                <a
                  href="https://www.facebook.com/ladygaga"
                  className="icon icon-facebook follow-facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook
                </a>
              </li>
              <li className="leaf menu-mlid-45141">
                <a
                  href="https://www.instagram.com/ladygaga/"
                  className="icon icon-instagram follow-instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram
                </a>
              </li>
              <li className="leaf menu-mlid-45151">
                <a
                  href="http://snapchat.com/add/ladygaga"
                  className="icon icon-snapchat follow-snapchat"
                  target="_blank"
                  rel="noreferrer"
                >
                  snapchat
                </a>
              </li>
              <li className="leaf menu-mlid-45136">
                <a
                  href="https://twitter.com/ladygaga"
                  className="icon icon-twitter follow-twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </li>
              <li className="leaf menu-mlid-45146">
                <a
                  href="https://www.youtube.com/user/ladygagaofficial/featured"
                  className="icon icon-youtube follow-youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  youtube
                </a>
              </li>
              <li className="last leaf active menu-mlid-45171">
                <a
                  href="/#mailing-list"
                  className="bolero-modal-link icon icon-mail follow-mail subscribe-link active"
                >
                  Mail
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          id="block-menu-block-asf-common-legal-nav"
          role="navigation"
          className="block block--menu-block block--menu-block-asf-common-legal-nav delta--asf-common-legal-nav"
        >
          <div className="menu-block-wrapper menu-block-asf_common_legal_nav menu-name-menu-legal parent-mlid-0 menu-level-1">
            <ul className="menu">
              <li className="first leaf menu-mlid-720">
                <a
                  href="https://www.interscope.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  © 2021 Interscope Records
                </a>
              </li>
              <li className="leaf menu-mlid-3556">
                <a
                  href="https://privacy.umusic.com/"
                  title="Privacy Policy"
                  className="legal-privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="leaf menu-mlid-3561">
                <a
                  href="https://privacy.umusic.com/terms/"
                  title="Terms &amp; Conditions"
                  className="legal-toc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="leaf menu-mlid-45061 evidon-notice-link">
                <a
                  href="https://privacy.universalmusic.com/"
                  title="Cookie Consent"
                  className="hide"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookie Choices
                </a>
                <a
                  href="/"
                  className="evidon-consent-link"
                  tabIndex="0"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontSize: "11px",
                    color: "rgb(0, 0, 0)",
                  }}
                  rel="noreferrer"
                >
                  <img
                    src="https://c.evidon.com/pub/icong1.png"
                    className="evidon-consent-link-image"
                    alt="AdChoices Icon"
                    style={{ verticalAlign: "bottom" }}
                  />
                  <span
                    id="_evidon-link-text"
                    className="evidon-consent-link-text"
                    style={{ marginLeft: "6px" }}
                  >
                    Cookie Choices
                  </span>
                </a>
              </li>
              <li className="last leaf menu-mlid-39761">
                <a
                  href="https://privacy.universalmusic.com/CCPA"
                  title="Do not sell my personal information"
                  rel="noopener noreferrer"
                  className="push-global-ccpa global-ccpa"
                  target="_blank"
                >
                  Do not sell my personal information
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  </footer>
);

export default Footer;
