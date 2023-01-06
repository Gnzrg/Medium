export default function Category({categoryData}){
    return(
        <div className="category">
            <div className="top pt-3">
            <h2>{categoryData.title}</h2>
            <div className="gap-5">
            {categoryData.category.map((e)=>{
                return(
                    <button className="me-2 mt-2">{e}</button>
                )
            })}
            </div>
            </div>
        </div>
    )
}