/* --------------------------------- Imports -------------------------------- */

// [Import react components]

// [Import local folders/files]
// * stylesheets
import "./Footer.scss";
// * assets
import assets from "../../assets/index";

/* ------------------------------ Main function ----------------------------- */

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot_top">
        <h1 className="heading">Stay Tuned!</h1>
        {/* <p>Join our newsletter to get latest news & promotion.</p> */}
        {/* <div>
          <input name="email" type="email" placeholder="youremail@gmail.com" />
          <button>Join</button>
        </div> */}
      </div>
      <div className="foot_bottom">
        <img src={assets.MainLogo} alt="" />
      </div>
      {/* <img src={assets.Popcorn1} alt="" className="popcorn1" />
      <img src={assets.Popcorn1} alt="" className="popcorn2" /> */}
    </div>
  );
};

export default Footer;
