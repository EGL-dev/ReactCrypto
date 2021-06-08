import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/core";
import baseEndPoinst from "../Apis/coin";
import {useSelector} from "react-redux";
import {selectCrypto} from "../Feactures/CryptoSlice";
import CoinRow from "../Components/CoinRow/CoinRow";




const HeaderCell = styled(TableCell)({
  fontWeight: "800px",
  fontSize: "16px",
  fontStyle: "italic",
});



const HomePage = () => {

const crypto = useSelector(selectCrypto)
const [coins,Setcoins]= useState([])
const [isLoading,setisLoading] = useState([false]);
useEffect(()=>{

        const fetchData = async()=>{
            setisLoading(true)
            try {
                const response = await baseEndPoinst.get("/coins/markets",{
                    params:{
                        vs_currency:"ars",
                        ids:crypto.join()
                    }
                })

                Setcoins(response.data)
                setisLoading(false)
            } catch (error) {
                console.log(error)
                
            }
            const response = await baseEndPoinst.get("/coins/markets",{
                params:{
                    vs_currency:"ars",
                    ids:crypto.join()
                }
            })
            Setcoins(response.data)
                console.log(coins)
        }
        fetchData()
    
},[crypto])


  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <HeaderCell>Image</HeaderCell>
            <HeaderCell>Symbol</HeaderCell>
            <HeaderCell>MktCap-Rank</HeaderCell>
            <HeaderCell>Current-Price</HeaderCell>
            <HeaderCell>Charts</HeaderCell>
            <HeaderCell>Price-1-day-%</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              coins.map(coin => (
                  <CoinRow key={coin.id} data={coin}/>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomePage;
