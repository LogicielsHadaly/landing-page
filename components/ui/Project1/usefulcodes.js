// Show code in api results in table form
<div>
  {hasResults ? (
    <table>
      <tr>
        <th>Open</th>
        <th>Close</th>
        <th>Low</th>
        <th>High</th>
        <th>Candle Color</th>
      </tr>
      {stockApiData.open.map((stock, i) => (
        <tr>
          {/* Canlesticks: Green = close price > open price, Red = open price > close price */}
          <td>{stock}</td>
          <td>{stockApiData.close[i]}</td>
          <td>{stockApiData.low[i]}</td>
          <td>{stockApiData.high[i]}</td>
          <td>
            {stockApiData.close[i] > stockApiData.open[i] ? "Green" : "Red"}
          </td>
        </tr>
      ))}
    </table>
  ) : (
    <p>Nothing</p>
  )}
</div>;
