// ============================================
// COMPONENTE: GameFeed
// Contiene todo el feed de juegos:
// 1. Carrusel principal (featured)
// 2. Sección "Juegos Nuevos"
// ============================================

import { useState } from "react";
import GameCard from "./GameCard";
import { featuredGames, featuredGames2, newGames } from "../data/games";

function GameFeed() {
  // Estado para saber cuántos juegos nuevos mostrar
  // Empieza mostrando 5, el botón "ver más" carga más
  const [visibleNewGames, setVisibleNewGames] = useState(5);

  // Función para mostrar más juegos
  function handleShowMore() {
    setVisibleNewGames((prev) => prev + 5);
  }

  return (
    <div className="feed">

      {/* ======================================
          SECCIÓN 1: CARRUSEL PRINCIPAL
          Fila de 4 juegos grandes arriba
          ====================================== */}
      <section className="feed__featured">
        <div className="feed__featured-row feed__featured-row--top">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} size="large" />
          ))}
        </div>

        {/* Segunda fila del carrusel (juegos más pequeños) */}
        <div className="feed__featured-row feed__featured-row--bottom">
          {featuredGames2.map((game) => (
            <GameCard key={game.id} game={game} size="medium" />
          ))}
        </div>
      </section>

      {/* ======================================
          SECCIÓN 2: JUEGOS NUEVOS
          Grid de tarjetas pequeñas
          ====================================== */}
      <section className="feed__new-games">

        {/* Encabezado de la sección */}
        <div className="feed__section-header">
          <div className="feed__section-title">
            {/* El ícono "N" igual al de la página original */}
            <div className="feed__section-icon">N</div>
            <h2>JUEGOS NUEVOS</h2>
          </div>
          {/* Contador total de juegos nuevos */}
          <div className="feed__section-count">
            <span className="feed__count-n">N</span>
            <span>{newGames.length}</span>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <div className="feed__new-grid">
          {newGames.slice(0, visibleNewGames).map((game) => (
            <GameCard key={game.id} game={game} size="small" />
          ))}
        </div>

        {/* Botón "Ver más" — solo aparece si hay más juegos */}
        {visibleNewGames < newGames.length && (
          <div className="feed__show-more">
            <button className="feed__show-more-btn" onClick={handleShowMore}>
              Ver más juegos
            </button>
          </div>
        )}
      </section>

    </div>
  );
}

export default GameFeed;
