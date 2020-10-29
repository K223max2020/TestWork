import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import './Form.css';

class Form extends Component {
    state ={
        inputPname1: '',
        inputPname2: '',
        inputPname3: '',
        inputPname4: '',
        inputPname5: '',
        inputPassport:'',
        inputSeries:'',
        inputNumber:'',
        inputDay:'',
        inputMonth:'',
        inputYear:'',
        showSend:{
            Pname1:'',
            Pname2:'',
            Pname3:'',
            Pname4:'',
            Pname5:'',
            Passport:'',
            Series:'',
            Number:'',
            Day:'',
            Month:'',
            Year:'',
        }
    }
    handleInputChange3=({target:{value}})=>{
        this.setState({
            inputPname1: value, 
        })
    }
    handleInputChange4=({target:{value}})=>{
        this.setState({
            inputPname2: value, 
        })
    }
    handleInputChange5=({target:{value}})=>{
        this.setState({
            inputPname3: value, 
        })
    }
    handleInputChange6=({target:{value}})=>{
        this.setState({
            inputPname4: value, 
        })
    }
    handleInputChange7=({target:{value}})=>{
        this.setState({
            inputPname5: value, 
        })
    }
    handleSend=(e)=>{
        e.preventDefault();
        const{inputPname1,inputPname2,inputPname3,inputPname4,inputPname5,
              inputPassport,inputSeries,inputNumber,inputDay,inputMonth,inputYear}=this.state;
        this.setState({
            inputPname1:'',
            inputPname2:'',
            inputPname3:'',
            inputPname4:'',
            inputPname5:'',
            inputPassport:'',
            inputSeries:'',
            inputNumber:'',
            inputDay:'',
            inputMonth:'',
            inputYear:'',
            showSend:{
                Pname1:inputPname1,
                Pname2:inputPname2,
                Pname3:inputPname3,
                Pname4:inputPname4,
                Pname5:inputPname5,
                Passport:inputPassport,
                Series:inputSeries,
                Number:inputNumber,
                Day:inputDay,
                Month:inputMonth,
                Year:inputYear,
            }
        })
    }
    handlePassportChange=({target:{value}})=>{
        this.setState({
            inputPassport: value,
        })
    }
    handleSeriesChange=({target:{value}})=>{
        this.setState({
            inputSeries: value,
        })
    }
    handleNumberChange=({target:{value}})=>{
        this.setState({
            inputNumber: value,
        })
    }
    handleDayChange=({target:{value}})=>{
        this.setState({
            inputDay: value,
        })
    }
    handleMonthChange=({target:{value}})=>{
        this.setState({
            inputMonth: value,
        })
    }
    handleYearChange=({target:{value}})=>{
        this.setState({
            inputYear: value,
        })
    }
   
