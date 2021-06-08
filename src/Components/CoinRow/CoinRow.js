import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import BarChartIcon from "@material-ui/icons/BarChart";
import { CryptoImageCell, CryptoDeleteCell} from "./style";
import accounting from "accounting";
import  ArrowDropUpIcon  from "@material-ui/icons/ArrowDropUp";
import  ArrowDropDrowIcon  from "@material-ui/icons/ArrowDropDown";
import  DeleteIcon  from "@material-ui/icons/Delete";

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
    <TableRow className="table-row">
      <CryptoImageCell>
        <img src={image} alt="coin" />
      </CryptoImageCell>
      <TableCell>{symbol}</TableCell>
      <TableCell>{market_cap_rank}</TableCell>
      <TableCell>{accounting.formatMoney(current_price, "$")}</TableCell>
      <TableCell>
        <BarChartIcon />
      </TableCell>
      <CryptoDeleteCell>
        {price_change_percentage_24h > 0 ? (
          <div>
            <ArrowDropUpIcon style={{ color: "#00ff00" }} />
            <span style={{ color: "#00ff00" }}>
              {price_change_percentage_24h}
            </span>
          </div>
        ) : price_change_percentage_24h === 0 ? (
          <>{price_change_percentage_24h}</>
        ) : (
          <div>
            <ArrowDropDrowIcon style={{ color: "#ff0000" }} />
            <span style={{ color: "#ff0000" }}>
              {price_change_percentage_24h}
            </span>
          </div>
        )}
        <span className="delete-crypto" style={{color:"gray", cursor:"pointer"}}>
            <DeleteIcon />
        </span>
      </CryptoDeleteCell>
    </TableRow>
  );
};

export default CoinRow;
