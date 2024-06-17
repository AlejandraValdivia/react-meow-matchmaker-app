const Footer = () => {
    return (
        <footer class="footer">
      <div class="footer-links">
        <div class="footer-link-list">
          <p class="footer-heading"><strong>Topics</strong></p>
          <a href="/dashboard">
            <p class="footer-link">Dashboard</p>
          </a>
          <a href="/fanclub">
            <p class="footer-link">Funny Pictures</p>
          </a>
          <a href="/learn-more">
            <p class="footer-link">Learn More</p>
          </a>
          <a href="/posts">
            <p class="footer-link">Posts</p>
          </a>
          <a href="/cats">
            <p class="footer-link">Cats</p>
          </a>
        </div>
        <div class="footer-link-list">
          <a href="/fanclub">
            <p class="footer-heading">
              <strong>Join our Community</strong>
            </p>
          </a>
          <a href="/fanclub">
            <p class="footer-link">Breaking</p>
          </a>
          <div class="footer-social">
            <a href="https://github.com/AlejandraValdivia">
              <i class="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alejandra-valdivia-developer/">
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/hyperlinkwebca/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-link-list">
          <p class="footer-heading"><strong>Go to</strong></p>
          <a href="/posts">
            <p class="footer-link">Posts</p>
          </a>
          <a href="/dashboard">
            <p class="footer-link">Dashboard</p>
          </a>
          <a href="/application-form">
            <p class="footer-link">Application Form</p>
          </a>
          <a href="/contact">
            <p class="footer-link">Contact</p>
          </a>
          <a href="/">
            <p class="footer-link">Home</p>
          </a>
        </div>
      </div>

      <div class="footer-iconTop">
        <a href="/">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
      <a href="https://github.com/AlejandraValdivia">
        <p class="footer-copyright">Copyright Alejandra Valdivia 2024</p>
      </a>
    </footer>
    )
}

export default Footer