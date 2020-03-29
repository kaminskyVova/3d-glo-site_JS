'use strict';

//babel polifile
import "@babel/polyfill";

//imports modules
import siteTimer from './modules/siteTimer';
import siteMenu from './modules/siteMenu';
import sitePopup from './modules/sitePopup';
import siteTabs from './modules/siteTabs';
import siteSlider from './modules/siteSlider';
import chengeFoto from './modules/chengeFoto';
import priceCalc from './modules/priceCalc';
import sendFormAjax from './modules/sendFormAjax';


//polifile
import 'nodelist-foreach-polyfill';
const elementClosest = require('element-closest');
elementClosest(window);
var Promise = require('es6-promise').Promise;



//таймер отчета
siteTimer();
//Меню сайта
siteMenu();
//popUp
sitePopup();
//табы
siteTabs();
// слайдер
siteSlider();
//Наша команда смена фото при навидении
chengeFoto();
//Расчет стоимости
priceCalc();
// отправка формы ajax
sendFormAjax();