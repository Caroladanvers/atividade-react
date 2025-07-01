import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const About = () => {
    console.log("About sendo renderizado");
    return (
        <div className="p-4 text-white">
            <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
            <p>Esta é a página 'Sobre' do seu aplicativo React.</p>
            <div className="mt-4">
                <Link to="/">
                    <Button label="Voltar à Página Principal" className="p-button-secondary" />
                </Link>
            </div>
        </div>
    );
};

export default About;