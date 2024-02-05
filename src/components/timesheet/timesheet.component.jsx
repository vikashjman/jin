import React, { useEffect, useState } from 'react';
import './timesheet.styles.css';
import Select from '../common/Select';
import { useTimeContext } from '../../context/hours.context';
const generate_unique_id = () => {
    const id = "id" + Math.random().toString(16).slice(2);
    return id;
};
const getDefaultBauValues = () => {
    return {
        id: generate_unique_id(),
        activity: "BAU_001 People",
        task: "Company",
        comment: "",
        mon: "",
        tue: "",
        wed: "",
        thrus: "",
        fri: "",
        sat: "",
        sun: "",
        total: ""
    }
}
const getDefaultSalesValue = () => {
    return {
        id: generate_unique_id(),
        activity: "Accounts",
        task: "Acora",
        comment: "",
        mon: "",
        tue: "",
        wed: "",
        thrus: "",
        fri: "",
        sat: "",
        sun: "",
        total: ""
    };
}


const calculateTime = (obj) => {
    const { mon, tue, wed, thrus, fri, sat, sun } = obj;

    const monNum = parseInt(mon, 10) || 0;
    const tueNum = parseInt(tue, 10) || 0;
    const wedNum = parseInt(wed, 10) || 0;
    const thrusNum = parseInt(thrus, 10) || 0;
    const friNum = parseInt(fri, 10) || 0;
    const satNum = parseInt(sat, 10) || 0;
    const sunNum = parseInt(sun, 10) || 0;

    const total = monNum + tueNum + wedNum + thrusNum + friNum + satNum + sunNum;
    return total;
};


const horizontalCal = (arr, field) => {

    let sum = 0;
    arr.forEach((val) => {
        sum += (parseInt(val[field], 10) || 0)
    })
    return sum;
}


const calculateTotalHours = (arr) => {
    let sum = 0;
    arr.forEach((ele) => {
        sum += calculateTime(ele)
    });
    return sum;
}





const Timesheet = () => {
    const [bauRows, setBauRows] = useState([getDefaultBauValues()]);
    const [salesRows, setSalesRows] = useState([getDefaultSalesValue()]);

    const {updateHours} = useTimeContext();
    useEffect(() => {
        const saveState = localStorage.getItem('save');
        if (saveState === 'true') {
            const bauArr = JSON.parse(localStorage.getItem('bauRows'));
            const salesArr = JSON.parse(localStorage.getItem('salesRows')) ;

            
            setBauRows(bauArr);
            setSalesRows(salesArr)
        }
        
    }, [setBauRows, setSalesRows, localStorage])

    useEffect(() => {
        updateHours(calculateTotalHours([...bauRows,...salesRows]))
    },[bauRows,salesRows])


    const addBauRow = () => setBauRows([...bauRows, getDefaultBauValues()]);
    const removeBauRow = (id) => {
        if (bauRows.length > 1) {
            const updated_baurows = bauRows.filter(ele => ele.id !== id)
            setBauRows(updated_baurows)
        }
    }

    const addSalesRow = () => setSalesRows([...salesRows, getDefaultSalesValue()]);
    const removeSalesRow = (id) => {
        if (salesRows.length > 1) {
            const updated_salesrows = salesRows.filter(ele => ele.id !== id)
            setSalesRows(updated_salesrows)
        }
    }

    const handle_change = (e, id, type) => {
        const arr = type === "BAU" ? bauRows : salesRows;


        const updated_arr = () => {
            return arr.map((ele) => {
                if (ele.id === id) {
                    return { ...ele, [e.target.name]: e.target.value }
                } else {
                    return ele
                }
            })
        }
        if (type === "BAU") {
            setBauRows(updated_arr);
        } else {
            setSalesRows(updated_arr)
        }

    }


    const handle_save = () => {
        localStorage.setItem('save', 'true');
        localStorage.setItem('bauRows', JSON.stringify(bauRows))
        localStorage.setItem('salesRows', JSON.stringify(salesRows))
    }
    
    const handle_remove = () => {
        localStorage.setItem('save','false');
        localStorage.setItem('bauRows',"")
        localStorage.setItem('saleRows',"")
    }
    const renderRow = (isFirstRow, addFunc, removeFunc, type, values) => (
        <>
            <td><Select val={values.actvity} handleChange={(e) => handle_change(e, values.id, type)} name="activity" type={type} option_type="Activity" /></td>
            <td><Select val={values.task} handleChange={(e) => handle_change(e, values.id, type)} name="task" type={type} option_type="task" /></td>
            <td><input style={{width:'60%'}} value={values.comment} onChange={(e) => handle_change(e, values.id, type)} name="comment" type="text" /></td>
            <td><input value={values.mon} onChange={(e) => handle_change(e, values.id, type)} name="mon" className='resize' type="text" /></td>
            <td><input value={values.tue} onChange={(e) => handle_change(e, values.id, type)} name="tue" className='resize' type="text" /></td>
            <td><input value={values.wed} onChange={(e) => handle_change(e, values.id, type)} name="wed" className='resize' type="text" /></td>
            <td><input value={values.thrus} onChange={(e) => handle_change(e, values.id, type)} name="thrus" className='resize' type="text" /></td>
            <td><input value={values.fri} onChange={(e) => handle_change(e, values.id, type)} name="fri" className='resize' type="text" /></td>
            <td><input value={values.sat} onChange={(e) => handle_change(e, values.id, type)} name="sat" className='resize' type="text" /></td>
            <td><input value={values.sun} onChange={(e) => handle_change(e, values.id, type)} name="sun" className='resize' type="text" /></td>
            <td><input value={calculateTime(values)} name="total" className='resize total' type="text" disabled /></td>
            <td>
                <i className='pi pi-plus' style={{ fontWeight: 'bolder' }} onClick={addFunc}></i>
                {!isFirstRow && <i key={values.id} className='pi pi-minus' style={{ fontWeight: 'bolder' }} onClick={() => removeFunc(values.id)}></i>}
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
                        <th>Sat 0</th>
                        <th>Sun 11</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    {bauRows.map((values, i) =>
                        <tr key={values.id}>
                            {i === 0 && <td rowSpan={bauRows.length}>BAU Activity</td>}
                            {renderRow(i === 0, addBauRow, i > 0 ? removeBauRow : null, "BAU", values)}
                        </tr>
                    )}
                    {salesRows.map((values, i) =>
                        <tr key={values.id}>
                            {i === 0 && <td rowSpan={salesRows.length}>Sales Activity</td>}
                            {renderRow(i === 0, addSalesRow, i > 0 ? removeSalesRow : null, "sales", values)}
                        </tr>
                    )}
                    <tr>
                        <td>Total Hours</td>
                        <td></td>
                        <td></td>
                        <td><input type="text" /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'mon')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'tue')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'wed')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'thrus')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'fri')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'sat')} className='resize' type="text" disabled /></td>
                        <td><input value={horizontalCal([...bauRows, ...salesRows], 'sun')} className='resize' type="text" disabled /></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className="btns-wrapper">

                <button className='btn btn-save' onClick={handle_save}>Save</button>
                <button className='btn btn-submit' onClick={handle_remove}>Submit <i className='pi pi-arrow-right'></i></button>
            </div>
        </>
    );
}

export default Timesheet;







