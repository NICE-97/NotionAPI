import React, { useState, useEffect } from 'react'
import Navigation from '../component/Navigation'
import ExpenseRequest from '../component/ExpenseRequest'
import { FaPrint } from "react-icons/fa6";

function ExpAcc() {

    const [data, setData] = useState([]);
    async function fetchDataFromAPIEndpoint() {
        try {
            const response = await fetch('http://localhost:4000/notion-exp-prod');
            const result = await response.json();
            setData(result.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchDataFromAPIEndpoint();
    }, []);

    const printRef = React.useRef(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Navigation />
            <button onClick={handlePrint} className='text-4xl fixed right-20 bottom-10 text-blue-400 hover:text-blue-500 print:hidden'><FaPrint /></button>
            <section style={{ fontFamily: 'IBM Plex Sans Thai, serif' }} className='container max-w-full'>
                {data.map((item, index) => (
                    <div key={index} ref={printRef} className='mx-auto px-8 w-[210mm] h-[297mm] border mb-2'>
                        <ExpenseRequest {...item} title="ใบขอเบิกค่าใช้จ่าย (บัญชี)"/>
                    </div>
                ))}
            </section>
        </>
    )
}

export default ExpAcc
