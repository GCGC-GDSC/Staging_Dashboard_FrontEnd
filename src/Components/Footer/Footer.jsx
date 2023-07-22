import React from "react"
import "./Footer.style.scss"
// import Logo from '../../assets/Sarthaka.png'
import {NavLink} from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
const Footer = () => {
    return (
      <div className="FooterStyle">

        <div className="footercontainer">
            
              <div className="meetTeam">
              <NavLink className='navbar-link'  exact to = '/team'>
                      <span style={{color:"black"}}>
                          Meet the team
                      </span>
                </NavLink>
                    <span style={{color:"black", marginLeft:"2px",marginRight:"14px"}}>
                        <GroupsIcon fontSize="large"/>
                    </span>
              {/* <img src={Logo} alt="GDSC"/> */}
              </div>
             <div className="rightSide">
              <span>Powered by GCGC</span>
              <span>&#169;Copyright 2022</span>
              </div>

        </div>
      </div>
    );
  };
  export default Footer;