import Socials from './socials';

const Footer = () => {

  return (
    <div id="footer">
      <div className="left">
        <span>(01) 830 2044</span>
        <span>28 Drumcondra Rd Lower, Dublin 9</span>
      </div>

      <div className="right">
        <Socials />
      </div>
    </div>
  )
}

export default Footer;
