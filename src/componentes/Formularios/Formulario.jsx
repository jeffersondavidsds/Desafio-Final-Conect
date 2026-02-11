import { useState } from "react";
import styles from "../Formularios/formulario.module.scss";

export default function Formulario({ projeto, tipo, imagem, perfil, onClose }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  function validar() {
    if (!nome.trim()) return "Por favor, preencha seu nome.";
    if (!email.trim()) return "Por favor, preencha seu e-mail.";
    if (!telefone.trim()) return "Por favor, preencha seu telefone.";

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return "E-mail inválido.";

  const telOk = /^[0-9]{2} [0-9]{5}-[0-9]{4}$/.test(telefone);
    if (!telOk) return "Telefone inválido. Use o formato: 21 99999-9999";

  return "";
}


  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    const msg = validar();
    if (msg) return setErro(msg);

    setEnviando(true);

    const payload = {
      tipo: tipo || "",
      projeto: projeto || "",
      nome,
      email,
      telefone,
      criadoEm: new Date().toISOString(),
    };

    console.log("ENVIAR FORM:", payload);

    await new Promise((r) => setTimeout(r, 500));
    setEnviando(false);
    onClose?.();
  }

  return (
    <div className={styles.formWrap}>
      {/* TOPO */}
      <div className={styles.headerForm}>
        <div className={styles.headerImages}>
          {perfil && (
            <img
              src={perfil}
              alt="Foto de perfil"
              className={styles.avatar}
            />
          )}

          {imagem && (
            <img
              src={imagem}
              alt={projeto || "Ação selecionada"}
              className={styles.acaoThumb}
            />
          )}
        </div>

        <div className={styles.headerText}>
          <h1 className={styles.titulo}>{projeto}</h1>
          <p className={styles.subtitulo}>
            <span className={`${styles.badge} ${
            tipo === "Participar" ? styles.badgeParticipar : styles.badgeDoar}`}> {tipo} </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className={styles.forms}>
          <legend>DADOS PESSOAIS PARA CADASTRO VOLUNTÁRIADO</legend>

          <div className={styles.rowReadOnly}>
            <div>
              <label>Tipo</label>
              <input type="text" value={tipo || ""} readOnly />
            </div>
            <div>
              <label>Projeto</label>
              <input type="text" value={projeto || ""} readOnly />
            </div>
          </div>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                placeholder="Digite seu Nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="telefone">Telefone</label>
            <input
                type="tel"
                id="telefone"
                required
                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                placeholder="21 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
          
        </fieldset>

        {erro && <p className={styles.erro}><strong>{erro}</strong></p>}

        <div className={styles.footerButtons}>
          <button type="button" className={styles.btnGhost} onClick={onClose} disabled={enviando}>
            Cancelar
          </button>

          <button type="submit" className={styles.btnPrimary} disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
