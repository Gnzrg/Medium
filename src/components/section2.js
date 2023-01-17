import interest from "./interest"
export default function Section2({section2Data}){
    return(
        <section className="section2">
        <div className="container row ">
         <div className="top container col-12 d-flex">
            <img src={section2Data.image2} alt=""/>
            <span>{section2Data.title2}</span>
         </div>
         <div className="bottom col-12 d-flex flex-wrap">
            {interest.map((e)=>{
                return(
                    <div className="col-md-4 d-flex gap-2">
                        <div className="number fs-1">{e.id}</div>
                        <div>
                     <img src={e.img} alt=""/>
                     <span className="ps-2">{e.text1}</span>
                     <h5 className="pt-2">{e.text2}</h5>
                     <div className="d-flex gap-3 py-2">
                     <p className="text-secondary">{e.date}</p>
                     <p className="text-secondary">*{e.read}</p>
                     </div>
                     </div>
                    </div>
                )
             
                
            })}
         </div>
        </div>
        </section>
    )
}