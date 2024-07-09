import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import "./styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
import ptLocale from '@fullcalendar/core/locales/pt';
import itLocale from '@fullcalendar/core/locales/it';
import jpLocale from '@fullcalendar/core/locales/ja';
import enLocale from '@fullcalendar/core/locales/en-au';
import deLocale from '@fullcalendar/core/locales/de';
import cnLocale from '@fullcalendar/core/locales/zh-cn';

const CalendarioTime = ({ data }) => {

  // Transformar los eventos en el formato requerido por FullCalendar
  const events = data.events.map(event => ({
    title: event.title,         // Título del evento
    start: event.start,         // Fecha y hora de inicio del evento
    end: event.end,             // Fecha y hora de fin del evento (opcional)
    urlImg: event.urlImg,       // URL de la imagen del evento
    vinculo: event.vinculo      // Vinculo del evento
  }));

  const { isLanguage } = useContext(Context);
  const [ language, setLocale] = useState(esLocale);

  useEffect(() => {
    setStyleDetailDate('firtscontainer2');
    isLanguage === 'ES' ? setLocale(esLocale)
    : isLanguage === 'EN' ? setLocale(enLocale)
    : isLanguage === 'FR' ? setLocale(frLocale)
    : isLanguage === 'DE' ? setLocale(deLocale)
    : isLanguage === 'PT' ? setLocale(ptLocale)
    : isLanguage === 'IT' ? setLocale(itLocale)
    : isLanguage === 'JP' ? setLocale(jpLocale)
    : isLanguage === 'CN' ? setLocale(cnLocale)
    : setLocale(esLocale)
  }, [isLanguage]);

  const [styleDetailDate, setStyleDetailDate] = useState('firtscontainer2');
  const [eventImg, setEventImg] = useState('calendario/ofrendas.jpg');
  const [eventLink, setEventLink] = useState('https://www.facebook.com/VivaAguascalientes?mibextid=ZbWKwL');
  const [titleDate, setTitleDate] = useState('Vendimias aguascalientes');

  const handleDateClick = (arg) => {
    setStyleDetailDate('firtscontainer2');
    setTitleDate(arg.event._def.title);
    setEventImg(arg.event._def.extendedProps.urlImg);
    setEventLink(arg.event._def.extendedProps.vinculo);
  };

  const titleCalendar = {
    month: 'long',
    year: 'numeric'
  };

  const closeAdvertisement = () => {
    setStyleDetailDate('firtscontainer');
  };

  return (
    <section>
      <LazyLoadImage
        src={require(`../../assets/img/header/Fondoamarrillo.webp`)}
        alt=""
        className="calendario2-franja"
      />
      <h2 className="calendar-known-title">{data.title}</h2>

      <div className="contenedor-flexbox">
        <div className="secondcontainer">
          <FullCalendar
            titleFormat={titleCalendar}
            className="calendar2-calendar"
            plugins={[dayGridPlugin]}
            eventClick={handleDateClick}
            initialView="dayGridMonth"
            updateSize="true"
            weekends={true}
            locale={language}
            showNonCurrentDates={true}
            events={events}
            height={"auto"}
          />
          <br />
        </div>
      </div>

      <br />
    </section>
  );
};

export default CalendarioTime;