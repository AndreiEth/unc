import React from "react";
import Footer from "../../components/footer/Footer";
import item from "../../images/item-card.png";
import "./item.scss";

export default function Card() {
  return (
    <>
      <section className='item'>
        <div className='item__image-container'>
          <img
            src={item}
            alt='item'
          />
        </div>
        <div className='item__container'>
          <h1 className='item__title'>Jersey AEV2 // AW2023</h1>
          <ul className='item__info'>
            <li>
              Коллекция:
              <span>UNC</span>
            </li>
            <li>
              Артикул:
              <span>Джерси</span>
            </li>
            <li>
              Характеристики:
              <span>ДxШxВ: 400x300x10 мм Вес: 250 г</span>
            </li>
          </ul>
          <p className='item__price'>2 800 р.</p>
          <div className='item__size-buttons'>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          <div>
            <button>Купить</button>
            <button>ДОЛЯМИ</button>
          </div>
          <p className='item__preorder'>
            Новый предзаказ открыт до 10 января. Отправка будет осуществляться в
            течение 7-10 рабочих дней после закрытия предзаказа.
          </p>
          <p className='item__material'>
            Джерси сделана из нестандартного материала - двухсторонний
            флис.Плотность материала - 270гр, внутри имеется небольшой начёс.
            Установлены фиксаторы на рукавах и снизу изделия.
          </p>
          <p className='item__set'>
            В комплекте с изделием идёт карта с QR-кодом, на источник с
            информацией по уходу и стикер.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
