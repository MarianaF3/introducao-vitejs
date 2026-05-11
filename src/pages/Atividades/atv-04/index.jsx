import { useState } from 'react';

export default function Atividade04() {
    
    const [qtd, setQtd] = useState('');
    const [produto, setProduto] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!qtd || !produto) return;

        setLista(prev => [...prev, { qtd, produto }]);

        setQtd('');
        setProduto('');
    };
    
    return (
        <div style={styles.page}>

            <div style={styles.container}>

                <h1 style={styles.titulo}>
                    Atividade 4 - Lista de compra
                </h1>

                <form onSubmit={handleSubmit} style={styles.formulario}>
                    
                    <input
                        type="number"
                        placeholder="Qtd"
                        value={qtd}
                        onChange={e => setQtd(e.target.value)}
                        style={styles.qtd}
                    />

                    <input
                        type="text"
                        placeholder="Produto..."
                        value={produto}
                        onChange={e => setProduto(e.target.value)}
                        style={styles.produto}
                    />
                
                    <button type="submit" style={styles.botao}>
                        Adicionar
                    </button>
                </form>

                <div style={styles.lista}>
                    {lista.map((item, index) => (
                        <div key={index} style={styles.item}>
                            {item.qtd}x {item.produto}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

const styles = {

    body: {
        margin: 0
    },


    page: {
        background: '#fafafa',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },

    container: {
        background: '#ffffff',
        padding: '25px',
        borderRadius: '12px',
        width: '420px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: 0,
    },

    titulo: {
        color: '#8B0000',
        marginBottom: '20px'
    },

    formulario: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
    },

    qtd: {
        width: '60px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        textAlign: 'center'
    },

    produto: {
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc'
    },

    botao: {
        background: '#8B0000',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '8px',
        cursor: 'pointer'
    },

    lista: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    item: {
        background: '#f1f1f1',
        padding: '12px',
        borderRadius: '10px'
    }
};