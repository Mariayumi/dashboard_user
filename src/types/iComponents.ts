import type React from "react";
import type { Dimensoes, Estilo } from "./iEstilos";

export interface iContainer extends Dimensoes {
  children: React.ReactNode;
}

export interface iMetricas {
  medidas: {
    titulo: string;
    valor: string | number;
    medida?: string;
    tendencia: number;
  }[];
}

export interface iBotao extends Estilo {
  onClick?: () => void;
  disabled?: boolean;
  prefixo?: React.ReactNode;
  sufixo?: React.ReactNode;
  label?: string;
}

export interface iSeletor extends Estilo {
  options?: { value: string; label: string }[];
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
}

export interface iGraficoLinhas {
  data: unknown[];
  dataKeyX: string;
  dataKeyY?: string[];
  configLinhas: iLinhaConfig[];
  label?: string;
  stroke?: iStrokeGrafico;
  className?: string;
  legenda?: boolean;
}

export interface iLinhaConfig {
  dataKey: string;
  cor: string;
  nome?: string;
  tipo?: "monotone" | "linear" | "basis" | "step" | "natural";
  strokeWidth?: number;
  yAxisId?: string;
  strokeDasharray?: string;
}

export interface iStrokeGrafico {
  cor?: string;
  dasharray?: string;
  vertical?: boolean;
  horizontal?: boolean;
}
