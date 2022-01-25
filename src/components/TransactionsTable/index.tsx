import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1000,00</td>
            <td>Casa</td>
            <td>02/01/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="withdraw">- R$6000,00</td>
            <td>Tecnologia</td>
            <td>15/01/2021</td> 
          </tr>
          <tr>
            <td>Desenvolvimento de aplicativo</td>
            <td className="deposit">R$15.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}