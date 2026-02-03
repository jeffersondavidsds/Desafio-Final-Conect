import image from '../../assets/fotoperfil.png';
import styles from '../Perfil/perfil.module.scss';


function Perfil() {
  return (
    
    <section className={styles.container}>
    <div className={styles.perfilContainer}>
      <img src={image} alt="Foto de Perfil" />
      <div className={styles.info}>
    <div className={styles.perfil}>
      <h1>Jefferson David</h1>
      <h3>Voluntário Ativo</h3>
      <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
    </div>
    <div className={styles.local}>
      <a>Rio de Janeiro</a>
      <a>jeffersondavidsd@gmail.com</a>
      <a>Membro desde 2026</a>
    </div>
    <div className={styles.atividades}>
      <a>Educação</a>
      <a>Meio Ambiente</a>
      <a>Assistência Social</a>
      <a>Design</a>
    </div>
    </div>
    </div>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    </style>

    </section>
  );
}

export default Perfil;