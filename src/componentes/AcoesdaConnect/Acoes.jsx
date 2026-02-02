import multirao from '../../assets/mutirao.png';
import futuro from '../../assets/futuro.png';
import conecta from '../../assets/conecta.png';
import esporte from '../../assets/esporte.png';
import familia from '../../assets/familia.png';
import aulas from '../../assets/aulas.png';
import styles from './acoes.module.scss';

function Acoes() {
    return (
        
      <section className={styles.acoesContainer}>

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Alatsi&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      </style>

        <div className={styles.introAcoes}>
            <h1>Ações da Connect</h1>
            <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
        </div>
        <div className={styles.acoesCards}>
          <div className={styles.cards}>
            <img src={multirao} alt="Mutirão de reciclagem" />
            <h2>Mutirão de reciclagem</h2>
            <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
            <button className={styles.button}>Quero Participar</button>
          </div>
          <div className={styles.cards}>
            <img src={aulas} alt="Aulas de Tecnologia" />
            <h2>Aulas de Tecnologia</h2>
            <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
            <button className={styles.button}>Quero Participar</button>
          </div>
          <div className={styles.cards}>
            <img src={esporte} alt="Esporte e Inclusão" />
            <h2>Esporte e Inclusão</h2>
            <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
            <button className={styles.button}>Quero Participar</button>
          </div>
          <div className={styles.cards}>
            <img src={familia} alt="Instituto Grande Familia" />
            <h2>Instituto Grande Familia</h2>
            <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
            <button className={styles.button}>Quero Doar</button>
          </div>
          <div className={styles.cards}>
            <img src={futuro} alt="Livros vermelhos do projeto futuro na escola" />
            <h2>Projeto Futuro na Escola</h2>
            <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
            <button className={styles.button}>Quero Doar</button>
          </div>
          <div className={styles.cards}>
            <img src={conecta} alt="Pessoas fazendo manutenção de computadores" />
            <h2>Instituto Conecta Jovem</h2>
            <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.</p>
            <button className={styles.button}>Quero Doar</button>
          </div>
        </div>
        </section>
    );
}

export default Acoes;