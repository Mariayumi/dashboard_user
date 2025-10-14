import { ChevronRight, FileArchive } from 'lucide-react'
import './App.css'
import Botao from './components/Botao/Botao'
import Container from './components/Container/Container'
import Metricas from './components/Metricas/Metricas'
import Seletor from './components/Seletor/Seletor'
import { useState } from 'react'
import GraficoLinhas from './components/GraficoLinha/GraficoLinha'
import { data30Days } from './assets/mockado'

function App() {
  const [periodo, setPeriodo] = useState("last_30_days")

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", height: "90vh" }}>
      <Container margin={"0 auto"} height="fit-content">
        <div style={{display: "flex", justifyContent: "space-between", gap: "58px", marginBottom: "30px"}}>
          <Metricas
            medidas={[
              {
                titulo: "Users",
                valor: periodo === "last_30_days" ? 4567 : 1234,
                tendencia: periodo === "last_30_days" ? 195.7 : -50.7,
              },
              {
                titulo: "New Users",
                valor: periodo === "last_30_days" ? 3600: 789,
                tendencia: periodo === "last_30_days" ? 188 : -60.5,
              },
              {
                titulo: "Conversion",
                valor: periodo === "last_30_days" ? 1.65 : 0.98,
                medida: "%",
                tendencia: periodo === "last_30_days" ? 0 : -0.5,
              },
              {
                titulo: "Events",
                valor: periodo === "last_30_days" ? 30000 : 15000,
                tendencia: periodo === "last_30_days" ? -195.7 : 50.7,
              }
            ]}
          />
          <Botao
            onClick={() => alert("Botão clicado!")}
            prefixo={<ChevronRight size={16} fontWeight={700}/>}
            borderRadius='50px'
            border={"1px solid var(--borda)"}
            shadow={"0 1px 2px 0px var(--sombra)"}
            color="var(--cor-secundaria)"
            backgroundColor='transparent'
            margin="17px 0 0 0"
          />
        </div>

        <GraficoLinhas
          data={periodo === "last_30_days" ? data30Days : data30Days.slice(-7)}
          dataKeyX={'name'}
          configLinhas={[
            {
              dataKey: 'period',
              cor: 'var(--base)',
              nome: periodo === "last_30_days" ? 'Last 30 days' : 'Last week',
              tipo: 'monotone',
              strokeWidth: 2,

            },
            {
              dataKey: 'previous_period',
              cor: '#F5CF0F',
              nome: 'Previous period',
              tipo: 'monotone',
              strokeWidth: 2,
              strokeDasharray: "4 4",
            }
          ]}
        />
        <hr 
          style={{ 
            border: "1px solid var(--borda)", 
            margin: "28px 0 20px 0" 
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Seletor
            options={[
              { value: "last_30_days", label: "Last 30 days" },
              { value: "last_week", label: "Last week" },
            ]}
            onChange={(value) => setPeriodo(value)}
            value={periodo}
          />
          <Botao
            label="Open Report"
            onClick={() => alert("Botão clicado!")}
            prefixo={<FileArchive size={18} />}
            sufixo={<ChevronRight size={16} />}
          />
        </div>

      </Container>
    </div>
  )
}

export default App
