// ============================================
// COMPONENTE: GameCard
// Muestra una sola tarjeta de juego con imagen,
// nombre y contador de jugadores
// ============================================

import { useState } from "react";

// Colores de fondo de respaldo si la imagen no carga
const fallbackColors = [
  "#1a1a2e", "#16213e", "#0f3460", "#533483",
  "#2b2d42", "#1b4332", "#212529", "#3d405b",
];

function GameCard({ game, size }) {
  // size puede ser "large", "medium" o "small"
  // large  → carrusel principal
  // medium → segunda fila del carrusel
  // small  → sección juegos nuevos

  const [imgError, setImgError] = useState(false);

  // Escoge un color de respaldo basado en el id del juego
  const fallbackColor = fallbackColors[game.id % fallbackColors.length];

  // Clases de tamaño según el prop "size"
  const sizeClasses = {
    large: "gamecard gamecard--large",
    medium: "gamecard gamecard--medium",
    small: "gamecard gamecard--small",
  };

  const cardClass = sizeClasses[size] || "gamecard gamecard--medium";

  return (
    <div className={cardClass}>
      {/* Imagen del juego */}
      <div
        className="gamecard__img-wrapper"
        style={{ backgroundColor: fallbackColor }}
      >
        {!imgError ? (
          <img
            src={game.image}
            alt={game.title}
            className="gamecard__img"
            onError={() => setImgError(true)}
          />
        ) : (
          // Si la imagen falla, muestra el título en el fondo de color
          <div className="gamecard__img-fallback">
            <span>{game.title[0]}</span>
          </div>
        )}

        {/* Etiqueta de jugadores (arriba a la izquierda) */}
        {game.players > 0 && (
          <div className="gamecard__players">
            <span className="gamecard__players-icon">👤</span>
            <span>{game.players}</span>
          </div>
        )}

        {/* Etiqueta "N" de nuevo (arriba a la izquierda debajo de jugadores) */}
        {game.isNew && (
          <div className="gamecard__new-badge">N</div>
        )}

        {/* Overlay oscuro al hacer hover con el nombre */}
        <div className="gamecard__overlay">
          <p className="gamecard__title">{game.title}</p>
          <button className="gamecard__play-btn">▶ Jugar</button>
        </div>
      </div>

      {/* Nombre debajo de la tarjeta (solo en size small) */}
      {size === "small" && (
        <p className="gamecard__name">{game.title}</p>
      )}
    </div>
  );
}

export default GameCard;
