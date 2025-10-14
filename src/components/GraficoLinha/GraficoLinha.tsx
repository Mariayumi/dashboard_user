"use client";

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { iGraficoLinhas } from "../../types/iComponents";
import { useState } from "react";
import { Minus } from "lucide-react";


export default function GraficoLinhas(props: iGraficoLinhas) {
    const [hoveredLine, setHoveredLine] = useState<string | null>(null);

    return (
        <ResponsiveContainer width="100%" height={230}>
            <AreaChart data={props.data}>
                <CartesianGrid strokeDasharray={props.stroke?.dasharray} stroke={props.stroke?.cor || "var(--borda)"} horizontal={props.stroke?.horizontal || true} vertical={props.stroke?.vertical || false} />
                <XAxis
                    dataKey={props.dataKeyX}
                    height={50}
                    stroke="var(--borda)"
                    tickLine={{ stroke: 'var(--borda)', strokeWidth: 2 }}
                    strokeWidth={1}
                    tick={{
                        fill: 'var(--cor-secundaria)',
                        fontSize: 18,
                        dy: 5,
                        fontStyle: "regular"
                    }}
                    tickSize={22}
                    tickCount={7}
                />

                <YAxis stroke="var(--cor-secundaria)" strokeWidth={0} />

                <Tooltip />

                <defs>
                    {props.configLinhas.map((line, index) => (
                        <linearGradient key={index} id={`gradient_${line.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="1%" stopColor={line.cor} stopOpacity={0.1} />
                            <stop offset="99%" stopColor={line.cor} stopOpacity={0.2} />
                        </linearGradient>
                    ))}
                </defs>

                {props.configLinhas.map((line, index) => (
                    <Area
                        key={index}
                        type={line.tipo || "monotone"}
                        dataKey={line.dataKey}
                        stroke={line.cor}
                        strokeDasharray={line.strokeDasharray || ""}
                        strokeWidth={line.strokeWidth || 2}
                        activeDot={{ r: 5 }}
                        name={line.nome || line.dataKey}
                        fill={`url(#gradient_${line.dataKey})`}
                        opacity={
                            hoveredLine && hoveredLine !== (line.nome || line.dataKey)
                                ? 0.3
                                : 1
                        } // 🔥 controla a opacidade
                    />
                ))}


                <Legend
                    align="left"
                    height={30}
                    verticalAlign="bottom"
                    content={({ payload }) => (
                        <div style={{ display: "flex", gap: "16px", paddingTop: "10px" }}>
                            {payload?.map((entry, index) => (
                                <span
                                    key={`item-${index}`}
                                    style={{
                                        color: "var(--cor-principal)",
                                        fontWeight: hoveredLine === entry.value ? "semibold" : "regular",
                                        opacity: hoveredLine && hoveredLine !== entry.value ? 0.4 : 1,
                                        cursor: "pointer",
                                        transition: "opacity 0.3s",
                                        display: "flex",
                                        fontSize: "18px",
                                        marginTop: "10px"
                                    }}
                                    onMouseEnter={() => setHoveredLine(String(entry.value))}
                                    onMouseLeave={() => setHoveredLine(null)}
                                >
                                    <Minus color={entry.color} size={21} />{entry.value}
                                </span>
                            ))}
                        </div>
                    )}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
