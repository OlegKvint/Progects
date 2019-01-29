        <!-- Forma -->
        <div id="formGlobal">
            <div id="contactForms">
                <div id="contactFormsContainer">
                    <div class="containerTextH">
                        <div>Отправьте свой индивидуальный запрос и мы подберем для Вас наилучшее предложение</div>
                    </div>
                    <div class="popupForm">
                        <div class="popup">
                           <!-- <div class="close_modal">x</div>-->
                            <form class="fofm" action="">
                                <!--<h5>Форма обратной связи</h5>-->
                                <input type="text" required="" placeholder="Имя" name="txtname">
                                <input type="email" placeholder="Email" name="txtemail">
                                <input type="tel" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" required="" placeholder="Телефон" name="txtphone">
                                <textarea name="txtmessage" placeholder="Введите Ваше сообщение" rows="10"></textarea>
                                <label class="robot">Отправляя это сообщение, Вы принимаете условия <br><a style="text-decoration: none;" href="politica.html" >Пользовательского соглашения</a></label>
                                <label class="robot"><input type="checkbox">Я не робот</label>
                                <input type="hidden" name="valTrFal" class="valTrFal" value="valTrFal_disabled">
                                <input type="submit" class="button" value="Отправить" disabled="disabled" name="btnsend">
                            </form>
                        </div>

                        <div class="popup2">
                        <div class="close_modal">x</div>
                            <div class="window">
                                <div class="insText">
                                    <h5>запрос отправлен</h5>
                                    <p><strong>Ваш запрос отправлен.</strong>Наш менеджер свяжется с вами в течение 30 минут!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
