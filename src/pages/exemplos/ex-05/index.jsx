import { useState } from 'react';

import styles from './index.module.css';

export default function Exemplo05() {
    
    const [nome, setNome] = useState('');
    
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCadastros([...cadastros, nome])
    };
    
    return (
        <div className={styles.container}>

            <h1>Exemplo 5 - Formulário</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <label htmlFor="user">Nome do Usuário:</label>
                <input
                    id="user"
                    type="text"
                    placeholder='Insira seu nome aqui'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                
                <button type="submit">Enviar Cadastro</button>
            </form>

            <h2>Lista</h2>
            {
                cadastros.map(item => <p key={item}>{item}</p>)
            }
        </div>
    );
}