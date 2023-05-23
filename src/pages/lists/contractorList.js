import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import React, { useState, useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function ContractorsList() {
    const [constructorsData, setConstructorsData] = useState([]);
    const [query] = useSearchParams();
    const page = query.get("page") || 1;

    useEffect(() => {
        doApiContractors();
    }, [query])

    const doApiContractors = async () => {
        let url = "https://data.gov.il/api/3/action/datastore_search?resource_id=4eb61bd6-18cf-4e7c-9f9c-e166dfa0a2d8&limit=1150";
        fetch(url)
            .then((resp) => resp.json())
            .then((constructorsData) => {
                let contractor = constructorsData.result.records;
                console.log(contractor);
                setConstructorsData(contractor)
            });
    }


    return (
        <div className='p-[20px] md:m-[20px] md:w-auto '>
            <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
                <span className="pt-2">טבלת קבלנים</span>
                <div>
                    <Button><KeyboardArrowRightIcon className="text-white " /></Button>
                    <span>1</span>
                    <Button><KeyboardArrowLeftIcon className="text-white" /></Button>
                </div>
                {/* <Button size="small" variant="contained" className='items-end' >
                    <Link to='...' className='hover:text-white p-1'>הוספת קבלן <PersonAddIcon /> </Link>
                </Button> */}
            </div>
            <TableContainer component={Paper} className="drop-shadow-xl md:h-[400px] mh-[400px]">
                <Table className="border-collapse border border-slate-400">
                    <TableHead>
                        <TableRow className=" bg-slate-600 ">
                            <TableCell className="border border-slate-300 text-white text-center">#</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">שם</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">אימייל</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">טלפון</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">גישה</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">עיר</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">רחוב</TableCell>
                            <TableCell className="border w-40 border-slate-300 text-white text-center">תיאור ענף</TableCell>
                            <TableCell className="border border-slate-300 text-white text-center">עובדים</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {constructorsData.map((row, i) => (
                            <TableRow key={row.MISPAR_YESHUT} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align='center'>{((page - 1) * 15) + i + 1}</TableCell>
                                <TableCell align='center' className="border border-slate-300"><AccountCircleIcon /> {row.SHEM_YESHUT}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.EMAIL}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.MISPAR_TEL}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.KABLAN_MUKAR}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.SHEM_YISHUV}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.SHEM_REHOV}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.TEUR_ANAF}</TableCell>
                                <TableCell align='center' className="border border-slate-300">{row.OVDIM}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}