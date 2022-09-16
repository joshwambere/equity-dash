import React, {useState} from 'react'
import { Line } from 'react-chartjs-2'
import {useEffect} from "react";



const options = {
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const MyChart = () => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
         fetch(`http://localhost:4000/analytics/users`, {timeout:50})
            .then((res) =>res.json()).then(data=>{
                setUserData(data)
            })
            .catch((err) => console.log(err));
    }, [])


    return(
        <Line
            data={userData}
            options={options}
        />
    )
}


export default MyChart
