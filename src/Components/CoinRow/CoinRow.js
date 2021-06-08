import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import BarChartIcon from "@material-ui/icons/BarChart";
import { CryptoImageCell } from "./style";

const CoinRow = ({
  data: {
    id,
    image,
    symbol,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
  },
}) => {
  return (
    <TableRow>
      <CryptoImageCell>
        <img src={image} alt="coin" />
      </CryptoImageCell>
      <TableCell>{symbol}</TableCell>
      <TableCell>{market_cap_rank}</TableCell>
      <TableCell>{current_price}</TableCell>
      <TableCell>
        <BarChartIcon />
      </TableCell>
      <TableCell>{price_change_percentage_24h}</TableCell>
    </TableRow>
  );
};

export default CoinRow;
