import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import { format } from "date-fns";

export default class search extends Component {

    state = {
        startDate: new Date(),
        toDate: addDays(new Date(), 1),
        adults: 1,
        childs: 0
    };
        
    handleChangeFrom = date => {
        this.setState({
            startDate: date,
            toDate: addDays(date, 1)
        });
    };

    handleChangeTo = date => {
        this.setState({
            toDate: date
        });
    };

    handleChangeAdults = (event) => {
        this.setState({
            adults: event.target.value
        });
    };

    handleChangeChilds = (event) => {
        this.setState({
            childs: event.target.value
        });
    };

    handleSubmit = () => {
        let formattedFrom = format(this.state.startDate, "yyyy-MM-dd"); 
        let formattedTo = format(this.state.toDate, "yyyy-MM-dd"); 

        window.open(
            `https://minihotelpms.net/frame/reservas/getAvailability?hotelToken=a41ce7814d16061ac9a951e3bb1c534e&
            nAdults=${this.state.adults}&nChilds=${this.state.childs}&nBabies=0&language=HE&rateCode=*ALL&roomId=&
            from=${formattedFrom}&to=${formattedTo}&minToDate=${formattedTo}
            &nochesPedidas=1&bloggerId=&languageDirection=rtl`
            , '_blank');
    }

    render() {
        return (
            <>

                <div className="book-now-comp">
                    <div class="header-form">
                        <label>מ:</label>
                        <DatePicker
                            className="header-form"
                            type="text"
                            selected={this.state.startDate}
                            onChange={this.handleChangeFrom}
                            dateFormat="yyyy-MM-dd"
                            name='from'
                            readonly='readonly' 
                        />
                    </div>
                    <div className="header-form">
                        <label>עד:</label>
                        <DatePicker
                            className="header-form"
                            type="text"
                            selected={this.state.toDate}
                            onChange={this.handleChangeTo}
                            dateFormat="yyyy-MM-dd"
                            name='to' 
                            readonly='readonly' 
                        />
                    </div>

{/*                     <div className="header-form">
                        <label>מבוגרים:</label>
                        <select 
                            onChange={this.handleChangeAdults}
                            className="header-form"
                            name='nAdults'>
                        <option value='1' selected>1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option><option value='10' >10</option>                            </select>
                    </div>
                    <div className="header-form">
                        <label>ילדים:</label>
                        <select 
                            onChange={this.handleChangeChilds}
                            className="header-form"
                            name='nChilds'>
                        <option value='0' selected>0</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option>                            </select>
                    </div>
 */}
                    <div className="header-form">
                        <input type='submit'
                            onClick={this.handleSubmit}
                            value='חיפוש'/>
                    </div>   
                </div>     
            </>
        )
    }
}