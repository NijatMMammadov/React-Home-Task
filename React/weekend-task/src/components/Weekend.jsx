import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Weekend() {

    let [data, setData] = useState({})


    function getData() {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => setData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <table className='table'>
            {
              data.map(element => (<tr>
                <th key={element.id}>{element.id}</th>
                <td style={{ color: element.discontinued ? "red" : 'black' }}>{element.name}</td>
                <td style={{ color: element.discontinued ? "red" : 'black' }}>{element.unitPrice}</td>
                <td style={{ background: element.unitsInStock > 10 ? "green" : 'white' }}>{element.unitsInStock}</td>
                <td><button onClick={() => DeleteData(element.id)}>Delete</button></td>
              </tr>
              ))
            }
          </table>
            <table style={{}}>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Weekend
