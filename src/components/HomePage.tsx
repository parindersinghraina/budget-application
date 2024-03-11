// HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for React Router navigation

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Your Website</h1>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur velit.
            Nullam hendrerit aliquam nisi, vel lacinia urna lacinia nec. Integer ac lectus vel justo
            maximus cursus.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>

      <div className="authentication-buttons">
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
