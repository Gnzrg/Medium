export default function Section1({section1Data}){
    return(
        <section className="container-fluid section">
        <div className="section1 container d-flex justify-content-center row">
         <div className="left col-md-6">
           <h2>{section1Data.title1}</h2>
           <div>{section1Data.sub}</div>
           <button type="button" className="bg-dark text-light border-dark rounded-pill">{section1Data.btn2}</button>
         </div>
         <div className="right col-md-6 float-end">
            <img src={section1Data.image} alt=""/>
         </div>
        </div>
        </section>
    )
}