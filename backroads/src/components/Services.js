import { servicesData } from "../Data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        {servicesData.map((items) => {
          return (
            <article className="service">
            <span className="service-icon"><i className={items.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{items.title}</h4>
              <p className="service-text">
                {items.text}
              </p>
            </div>
          </article>
          );
        })}
      </div>
    </section>
    </>
  );
};


export default Services;