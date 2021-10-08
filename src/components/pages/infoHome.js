import React from 'react';

const Home = ({ children }) => (
  <div>
    <h3>Airphoto Help</h3>
    <p>The Maps, Data and Government Information Centre (<a href='https://www.trentu.ca/library/madgic' alt='MaDGIC homepage' target='_blank' rel='noopener noreferrer'><i>MaDGIC</i></a>) at Trent University presents this all-in-one application for locating, viewing and downloading airphotos from our holdings. These holdings include airphotos from the National Air Photo Library (<i>NAPL</i>) and the Ontario Ministry of Natural Resources and Forestry (<i>MNRF</i>) airphoto collections. This is a public application and only conatains photos that are no longer under copyright (less than 50 years). For more recent photos, you will need an active Trent University account to log into the <a href='https://madgic-trentu-ca.proxy1.lib.trentu.ca/airphoto_secure/' alt='Airphoto Secure Site' target='_blank' rel='noopener noreferrer'>Secure Application</a>. The content in this information panel will guide you through the usage and functionality of the application as well as information on contacting MaDGIC.</p><br/>
    <p>Enjoy.</p>
    <div>{children}</div>
  </div>
)

export default Home