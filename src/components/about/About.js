import React from 'react';
import './about.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import twt from '../../assets/img/twitter.png';
import wa from '../../assets/img/Vector.png';
import fb from '../../assets/img/facebook.png';
import './about.css';
function About() {
  return (
    <div className="about-container">
      <Card style={{ width: '18rem' }}>
        <div style={{ display: 'flex' }}>
          <Card.Img variant="top" src={require("../../assets/img/Group 8797.png")} className="card-image" />
          <div className="card-content">
            <Card.Body>
              <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center', color: '#007CBD', fontWeight: '700', fontSize: '20px', lineHeight: '24.38px' }}>About DetikFinance Business Plan Competition 2023</Card.Title>
              <Card.Text style={{ color: '#1B1E28', fontWeight: '500', fontSize: '14px', lineHeight: '19px' }}>
                Detikfinance kali ini akan memberikan ruang bagi startup untuk networking dan memamerkan produk inovasinya di hadapan venture capital dan angel investor. Acara ini juga akan menghadirkan para pengembang teknologi dan pelaku bisnis untuk memberikan edukasi dan inspirasi bagi masyarakat Indonesia dan teknofilia mengenai perkembangan teknologi di Indonesia.<br />
                <span className="share-text">Share
                <img src={twt} className='icon'/>
                <img src={wa} className='icon'/>
                <img src={fb} className='icon'/>
                </span>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default About;
