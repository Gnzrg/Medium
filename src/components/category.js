export default function Category({categoryData}){
    return(
        <div className="category">
            <div className="top pt-3">
            <h2>{categoryData.title}</h2>
            <div className="category-bottom pb-3 gap-5">
            {categoryData.category.map((e)=>{
                return(
                    <button className="me-2 mt-2">{e}</button>
                )
            })}
            </div>
            <div className="category-bottom2">
                <ul className="list-unstyled d-flex gap-3 text-secondary pt-3 w-100 flex-wrap">
                    {categoryData.category2.map((a)=>{
                        return(
                            <li>
                                {a}
                            </li>
                        )
                    })}
                </ul>
            </div>
            </div>
        </div>
    )
}