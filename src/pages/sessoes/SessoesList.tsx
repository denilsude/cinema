import { useEffect, useState } from "react";
import { sessoesService } from "../../services/sessoes";
import { filmesService } from "../../services/filmes";
import { salasService } from "../../services/salas";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import type { Sessao, Filme, Sala } from "../../types";

export default function SessoesList() {
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);
  const navigate = useNavigate();

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    const [listaSessoes, listaFilmes, listaSalas] = await Promise.all([
      sessoesService.listar(), filmesService.listar(), salasService.listar()
    ]);
    setSessoes(listaSessoes); setFilmes(listaFilmes); setSalas(listaSalas);
  }

  function getNomeFilme(id: any) {
    const f = filmes.find(x => String(x.id) === String(id));
    return f ? f.titulo : "---";
  }

  function getGeneroFilme(id: any) {
    const f = filmes.find(x => String(x.id) === String(id));
    return f ? f.genero : "";
  }

  function getDuracaoFilme(id: any) {
    const f = filmes.find(x => String(x.id) === String(id));
    return f ? f.duracao : 0;
  }

  function getClassificacaoFilme(id: any) {
    const f = filmes.find(x => String(x.id) === String(id));
    return f ? f.classificacao : "";
  }

  function getSalaInfo(id: any) {
    const s = salas.find(x => String(x.id) === String(id));
    return s ? { numero: s.numero, capacidade: s.capacidade } : null;
  }

  async function remover(id: any) {
    if (confirm("Cancelar esta sessão?")) {
      await sessoesService.remover(id); carregar();
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-5 pb-4 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
        <div className="mb-3">
          <i className="bi bi-ticket-perforated display-1" 
             style={{ color: 'var(--primary-color)', filter: 'drop-shadow(0 0 30px rgba(255, 107, 0, 0.6))' }}>
          </i>
        </div>
        <h2 className="fw-bold mb-2 titulo-destaque" style={{ fontSize: '2.5rem' }}>
          Sessões Disponíveis
        </h2>
        <p className="lead text-muted mb-4">Escolha o horário perfeito para seu filme</p>
        <Button onClick={() => navigate("/sessoes/novo")} variant="primary" size="lg" className="px-5">
          <i className="bi bi-plus-circle me-2"></i>Agendar Nova Sessão
        </Button>
      </div>

      {/* Grid de Sessões */}
      <div className="row g-4">
        {sessoes.map((s) => {
          const dataObj = new Date(s.horarioExibicao);
          const salaInfo = getSalaInfo(s.salaId);
          const lugaresOcupados = s.lugaresOcupados?.length || 0;
          const capacidadeTotal = salaInfo?.capacidade || 0;
          const disponibilidade = capacidadeTotal > 0 
            ? Math.round(((capacidadeTotal - lugaresOcupados) / capacidadeTotal) * 100)
            : 0;

          return (
            <div key={s.id} className="col-md-6 col-xl-4">
              <div className="card h-100 hover-card" style={{ 
                borderLeft: disponibilidade > 50 ? '4px solid var(--success-color)' : 
                            disponibilidade > 20 ? '4px solid var(--accent-gold)' : 
                            '4px solid var(--danger-color)'
              }}>
                <div className="card-body p-4">
                  
                  {/* Cabeçalho do Card */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.3rem' }}>
                        {getNomeFilme(s.filmeId)}
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <span className="badge bg-dark border border-secondary">
                          <i className="bi bi-tag me-1"></i>
                          {getGeneroFilme(s.filmeId)}
                        </span>
                        <span className="badge bg-warning text-dark">
                          {getClassificacaoFilme(s.filmeId)}
                        </span>
                        <span className="badge bg-dark border border-secondary">
                          <i className="bi bi-clock me-1"></i>
                          {getDuracaoFilme(s.filmeId)} min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Informações da Sessão */}
                  <div className="bg-dark bg-opacity-25 rounded p-3 mb-3">
                    <div className="row g-3 text-center">
                      <div className="col-6">
                        <div className="border-end border-secondary pe-3">
                          <i className="bi bi-calendar3 d-block mb-2" 
                             style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>
                          </i>
                          <div className="fw-bold" style={{ fontSize: '1.1rem' }}>
                            {dataObj.getDate().toString().padStart(2, '0')}
                          </div>
                          <small className="text-muted text-uppercase">
                            {dataObj.toLocaleString('pt-BR', { month: 'short' })}
                          </small>
                        </div>
                      </div>
                      <div className="col-6">
                        <i className="bi bi-clock-fill d-block mb-2" 
                           style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>
                        </i>
                        <div className="fw-bold" style={{ fontSize: '1.1rem' }}>
                          {dataObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                        <small className="text-muted">
                          {dataObj.toLocaleDateString('pt-BR', { weekday: 'short' })}
                        </small>
                      </div>
                    </div>
                  </div>

                  {/* Sala e Disponibilidade */}
                  <div className="d-flex justify-content-between align-items-center mb-3 p-2 rounded"
                       style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div>
                      <i className="bi bi-door-open me-2" style={{ color: 'var(--text-secondary)' }}></i>
                      <span className="fw-bold">Sala {salaInfo?.numero}</span>
                    </div>
                    <div className="text-end">
                      <div className={`fw-bold ${disponibilidade > 50 ? 'text-success' : disponibilidade > 20 ? 'text-warning' : 'text-danger'}`}>
                        {capacidadeTotal - lugaresOcupados} lugares
                      </div>
                      <small className="text-muted">de {capacidadeTotal}</small>
                    </div>
                  </div>

                  {/* Barra de Disponibilidade */}
                  <div className="mb-3">
                    <div className="progress" style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: `${disponibilidade}%`,
                          background: disponibilidade > 50 ? 'var(--success-color)' : 
                                     disponibilidade > 20 ? 'var(--accent-gold)' : 
                                     'var(--danger-color)'
                        }}>
                      </div>
                    </div>
                    <small className="text-muted">
                      {disponibilidade}% disponível
                    </small>
                  </div>

                  {/* Preço */}
                  <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded"
                       style={{ background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.1), rgba(255, 215, 0, 0.05))' }}>
                    <span className="text-muted">Ingresso</span>
                    <span className="fw-bold" style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>
                      R$ {Number(s.valorIngresso).toFixed(2)}
                    </span>
                  </div>

                  {/* Botões de Ação */}
                  <div className="d-grid gap-2">
                    <Button 
                      className="py-3 fw-bold" 
                      variant="success" 
                      onClick={() => navigate(`/venda/${s.id}`)}
                      disabled={disponibilidade === 0}
                    >
                      <i className="bi bi-cart-check-fill me-2"></i>
                      {disponibilidade > 0 ? 'COMPRAR INGRESSO' : 'ESGOTADO'}
                    </Button>
                    
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-sm btn-outline-secondary flex-grow-1"
                        onClick={() => navigate(`/sessoes/${s.id}`)}
                      >
                        <i className="bi bi-pencil me-1"></i>
                        Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => remover(s.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mensagem quando não há sessões */}
      {sessoes.length === 0 && (
        <div className="text-center py-5">
          <i className="bi bi-film display-1 text-muted mb-3 d-block"></i>
          <h4 className="text-muted">Nenhuma sessão agendada</h4>
          <p className="text-muted mb-4">Comece agendando uma nova sessão</p>
          <Button onClick={() => navigate("/sessoes/novo")} variant="primary" size="lg">
            <i className="bi bi-plus-circle me-2"></i>Agendar Primeira Sessão
          </Button>
        </div>
      )}
    </div>
  );
}