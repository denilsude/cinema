import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="./">
          <i className="bi bi-film me-2"></i>
          CineWeb
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/sessoes">
                <i className="bi bi-ticket-perforated me-2"></i>
                <span>Comprar Ingressos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/filmes">
                <i className="bi bi-camera-reels me-2"></i>
                <span>Em Cartaz</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/salas">
                <i className="bi bi-grid-3x3-gap me-2"></i>
                <span>Nossas Salas</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/lanches">
                <i className="bi bi-cup-straw me-2"></i>
                <span>Bomboniere</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}