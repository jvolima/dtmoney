import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.priceFormatted}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}