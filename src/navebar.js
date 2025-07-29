const navbar = `
 <div class="navbar">
      <div class="logo">
        <h2>
          NR-Shoes
        </h2>
      </div>
      <div class="list">
        <ul>
          <li><a href="/"> Home </a></li>
          <li><a href="/about"> About</a></li>
          <li><a href="/category"> Category</a></li>
          <li><a href="/help"> Help </a></li>
          <li><a href="/AddToCard" id="add-to-card"> <i class="fa-solid fa-cart-shopping"> 0 </i> </a> </li>
        </ul>
      </div>
    </div>
`;

const navbarElement = document.querySelector(".navbarElement");
navbarElement.insertAdjacentHTML("afterbegin", navbar);
