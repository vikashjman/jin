import React from 'react'
import './timesheet.styles.css';
import Select from '../common/Select';
import input from '../common/input';

const Timesheet = () => {
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
                    <tr>
                        <td rowSpan={2}>BAU Activity</td>
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
                        <td><i className='pi pi-plus' style={{ fontWeight: 'bolder' }}></i>
                        <i className='pi pi-minus' style={{ fontWeight: 'bolder' }}></i></td>
                    </tr>
                    <tr>
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
                        <td><i className='pi pi-plus' style={{ fontWeight: 'bolder' }}></i>
                        <i className='pi pi-minus' style={{ fontWeight: 'bolder' }}></i></td>
                    </tr>

                    <tr>
                        <td rowSpan={2}>Sales Activity</td>
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
                        <td><i className='pi pi-plus' style={{ fontWeight: 'bolder' }}></i>
                        <i className='pi pi-minus' style={{ fontWeight: 'bolder' }}></i></td>
                    </tr>

                    <tr>
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
                        <td><i className='pi pi-plus' style={{ fontWeight: 'bolder' }}></i>
                        <i className='pi pi-minus' style={{ fontWeight: 'bolder' }}></i></td>
                    </tr>

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
                        <td><i className='pi pi-plus' style={{ fontWeight: 'bolder' }}></i>
                        <i className='pi pi-minus' style={{ fontWeight: 'bolder' }}></i></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Timesheet