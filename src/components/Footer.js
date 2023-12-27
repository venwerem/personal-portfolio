import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/vivian-enwerem-b354a2179/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/venwerem?tab=repositories" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved. Made by Vivian with ❤️ </p>
      </Container>
     
    </footer>
  )
}
