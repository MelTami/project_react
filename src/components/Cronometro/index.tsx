import React, { useEffect, useState } from "react";
import style from "./Cronometro.module.scss";
import Relogio from "./Relogio";
import { ITarefa } from "../../types/ITarefa";
import { tempoParaSegundos } from "../../common/utils/time";
import Botao from "../Botao";
import classNames from "classnames";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  const cronometroClass = classNames(style.cronometro);
  const relogioClass = classNames(style.relogioWrapper);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={cronometroClass}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={relogioClass}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  );
}