    render(){
        const {inputPname1,inputPname2,inputPname3,inputPname4,inputPname5,showSend,
               inputPassport, inputSeries, inputNumber, inputDay, inputMonth,inputYear}=this.state;
        const {Pname1,Pname2,Pname3,Pname4,Pname5,Passport, Series, Number, Day, Month,Year}=showSend;

    
    return(
        <div className='Form'>
            <div className='Choice'>
                <div className='numname'>
                    <div className='number'>
                    1  
                    </div>
                    <div className='name' >
                    <a className="User" href="https://www.google.com/">Выбор заявителя</a>
                    </div> 
                </div> 
                <div className='one'>
                    <input  type="radio" name="one" id="one" />
                    <label htmlFor="text">Константинопольский К.К. <br/> Физическое лицо</label>
                </div>
                <div className='two'>
                    <input type="radio" name="one" id="one"/>
                    <label htmlFor='text'>ООО «Константинополь» <br/> Юридическое лицо</label>
                </div>
                <button className='button' >Продолжить</button>
            </div>
            <div className='Otvet'>
                <h3>{Pname1}</h3>
                <h3>{Pname2}</h3>
                <h3>{Pname3}</h3>
                <h3>{Pname4}</h3>
                <h3>{Pname5}</h3>
                <h3>{Passport}</h3>
                <h3>{Series}</h3>
                <h3>{Number}</h3>
                <h3>{Day}</h3>
                <h3>{Month}</h3>
                <h3>{Year}</h3>
                
            </div>
            <div className='Data'>
                    <div className='numname2'>
                        <div className='number'>
                        2  
                        </div>
                        <div className='name'>
                        Данные заявителя  
                        </div> 
                    </div> 
                    <div className='Pname1'><label>Фамилия</label><br/>
                    <input type='Pname1' value={inputPname1} onChange={this.handleInputChange3}
                    placeholder='Фамилия'></input>
                    </div>
                    <div className='Pname2'><label>Имя</label><br/>
                    <input type='Pname2'value={inputPname2} onChange={this.handleInputChange4}
                    placeholder='Имя'></input>
                    </div>
                    <div className='Pname3'><label>Отчество</label><br/>
                    <input type='Pname3' value={inputPname3} onChange={this.handleInputChange5} 
                    placeholder='Отчество'></input>
                    </div>
                    <div className='Pname4'><label>E-mail</label><br/>
                    <input type='Pname4' value={inputPname4} onChange={this.handleInputChange6} 
                    placeholder='E-mail'></input>
                    </div>
                    <div className='Pname5'><label>Telefon</label><br/>
                    <input type='Pname5' value={inputPname5} onChange={this.handleInputChange7} 
                    placeholder='Телефон'></input>
                    </div>

                    <div>Документ, удостоверяющий личность</div>

                    <div className='Passport'><label>Документ</label><br/>
                    <input type='Passport' value={inputPassport} onChange={this.handlePassportChange} 
                    placeholder='Выбирете документ'></input>
                    </div>

                    <div className='PassportNumber'>
                        <div>
                        <label>Серия</label><br/>
                        <input type='Series' value={inputSeries} onChange={this.handleSeriesChange}
                        placeholder='Серия паспорта'></input>
                        </div> 
                        <div>
                        <label>Номер</label><br/>
                        <input type='Number' value={inputNumber} onChange={this.handleNumberChange}
                        placeholder='Номер паспорта'></input>
                        </div> 
                    </div>
                    <div className='PassportWhen'>
                        <div>
                        <label>День</label><br/>
                        <input type='Day' value={inputDay} onChange={this.handleDayChange}
                        placeholder='День'></input>
                        </div> 
                        <div>
                        <label>Месяц</label><br/>
                        <input type='Month' value={inputMonth} onChange={this.handleMonthChange}
                        placeholder='Месяц'></input>
                        </div> 
                        <div>
                        <label>Год</label><br/>
                        <input type='Year' value={inputYear} onChange={this.handleYearChange}
                        placeholder='Год'></input>
                        </div>
                    </div>


                    <button className='button' onClick={this.handleSend}>Отправить</button>
            </div>
            <div className='Consent'>
                <div className='numname3'>
                        <div className='number'>
                        3  
                        </div>
                        <div className='name'>
                        Согласие  
                        </div> 
                </div>
                <div className='list'>
                    <h3>Требуется ваше согласие по следующим пунктам:</h3>
                    <li>Я подтверждаю, что вся представленная информация является достоверной и точной;</li>
                    <li>Я несу ответственность в соответствии с действующим законодательством Российской Федерации за предоставление заведомо ложных или неполных сведений;</li>
                    <li>Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том числе в информационных системах;</li>
                    <li>Со сроками оказания государственной услуги ознакомлен.</li>
                    <div className='check'>
                        <input type='checkbox'id='1'></input><label htmlFor="text">Я подтверждаю свое согласие со всеми вышеперечисленными пунктами</label><br/>
                        <input type='checkbox'id='2'></input><label htmlFor="text">Я уведомлен о том, что результат будет получен в электронном виде</label>
                    </div>
                </div>
            </div>
            <div className='Finish'>
                <div className='numname3'>
                    <div className='number'>
                    4
                    </div>
                    <div className='name'>
                    Заявление принято  
                    </div> 
                    
                </div>
                <div className='list'>
                    <p>Номер заявления RU-1234567. Максимальный срок предоставления услуги — 20 рабочих дней. Следите за статусом заявления в Личном кабинете. <br/><br/>Если у вас остались вопросы по оказанию услуги, пожалуйста, обращайтесь по телефону +7 (342) 123-45-67.</p>
                </div>
                <div className='buttons'>
                    <button className='buttonB'>Вернуться в каталог</button>
                    <button className='buttonW'>Перейти в личный кабинет</button>
                </div> 
            </div>


        </div>
    )
    }
}

export default Form;