import Category from "./category";
import News from "./news";
export default function Section3({ section3Data }) {
  return (
    <section className="section3">
      <div className="container  row">
        <div className="left2 col-md-9 ">
          {News.map((e) => {
            return (
              <div className="news d-flex justify-content-between ">
                <div className="title col-md-8">
                  <div className="d-flex align-items-center">
                    <div className="col-1">
                      <img src={e.img} alt="" width={40} />
                    </div>
                    <div>
                      <h6>{e.head}</h6>
                    </div>
                  </div>
                  <p className="text-secondary">{e.title}</p>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-secondary">{e.date}</span>
                    <span className="text-secondary">{e.read}</span>
                    <button className="border border-muted rounded-pill bg-muted text-secondary ">
                      {e.key}
                    </button>
                  </div>
                </div>
                <div className="card-img col-md-2">
                  <img src={e.createdUser.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right2 col-md-3 ">
          <Category categoryData={section3Data} />
        </div>
      </div>
    </section>
  );
}
