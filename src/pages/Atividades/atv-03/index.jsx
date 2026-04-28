import { useState } from 'react'

import styles from './index.module.css'

function Atividade03() {
  const [acao, setAcao] = useState('Nenhuma')

  return (
    <div className={styles.container}>
      <h1>Atividade 3</h1>
      <h2>Ação selecionada: {acao}</h2>

      <div className="botoes">
        <button className={styles.verde} onClick={() => setAcao('Cadastrar')}>Cadastrar</button>
        <button className={styles.azul} onClick={() => setAcao('Editar')}>Editar</button>
        <button className={styles.laranja} onClick={() => setAcao('Listar')}>Listar</button>
        <button className={styles.vermelho} onClick={() => setAcao('Excluir')}>Excluir</button>
        <button className={styles.cinza} onClick={() => setAcao('Cancelar')}>Cancelar</button>
      </div>
    </div>
  )
}

export default Atividade03;