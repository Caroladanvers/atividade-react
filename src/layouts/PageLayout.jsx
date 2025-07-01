import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Button } from "primereact/button";

const PageLayout = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div className="flex flex-column min-h-screen" style={{ backgroundColor: '#1e1e2f', color: '#ffffff' }}>
            {/* Header Fixo no Topo */}
            <header className="fixed top-0 left-0 w-full bg-gray-900 p-4 shadow-4 flex justify-content-between align-items-center" style={{ zIndex: 1000 }}>
                <h2 className="text-white text-2xl m-0">Minha Aplicação</h2>

                {/* Menu de Navegação para Desktop */}
                <nav className="hidden md:flex align-items-center">
                    <Link
                        to="/"
                        className="p-button p-button-text mx-2 text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        🏠 Início
                    </Link>
                    <Link
                        to="/about"
                        className="p-button p-button-text mx-2 text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        ℹ️ Sobre
                    </Link>
                    {/* Link para a página de Login no cabeçalho (desktop) */}
                    <Link
                        to="/login"
                        className="p-button p-button-text mx-2 text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        🔒 Login
                    </Link>
                </nav>

                {/* Botão Hamburger para Mobile */}
                <div className="md:hidden">
                    <Button
                        icon="pi pi-bars"
                        className="p-button-text text-white"
                        onClick={() => setSidebarVisible(true)}
                        aria-label="Abrir Menu"
                    />
                </div>
            </header>

            {/* Conteúdo Principal (sem a barra lateral fixa) */}
            <main className="p-6 flex-1 overflow-auto mt-16"> {/* mt-16 compensa a altura do cabeçalho */}
                <div className="surface-card p-5" style={{ backgroundColor: '#2a2d3e', borderRadius: '10px', maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                    {children}
                </div>
            </main>

            {/* Sidebar Mobile */}
            <Sidebar
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
                position="right"
                className="md:hidden"
                style={{ width: '220px', backgroundColor: '#2a2d3e', color: '#ffffff' }}
            >
                <div className="p-4">
                    <h3 className="text-2xl font-bold mb-4 text-white">📌 Menu</h3>
                    <Link
                        to="/"
                        onClick={() => setSidebarVisible(false)}
                        className="p-button p-button-text mb-3 w-full text-left text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        🏠 Início
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setSidebarVisible(false)}
                        className="p-button p-button-text w-full text-left text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        ℹ️ Sobre
                    </Link>
                    {/* Link para a página de Login na Sidebar (mobile) */}
                    <Link
                        to="/login"
                        onClick={() => setSidebarVisible(false)}
                        className="p-button p-button-text w-full text-left text-white hover:text-primary-400"
                        style={{ textDecoration: 'none' }}
                    >
                        🔒 Login
                    </Link>
                </div>
            </Sidebar>
        </div>
    );
};

export default PageLayout;