import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './card.css';

function CardUpdate() {
  return (
    <CardGroup>
      <div className="row">
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341.png")} />
            <Card.Body>
              <Card.Title>Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (1).png")} />
            <Card.Body>
              <Card.Title>Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (2).png")} />
            <Card.Body>
              <Card.Title>Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Alpha-JWC-Ventures-Team 1.png")} />
            <Card.Body>
              <Card.Title>Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (3).png")} />
            <Card.Body>
              <Card.Title>Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (4).png")} />
            <Card.Body>
              <Card.Title>Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </CardGroup>
  );
}

export default CardUpdate;
