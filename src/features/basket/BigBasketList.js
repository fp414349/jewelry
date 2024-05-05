import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
//import { Icon,DeleteIcon } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import Icons from '../products/Icons';
import Avatar from "@mui/material/Avatar";
import { useNavigate } from 'react-router-dom';



const columns = [ 
  {
    field: "actions",
    headerName: "פעולות",
    sortable: false,
    width: 140,
    disableClickEventBubbling: true,
    renderCell: (params) => {
        return (
          
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
            
                <Icons item={params.row}/>
             </div>
        );
     }
    },
    {
      field: 'sum',  headerName: 'סכום', type: 'number', 
      width: 90,   
 
    },
    { field: 'qty', headerName: 'כמות', type:'number', width: 70 },

  { field: 'price', headerName: 'מחיר',type:'number', width: 70 },

     { field: 'name', headerName: 'מוצר', width: 130, textAlign:'right' }

];

export default function BigBasketList() {
  let navigation=useNavigate();
    let r=useSelector(st=>st.basket.basketArr);
    let s=useSelector(st=>st.basket.totalSum);
    let cnt=useSelector(state=>state.basket.totalCnt)
    let sum=useSelector(state=>state.basket.totalSum)
  let goToPaymant=()=>{
    navigation("/finish")
  }   
  return (
    <div style={{ height: 400, width: '50%', margin: '0 25%' ,textAlign:'center',alignItems:'center'}}>
      <DataGrid style={{alignItems:'center',textAlign:'right'}}
        rows={r}
        //,<Icon>add_circle</Icon>
        columns={columns}
        
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
      />
      <Button variant="contained" onClick={() => { goToPaymant() }}>לתשלום</Button>
        <h3>מחיר סך הכל:{sum}</h3>
        <h3>כמות מוצרים:{cnt}</h3>
    </div>
  );
}