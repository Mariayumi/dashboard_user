export interface Dimensoes {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

export interface Borda {
  border?: string;
  borderRadius?: string;
}

export interface Texto {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

export interface Fundo {
  backgroundColor?: string;
  shadow?: string;
}

export interface Estilo extends Dimensoes, Borda, Texto, Fundo {}
