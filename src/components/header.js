import React, {useState} from 'react';
import './Button.css';
import MaDGIC_logo from'images/MaDGIC_GlobeIcon_WhiteText.svg';
import InfoModal from 'components/info';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); // Toggle for Tools dropdown

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="https://www.trentu.ca/library/madgic" target='_blank' rel='noopener noreferrer'>
          <img src={MaDGIC_logo} alt='Maps, Data and Government Information Centre' height="65"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/airphoto" alt='Reload application' style={{fontWeight: "bold", color: "white"}}><h2>Airphoto Viewer</h2></NavLink>
            </NavItem>
            <InfoModal></InfoModal>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header; // Pass the App Header to the App main script

// Removed from header to add into Map Frame:
// import logo from'images/TU_Library & Archives logo condensed.svg';
// href= "https://www.trentu.ca/library/frontpage" target='_blank' rel='noopener noreferrer'>
// <img src={logo} alt='Trent University Crest, reload application' height="55"/>
// <NavItem>
// <NavLink href="https://www.trentu.ca/library/madgic" target='_blank' rel='noopener noreferrer' height="55"><img src={MaDGIC_logo} alt='Maps, Data and Government Information Centre'/></NavLink>
// </NavItem>
// import Tools from 'components/tools';
// import Collection from 'components/collection';
// <Tools></Tools>
// <NavbarText>&nbsp;&nbsp; <i>*** Photos from 1927 to 1971 are available to View and Download ***</i></NavbarText>
// <NavbarText>Collection (coming soon):&#160;</NavbarText>
// <Collection></Collection>