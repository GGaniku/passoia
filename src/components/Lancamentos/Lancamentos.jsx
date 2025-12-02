import "./Lancamentos.scss";
import { useState } from "react";

// Import das imagens
import azul from "../../assets/img/Lancamentos/azul.png";
import vermelho from "../../assets/img/Lancamentos/vermelho.png";
import marrom from "../../assets/img/Lancamentos/marrom.png";
import base from "../../assets/img/Lancamentos/base.png";

import ex1 from "../../assets/img/Lancamentos/exemplo1.png";
import ex2 from "../../assets/img/Lancamentos/exemplo2.png";
import ex3 from "../../assets/img/Lancamentos/exemplo3.png";
import estrelas from "../../assets/img/Lancamentos/estrelas.svg";

// Import dos botões
import azulBtn from "../../assets/img/Lancamentos/azul-btn.png";
import vermelhoBtn from "../../assets/img/Lancamentos/vermelho-btn.png";
import marromBtn from "../../assets/img/Lancamentos/marrom-btn.png";
import baseBtn from "../../assets/img/Lancamentos/base-btn.png";

function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"

  const [cor, setCor] = useState(vermelho);

  return (
    <section className="lancamentos">
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <div className="produtosImg">
        <img src={ex1} alt="Exemplo 1 do produto" />
        <img src={ex2} alt="Exemplo 2 do produto" />
        <img src={ex3} alt="Exemplo 3 do produto" />
      </div>
      <img
        className="principalImg"
        src={cor}
        alt="Imagem Ilustrativa com Modelo"
      />

      <div className="cardLancamento">
        <img src={estrelas} alt="Símbolo de 5 estrelas"/>
        <h3>Matte Premium</h3>
        <p>Cores Disponíveis</p>
        <div className="coresBtn">
          <button onClick={() => setCor(marrom)}>
            <img src={marromBtn} />
          </button>
          <button onClick={() => setCor(azul)}>
            <img src={azulBtn} />
          </button>
          <button onClick={() => setCor(base)}>
            <img src={baseBtn} />
          </button>
          <button onClick={() => setCor(vermelho)}>
            <img src={vermelhoBtn} />
          </button>
        </div>

        <span className="descricaoTexto">
          <h3>Descrição</h3>
          <p>
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </span>
      </div>
    </section>
  );
}

export default Lancamentos;
