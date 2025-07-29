const footerHtml = `

<footer class="footer">
<div class="footer-container">
    <div class="footer-brand">
    <h2>NR-Shoes</h2>
    <p>Step into style with comfort and confidence.</p>
    </div>
    
    <div class="footer-links">
    <h3>Quick Links</h3>
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </div>
    
    <div class="footer-social">
    <h3>Follow Us</h3>
    <div class="social-icons">
    <a href="#"><i class="fa-brands fa-facebook"></i>facebook</a>
    <a href="#"><i class="fa-brands fa-square-instagram"></i>Instagram</a>
    <a href="#"><i class="fa-brands fa-square-twitter"></i>Twitter</a>
    </div>
    </div>
    
    <div class="footer-newsletter">
    <h3>Subscribe</h3>
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
    </div>
    </div>
    
    <div class="footer-bottom">
    <p>&copy; 2025 NR-Shoes. All rights reserved.</p>
    </div>
    </footer>
    `;

const footerElement = document.querySelector(".footer-section");
footerElement.insertAdjacentHTML("afterbegin", footerHtml);
