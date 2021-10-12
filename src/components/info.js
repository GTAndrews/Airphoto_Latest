import React, { useState } from 'react';
import { Link, Router } from '@reach/router';
import { Nav, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Home from 'components/pages/infoHome';
import ToolHelp from 'components/pages/toolHelp';
import Citation from 'components/pages/citation';
import Contact from 'components/pages/contact';
import Breadcrumb from 'components/Breadcrumb';
import logo from'images/TU_Library & Archives logo condensed.svg';
import NavbarText from 'reactstrap/lib/NavbarText';


const InfoModal = (props) => {

  const {className} = props;
  const [modal, setModal] = useState(false); // Info Modal definition
  const modaltoggle = () => setModal(!modal);

  const items = [
    { to: '/airphoto/', label: 'Info Home' },
    { to: '/airphoto/toolHelp', label: 'Tool Help'},
    { to: '/airphoto/citation', label: 'Citation' },
    { to: '/airphoto/contact', label: 'Contact' }
  ]

  return (
    <Nav className="justify-content-end" navbar>
      <NavLink href='#' onClick={modaltoggle} style={{right: "135pt", position: "absolute", top: "50%", transform: "translateY(-50%)"}}>
        <h3>App Info &nbsp;</h3>
      </NavLink>
      <NavbarText style={{right: "135pt", position: "absolute", top: "50%", transform: "translateY(-50%)"}}><h2>|</h2></NavbarText>
      <NavLink href= "https://www.trentu.ca/library/frontpage" target='_blank' rel='noopener noreferrer' style={{right: "1%", position: "absolute", top: "50%", transform: "translateY(-50%)"}}>
        <img src={logo} alt='Trent University Crest, reload application' height="55"/>
      </NavLink>
      <Modal isOpen={modal} toggle={modaltoggle} className={className} size="lg">
        <ModalHeader toggle={modaltoggle}>Airphoto Application Information</ModalHeader>
        <ModalBody>
          <Breadcrumb>
            {items.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </Breadcrumb>
          <Router>
            <Home path='/airphoto/' />
            <ToolHelp path='/airphoto/toolHelp' />
            <Citation path='/airphoto/citation' />
            <Contact path='/airphoto/contact' />
          </Router>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={modaltoggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </Nav>
  );
}

export default InfoModal;

// import MaDGIC_logo from'images/MaDGIC_GlobeIcon_WhiteText.svg';
// https://madgic.trentu.ca/airphoto/files/citing_air_photos.pdf 

            /* <p>This application depicts the locations of Trent University's Airphoto collections.<br></br>
            This is a project of the <i>Maps, Data & Government Information Centre (MaDGIC)</i>.</p>
            <hr></hr>
            <b>Help Content</b>
            <p>- <a href={citation} alt='Citing Air Photos' target='_blank' rel='noopener noreferrer'>Citing Airphotos Documentation</a> can be downloaded via this link.<br></br>
            - The Tools menu contains various tools for filtering and locating airphotos.<br></br>
            - Switching the Collection from the top-right will focus the map to the specific Collection selected.<br></br>
            - The Down Arrow on the left of the Search widget will open additional search options. The deafult will search any location, address or Postal Code. The other options are specific to the Air Photo Collection.</p> */
