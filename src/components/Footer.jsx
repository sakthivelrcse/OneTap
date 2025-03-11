import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} StreamSync. All Rights Reserved.</p>
      <p>
        Made with ❤️ by <a href="https://github.com/sakthivelrcse" target="_blank" rel="noopener noreferrer">Sakthivel R</a>
      </p>
    </footer>
  );
};

export default Footer;
