import {React, useState} from 'react'
import { Card, Container, Row, Col, Image, Modal, Button } from "react-bootstrap"
import makamsrengsengImage from "../assets/images/umum/makamsrengseng.jpeg"
import makamkaretbivakImage from "../assets/images/umum/makamkaretbivak.jpg"
import makamkampungkandangImage from "../assets/images/umum/makamkampungkandang.jpg"
import makamtanahkusirImage from "../assets/images/umum/makamtanahkusir.jpg"
import makamjerukpurutImage from "../assets/images/umum/makamjerukpurut.jpg"
import makamkebonpalaImage from "../assets/images/umum/makamkebonpala.jpg"

const MakamUmum = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Pilih Pemakaman
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
            <h4>Blok Makam</h4>
            
          

          <Card className="bg-dark text-white  rounded">
  
  <Card.Body>
  
          <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 1</Button>
          <Button variant='danger' style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 2</Button>
          <Button variant='danger' style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 3</Button>
          <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 4</Button>
          <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 5</Button>
          <Button variant='danger'  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 6</Button>
            <Button variant='danger'  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 7</Button>
            <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 8</Button>
            <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 9</Button>
            <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 10</Button>
            <Button variant='danger'  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 11</Button>
            <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 12</Button>
            <Button  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 13</Button>
          <Button variant='danger'  style={{width: 110, marginRight: 12, marginTop : 10}} onClick={() => {setModalShow2(true); setModalShow(false)}}>Makam 14</Button>
  
  </Card.Body>
</Card>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            
          </Modal.Footer>
        </Modal>
      );
    }

    //
    function MyVerticallyCenteredModal2(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Formulir Data Diri
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Isi Data Diri</h4>
           <div>Nama Lengkap : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Nomor Telepon : <input className='form control'/></div>
           <div style={{marginTop: 10}}>NIK Pemesan : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Alamat Lengkap : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Nama Jenazah : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Tanggal Lahir Jenazah : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Tanggal Wafat Jenazah : <input className='form control'/></div>
           <div style={{marginTop: 10}}>Agama Jenazah : <input className='form control'/></div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button variant="success" onClick={() => { setModalShow3(true); setModalShow2(false)}}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    //
    
    function MyVerticallyCenteredModal3 (props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Konfirmasi
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Apakah kamu yakin memilih makam ini?</h4>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
            <Button variant="success" onClick={() => { setModalShow4(true); setModalShow3(false)}}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    //

    function MyVerticallyCenteredModal4 (props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Makam Berhasil Dipesan</h4>
          
          </Modal.Body>
          <Modal.Footer>

            <Button variant="success" onClick={props.onHide}>ok</Button>
          </Modal.Footer>
        </Modal>
      );
    }


  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">PEMAKAMAN UMUM</h1>
        <br />
        <Row>
          <Col md={4} className="Makam" id="trending">
            <Card className="MakamImage">
              <Image src={makamsrengsengImage}
               alt="kuburan" 
               className="images"
               onClick={() => setModalShow(true)}
                />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makam Srengseng Sawah</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Makam">
            <Card className="MakamImage">
              <Image
                src={makamkaretbivakImage}
                alt="kuburan"
                className="images"
                onClick={() => setModalShow(true)}
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Makam Karet Bivak
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Makam">
            <Card className="MakamImage">
              <Image src={makamkampungkandangImage}
               alt="kuburan"
                className="images"
                onClick={() => setModalShow(true)}
                />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makam Kampung Kandang</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Makam">
            <Card className="MakamImage">
              <Image src={makamtanahkusirImage}
               alt="kuburan"
                className="images"
                onClick={() => setModalShow(true)}
                 />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makam Tanah Kusir</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Makam">
            <Card className="MakamImage">
              <Image
                src={makamjerukpurutImage}
                alt="kuburan"
                className="images"
                onClick={() => setModalShow(true)}
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makam Jeruk Purut</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Makam">
            <Card className="MakamImage">
              <Image src={makamkebonpalaImage}
               alt="kuburan"
                className="images" 
                onClick={() => setModalShow(true)}
                />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makam Kebon Pala</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
      <MyVerticallyCenteredModal4
        show={modalShow4}
        onHide={() => setModalShow4(false)}
      />

      </Container>
    </div>
  )
}

export default MakamUmum
