import { useState } from "react";

import styles from './index.module.css';

function Atividade02() {  

   

    const [num, setNum] = useState(100);

     function handleIncrement () {
        setNum(num - 1);
    }

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
    <div>
      <div>
         <div className={styles.container}>
            <label 
                onClick={() => handleIncrement()}
                className={styles.botao}
            >-1</label>

            <label className={styles.texto}>{`Contador: ${num}`}</label>   

            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
         </div>
      </div>
     </div>

    );
}
export default Atividade02;