import React, { useState, useRef } from 'react';
import { Header, Footer } from "@/components";
import data from "../mockes/faq"

const Contato = () => {
    const initialState = {
        nome: '',
        email: '',
        mensagem: '',
    };
    
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário enviados:', formData);
        setFormData(initialState);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        background: "#E0E4EC", 
        backgroundImage: 'url("https://source.unsplash.com/random")',  // Exemplo de URL do Unsplash

    };

    const contatoSectionStyle = {
        width: '45%',
        margin: '20px 0 20px 0',     
        padding: '20px 20px 20px 0',     
        borderRadius: '10px',
        background: '#f5f5f5',
        textAlign: 'center',
        marginBottom: '20px', 
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    const formSideStyle = {
        width: '55%',
        padding: '20px',     
        margin: '20px 0 20px 20px',     
        borderRadius: '10px',
        background: '#f5f5f5',
        marginBottom: '20px',
       
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '5px',
    };

    const faqSectionStyle = {
        width: '100%',
        padding: '20px',
        borderRadius: '10px',
        background: '#f5f5f5',
    };

    const faqItemStyle = {
        marginBottom: '10px',
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#022F07',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <>
            <Header />

            <div style={containerStyle}>
                <div className='container d-flex' style={{ padding: 0 }}>
                    <div style={contatoSectionStyle}>
                        <h2>Informações de Contato</h2>
                        <p>Endereço: Rua Exemplo, 123</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: contato@exemplo.com</p>
                    </div>

                    <div style={formSideStyle}>
                        <h2>Entre em Contato</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />

                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />

                            <button type="submit" style={buttonStyle}>
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>

                <div className='container' style={faqSectionStyle}>
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    {data?.map((item, index) => (
                        <div key={index} style={faqItemStyle}>
                            <details>
                                <summary>{item.pergunta}</summary>
                                <p>{item.resposta}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contato;
