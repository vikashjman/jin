import React, { useState } from 'react';
import './timesheet.styles.css';
import Select from '../common/Select';

const Timesheet = () => {
    const [bauRows, setBauRows] = useState(1);
    const [salesRows, setSalesRows] = useState(1);

    const addBauRow = () => setBauRows(bauRows + 1);
    const removeBauRow = () => setBauRows(bauRows > 1 ? bauRows - 1 : 1);

    const addSalesRow = () => setSalesRows(salesRows + 1);
    const removeSalesRow = () => setSalesRows(salesRows > 1 ? salesRows - 1 : 1);

    const renderRow = (isFirstRow, addFunc, removeFunc) => (
        <>
            <td><Select /></td>
            <td><Select /></td>
            <td><input type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize' type="text" /></td>
            <td><input className='resize total' type="text" /></td>
            <td>
                <i className='pi pi-plus' style={{ fontWeight: 'bolder' }} onClick={addFunc}></i>
                {!isFirstRow && <i className='pi pi-minus' style={{ fontWeight: 'bolder' }} onClick={removeFunc}></i>}
            </td>
        </>
    );

    return (
        <>
            <div className="table-container">
                <table id="timesheet-table">
                    <tr>
                        <th>Project Type</th>
                        <th>Project Name</th>
                        <th>Task</th>
                        <th>Comment</th>
                        <th>Mon 05</th>
                        <th>Tue 06</th>
                        <th>Wed 07</th>
                        <th>Thu 08</th>
                        <th>Fri 09</th>
                        <th>Sat 10</th>
                        <th>Sun 11</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    {[...Array(bauRows)].map((_, i) => 
                        <tr key={i}>
                            {i === 0 && <td rowSpan={bauRows}>BAU Activity</td>}
                            {renderRow(i === 0, addBauRow, i > 0 ? removeBauRow : null)}
                        </tr>
                    )}
                    {[...Array(salesRows)].map((_, i) => 
                        <tr key={i}>
                            {i === 0 && <td rowSpan={salesRows}>Sales Activity</td>}
                            {renderRow(i === 0, addSalesRow, i > 0 ? removeSalesRow : null)}
                        </tr>
                    )}
                    <tr>
                        <td>Total Hours</td>
                        <td></td>
                        <td></td>
                        <td><input type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize' type="text" /></td>
                        <td><input className='resize total' type="text" /></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Timesheet;