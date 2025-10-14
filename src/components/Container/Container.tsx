import type { iContainer } from "../../types/iComponents"
import "./Container.css"

export default function Container(props: iContainer) {
    return (
        <div 
            style={{
                position: "relative", 
                padding: props.padding ?? "30px",
                margin: props.margin ?? "0px",
                width: props.width ?? "auto",
                height: props.height ?? "100%",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--borda)",
                borderRadius: "10px",
                boxShadow: "0 1px 2px 0px var(--sombra)",
                overflow: "hidden", 
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "50px",
                    zIndex: "10", 
                    height: "0", 
                    width: "15%", 
                    borderLeft: "10px solid transparent", 
                    borderRight: "10px solid transparent", 
                    borderTop: "6px solid var(--base)", 
                    marginLeft: "-20px", 
                }}
            ></div>
            {props.children}
        </div>
    )
}