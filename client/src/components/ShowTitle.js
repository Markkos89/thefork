import React from 'react'
import { useMediaQuery } from 'react-responsive'

function ShowTitle({ count }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })

    if (isDesktopOrLaptop) {
        return (
            <div style={{ bottomPadding: "15px" }} className="container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h3>Los mejores restaurantes de Buenos Aires</h3>
                                <h5>{count} restaurantes</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }else{
       return (
            <div style={{ bottomPadding: "15px" }} className="container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h6>Los mejores restaurantes de Buenos Aires</h6>
                                <h7>{count} restaurantes</h7>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) 
    }
    
}

export default ShowTitle
