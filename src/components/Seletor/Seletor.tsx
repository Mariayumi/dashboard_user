import type { iSeletor } from "../../types/iComponents";
import "./Seletor.css"

export default function Seletor(props: iSeletor) {
    return (
        <div
            style={{
                border: props.border ?? "1px solid var(--borda)",
                borderRadius: props.borderRadius ?? "28px",
                width: "fit-content",
                boxShadow: props.shadow ?? "0 1px 2px 0px var(--sombra)",
                padding: props.padding ?? "4px 21px",
            }}
        >
            <select
                className="seletor"
                onChange={(event) => props.onChange?.(event.target.value)}
                value={props.value}
                style={{
                    margin: props.margin ?? "0px",
                    width: props.width ?? "auto",
                    height: props.height ?? "40px",
                    backgroundColor: props.backgroundColor ?? "transparent",
                    color: props.color ?? "var(--cor-principal)",
                    border: "none",
                    fontSize: props.fontSize ?? "18px",
                    fontWeight: props.fontWeight ?? "500",
                    cursor: props.disabled ? "not-allowed" : "pointer",
                    opacity: props.disabled ? 0.6 : 1,
                }}
            >
                {props.options && props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        style={{
                            backgroundColor: "#FFFF",
                            color: "var(--cor-principal)",
                            fontSize: props.fontSize ?? "16px",
                        }}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}