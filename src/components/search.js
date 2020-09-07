/*                 <form id='headerForm'  method='GET' action='/frame/reservas/getAvailability'>
                    <div id='header' class='row-fluid' dir="rtl">
                        <div class="header-form" id="divFromDate">
                            <label for="headerFrom" id="lblFromDate">﻿מ:</label>
                            <input type="text" class="form-control datepicker onChange inputFecha" id="headerFrom"
                                name='from' value='2020-09-07' readonly='readonly' 
                                style="background-color: #FFF;"/>
                            <input type="hidden" name='hotelToken' value='a41ce7814d16061ac9a951e3bb1c534e' />
                        </div>
                        <div class="header-form" id="divToDate">
                            <label for="headerTo" id="lblToDate">﻿עד:</label>
                            <input type="text" class="form-control datepicker onChange inputFecha" id="headerTo"
                                name='to' value='2020-09-08' readonly='readonly' 
                                style="background-color: #FFF;"/>
                        </div>
                        <div class="header-form " id="divAdults">
                            <label for="headerAdults" id="lblAdults">﻿מבוגרים:</label>
                            <select class="form-control onChange" id="headerAdults" name='nAdults'>
                                <option value='1' selected>1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option><option value='10' >10</option>                            </select>
                        </div>
                        <div class="header-form " id="divChilds">
                            <label for="headerChilds" id="lblChilds">﻿ילדים:</label>
                            <select class="form-control onChange" id="headerChilds" name='nChilds'>
                                <option value='0' selected>0</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option>                            </select>
                        </div>
                        <div class="header-form hidden" id="divBabies">
                            <label for="headerBabies" id="lblBabies">﻿תינוקות:</label>
                            <select class="form-control onChange" id="headerBabies" name='nBabies'>
                                <option value='0' selected>0</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option>                            </select>
                        </div>

                        <div class="header-form hidden" id="divRateCode">
                            <label for="headerCurrency" id="lblRateCode">﻿מחירון:</label>
                            <select class="form-control onChange " id="headerRateCode" name='rateCode'>
                                <option value='INV' >ILS VAT</option><option value='*ALL' selected>ILS</option>                            </select>
                        </div>
                                                <div class="header-form " id="divLanguage">
                            <label for="headerLanguage" id="lblLanguage">﻿שפה:</label>
                            <select class="form-control onChange" id="headerLanguage" name='language'>
                                <option value='EN' >English</option><option value='HE' selected>Hebrew</option>                            </select>
                        </div>
                        <div class="header-form" id="divSubmit">
                            <input type="hidden" name="roomId" value="" />
                            <input type="hidden" name="bloggerId" value="" />
                            <input type="hidden" name="hotelToken" value="a41ce7814d16061ac9a951e3bb1c534e" />
                            <input type='submit' id='btnSearch' class='btn btn-primary btn-block'
                                    value='﻿חיפוש'/>
                        </div>
                    </div>
                </form> 
                
                
#mainSearch h1 {
  font-size: 20px;
  text-align: center;
  margin: 60px 0 15px;
  padding: 10px !important;
}
.btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: 3px;
  color: #222;
  background: #ecb80e;
  padding: 0.4rem 0.9rem;
  border: 3px solid #ecb80e;
  cursor: pointer;
}
.btn-primary:hover {
  background: transparent;
  color: #ecb80e;
}

https://minihotelpms.net/frame/reservas/getAvailability?hotelToken=a41ce7814d16061ac9a951e3bb1c534e&nAdults=1&nChilds=0&nBabies=0&language=HE&rateCode=*ALL&roomId=&from=2020-09-07&to=2020-09-08&minToDate=2020-09-08&nochesPedidas=1&bloggerId=&languageDirection=rtl
*/