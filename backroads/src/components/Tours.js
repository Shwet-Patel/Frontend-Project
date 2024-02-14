import { toursData } from "../Data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {toursData.map((item) => {
            return (
              <article className="tour-card" key={item.id}>
                <div className="tour-img-container">
                  <img src={item.image} className="tour-img" alt={item.title} />
                  <p className="tour-date">{item.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {item.location}
                    </p>
                    <p>{item.length}</p>
                    <p>{item.cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
