import React from "react";
import "./service.css";
import QRCode from "react-qr-code";

const Service = () => {
  return (
    <section className="service section" id="service">
      <h2 className="section__title">Service</h2>
      <span className="section__subtitle">Info about project</span>

      <div className="service__container container grid">
        <div className="service__data">
          Чат-бот telegram для HR, использующий ИИ для ...
        </div>
        <div className="service__data">
          <div className="section__title">
            <QRCode
              className="service__qr"
              style={{
                height: "auto",
                maxWidth: "30%",
                width: "30%",
                paddingTop: "12px",
              }}
              value="https://web.telegram.org/a/#6538637679"
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
