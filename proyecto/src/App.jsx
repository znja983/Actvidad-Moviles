// Aquí se unen todos los componentes del grupo

// COMPAÑEROS:
// - Jesús: importa tu <Sidebar /> y <Header /> y reemplaza los comentarios
// - Dylan: importa tu <SearchBar /> y ponla dentro del Header
// - Juliana: importa tu <GameModal /> o similar para el juego funcional
// - Andrés: importa tu <LoginModal /> y <AuthContext> aquí
// ============================================

import GameFeed from "./components/GameFeed";
import GameCard from "./components/GameCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ==========================================
          JESÚS: Reemplaza esto con tu <Header />
          ========================================== */}
      <header className="app__header-placeholder">
        <p>[ Header de Jesús va aquí — barra superior con logo y búsqueda ]</p>
        {/* DYLAN: El buscador también va aquí dentro del header */}
      </header>

      {/* Contenedor principal: sidebar + contenido */}
      <div className="app__body">

        {/* ==========================================
            JESÚS: Reemplaza esto con tu <Sidebar />
            ========================================== */}
        <aside className="app__sidebar-placeholder">
          <p>[ Sidebar de Jesús va aquí ]</p>
        </aside>

        {/* ==========================================
            TOMÁS: El feed de juegos (tu parte)
            ========================================== */}
        <main className="app__main">
          <GameFeed />
        </main>

      </div>

      {/* ==========================================
          JULIANA: Aquí va tu modal/overlay del juego funcional
          Ejemplo: <GameModal /> — se muestra cuando el usuario hace click en jugar
          ========================================== */}

      {/* ==========================================
          ANDRÉS: Aquí va tu <LoginModal /> o <AuthProvider>
          ========================================== */}

    </div>
  );
}

export default App;
