import type { iBotao } from "../../types/iComponents";

export default function Botao(props: iBotao){
    return(
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: props.padding ?? "0px 14px",
                margin: props.margin ?? "0px",
                width: props.width ?? "auto",
                height: props.height ?? "47px",
                backgroundColor: props.backgroundColor ?? "var(--base-transparente)",
                color: props.color ?? "var(--base)",
                border: props.border ?? "var(--borda-azul)",
                borderRadius: props.borderRadius ?? "28px",
                fontSize: props.fontSize ?? "18px",
                fontWeight: props.fontWeight ?? "600",
                cursor: props.disabled ? "not-allowed" : "pointer",
                opacity: props.disabled ? 0.6 : 1,
                transition: "background-color 0.3s, color 0.3s, transform 0.1s",
                boxShadow: props.shadow,
            }}
        >
            {props.prefixo}
            {props.label}
            {props.sufixo}
        </button>
    )
}