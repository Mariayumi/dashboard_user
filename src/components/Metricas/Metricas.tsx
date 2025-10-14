import { MoveRight, TrendingDown, TrendingUp } from "lucide-react";
import type { iMetricas } from "../../types/iComponents";

export default function Metricas(props: iMetricas) {
    const formatarValor = (valor: number) => {
        if (valor >= 1000) {
            const abreviado = (valor / 1000).toFixed(valor % 1000 === 0 ? 0 : 1);
            return `${abreviado}K`;
        }
        return valor.toString();
    };

    return (
        <div style={{ display: "flex", gap: "96px" }}>
            {props.medidas.map((medida, index) => {
                let tendenciaCor = "var(--positivo)";
                let tendenciaSinal = <TrendingUp />;

                if (medida.tendencia < 0) {
                    tendenciaCor = "var(--negativo)";
                    tendenciaSinal = <TrendingDown />;
                } else if (medida.tendencia === 0) {
                    tendenciaCor = "var(--cor-secundaria)";
                    tendenciaSinal = <MoveRight />;
                }

                return (
                    <div key={index}>
                        <p
                            style={{
                                fontSize: "20px",
                                color: "var(--cor-secundaria)",
                                fontWeight: "400",
                                margin: "0px",
                            }}
                        >
                            {medida.titulo}
                        </p>

                        <h3
                            style={{
                                fontSize: "38px",
                                color: "var(--cor-principal)",
                                fontWeight: "600",
                                marginTop: "15px",
                                marginBottom: "21px",
                            }}
                        >
                            {formatarValor(Number(medida.valor))}
                            {medida.medida ?? ""}
                        </h3>

                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: tendenciaCor,
                                fontSize: "15px",
                                fontWeight: "500",
                            }}
                        >
                            {tendenciaSinal}
                            {Math.abs(medida.tendencia)}%
                        </span>
                    </div>
                );
            })}
        </div>
    )
}