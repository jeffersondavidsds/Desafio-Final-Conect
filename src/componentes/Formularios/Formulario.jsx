import styles from "../Formularios/formulario.module.scss"


function Formulario() {
    return(
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Alatsi&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        </style>
    <fieldset>
        <legend>DADOS PESSOAIS PARA CADASTRO VOLUNTÁRIADO</legend>
        <label for="name">Nome:</label>
        <input type="text" name="name" id="Nome"
        placeholder="Digite seu Nome" required/>
      
        <p>Telefone</p>
        <input type="tel" id="telefone" name="telefone" required
        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
        placeholder="21 99999-9999">
        </input>
    </fieldset>
      </>
    );
}


export default Formulario