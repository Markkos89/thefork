import React from 'react'

function ShowTitle({ count }) {
    return (
        <div style={{ bottomPadding: "15px" }} className="container">
            <table>
                <tr>
                    <td>
                        <h6>Los mejores restaurantes de Buenos Aires</h6>
                        <h7>{count} restaurantes</h7>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ShowTitle
