import {React,useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  
  const [isOpen, setIsOpen] = useState(false)
useEffect(() => {
  document.body.classList.toggle('toggle-sidebar', isOpen);
},[isOpen])

  return (
    <footer className="footer" style={{ marginTop: "50px" }}>
      <Container className="container text-center mb-2">
        
        
      </Container>

      <div className="copyright">
      &copy; Copyright <strong><span>A-soft</span></strong> All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="">Manoj Adikari</a>
      {location.pathname !== '/' && (
          <Button style={{display: 'flex'}}
            variant='dark'
            className="mb-3"
            onClick={() => 
              navigate(-1)
            }
          >
            &larr; Go Back
          </Button>
        )}
    </div>
    </footer>
  );
};

export default Footer;
