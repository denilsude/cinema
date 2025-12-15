import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-5 py-5">
        <h1 className="display-3 fw-bold mb-3 titulo-destaque">
          Bem-vindo ao CineWeb
        </h1>
        <p className="lead mb-4" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
          <i className="bi bi-star-fill text-warning me-2"></i>
          A melhor experiência em cinema está aqui
          <i className="bi bi-star-fill text-warning ms-2"></i>
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/sessoes" className="btn btn-primary btn-lg px-5 py-3">
            <i className="bi bi-ticket-perforated-fill me-2"></i>
            COMPRAR INGRESSOS
          </Link>
          <Link to="/filmes" className="btn btn-outline-secondary btn-lg px-5 py-3">
            <i className="bi bi-camera-reels me-2"></i>
            VER FILMES
          </Link>
        </div>
      </div>

      {/* Cards de Ações Principais */}
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 destaque hover-card">
            <div className="card-body text-center py-5 d-flex flex-column">
              <div className="mb-4">
                <i className="bi bi-ticket-perforated-fill display-1" 
                   style={{ color: 'var(--primary-color)', filter: 'drop-shadow(0 0 20px rgba(255, 107, 0, 0.5))' }}>
                </i>
              </div>
              <h4 className="card-title fw-bold mb-3">Venda de Ingressos</h4>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Sistema rápido e intuitivo para venda de ingressos online
              </p>
              <Link to="/sessoes" className="btn btn-primary w-100 stretched-link py-2">
                <i className="bi bi-arrow-right-circle me-2"></i>
                Acessar Vendas
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 hover-card">
            <div className="card-body text-center py-5 d-flex flex-column">
              <div className="mb-4">
                <i className="bi bi-camera-reels-fill display-1" 
                   style={{ color: '#FFD700', filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))' }}>
                </i>
              </div>
              <h4 className="card-title fw-bold mb-3">Filmes em Cartaz</h4>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Gerencie o catálogo completo de filmes e lançamentos
              </p>
              <Link to="/filmes" className="btn btn-outline-secondary w-100 stretched-link py-2">
                <i className="bi bi-collection-play me-2"></i>
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 hover-card">
            <div className="card-body text-center py-5 d-flex flex-column">
              <div className="mb-4">
                <i className="bi bi-cup-straw display-1" 
                   style={{ color: '#00D9A3', filter: 'drop-shadow(0 0 20px rgba(0, 217, 163, 0.4))' }}>
                </i>
              </div>
              <h4 className="card-title fw-bold mb-3">Bomboniere</h4>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Controle de estoque de pipoca, refrigerantes e combos
              </p>
              <Link to="/lanches" className="btn btn-outline-secondary w-100 stretched-link py-2">
                <i className="bi bi-basket2 me-2"></i>
                Gerenciar Estoque
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 hover-card">
            <div className="card-body text-center py-5 d-flex flex-column">
              <div className="mb-4">
                <i className="bi bi-grid-3x3-gap-fill display-1" 
                   style={{ color: '#FF4757', filter: 'drop-shadow(0 0 20px rgba(255, 71, 87, 0.4))' }}>
                </i>
              </div>
              <h4 className="card-title fw-bold mb-3">Salas de Cinema</h4>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Configure salas, assentos e capacidade das sessões
              </p>
              <Link to="/salas" className="btn btn-outline-secondary w-100 stretched-link py-2">
                <i className="bi bi-gear me-2"></i>
                Configurar Salas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Destaques */}
      <div className="row g-4 mt-5">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-speedometer2 display-4 me-3" style={{ color: 'var(--primary-color)' }}></i>
                <div>
                  <h5 className="card-title mb-1 fw-bold">Sistema Rápido</h5>
                  <p className="text-muted small mb-0">Vendas em segundos</p>
                </div>
              </div>
              <p className="card-text text-muted">
                Interface otimizada para agilizar o processo de venda e melhorar a experiência do cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-phone display-4 me-3" style={{ color: 'var(--success-color)' }}></i>
                <div>
                  <h5 className="card-title mb-1 fw-bold">Totalmente Responsivo</h5>
                  <p className="text-muted small mb-0">Funciona em qualquer dispositivo</p>
                </div>
              </div>
              <p className="card-text text-muted">
                Gerencie seu cinema de qualquer lugar, seja no computador, tablet ou smartphone.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-shield-check display-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
                <div>
                  <h5 className="card-title mb-1 fw-bold">Seguro e Confiável</h5>
                  <p className="text-muted small mb-0">Dados protegidos</p>
                </div>
              </div>
              <p className="card-text text-muted">
                Sistema confiável com controle total sobre vendas, estoque e gerenciamento de sessões.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center mt-5 pt-5 pb-4">
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-3">
          <div className="d-flex align-items-center">
            <i className="bi bi-clock-history me-2" style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}></i>
            <div className="text-start">
              <div className="fw-bold">Horário de Funcionamento</div>
              <small className="text-muted">Todos os dias, 10h às 23h</small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2" style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}></i>
            <div className="text-start">
              <div className="fw-bold">Localização</div>
              <small className="text-muted">Shopping Center - 2º Piso</small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-telephone-fill me-2" style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}></i>
            <div className="text-start">
              <div className="fw-bold">Contato</div>
              <small className="text-muted">(00) 1234-5678</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}