import React from 'react'
import { useState ,useEffect} from 'react';
import "./signal.css"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

const Signal = () => {
    // const [forex,setforex]=useState("");
    // const [type,settype]=useState("");
    // const [entry,setemail]=useState("");
    // const [tp1,settp1]=useState("");
    // const [status,setstatus]=useState("");
    // const [tp2,settp2]=useState("");
    // const [stoploss,setstoploss]=useState("");
    // const [profit,setprofit]=useState("");
    // const [signal,setsignal]=useState([forex,type,entry,tp1,tp2,stoploss,status1,profit]);
    

    const [rows,setSignal]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await axios.get("http://localhost:8085/api/signal/getall")
            setSignal(res.data)
        }
        fetchdata();
    },[])

  return (
    <div className="signal_main">
        <div className="top_signal">
        </div>
        <div className="middle_signal">
            <div className="t_signal">
                <span>Trading signals</span>
            </div>
            <div className="table">
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Forex</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Entry Point</th>
                        <th scope='col'>Tp 1 </th>
                        <th scope='col'>Tp 2</th>
                        <th scope='col'>StopLoss</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Profit</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {rows.map((row)=>(
                    
                        <tr key={row._id}>
                            
                            <td>
                                <p className='fw-normal mb-1'>{row.forex}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{row.type}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{row.entry} </p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{row.tp1}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{row.tp2} </p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{row.stoploss} </p>
                            </td>
                            <td>
                                <MDBBadge color='success' pill>
                                {row.status}
                                </MDBBadge>
                            </td>
                            <td>
                                <MDBBtn color='link' rounded size='sm'>
                                {row.profit}
                                </MDBBtn>
                            </td>
                        </tr>
                    ))}    
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
        <div className="footer">

        </div>
    </div>
  )
}

export default Signal