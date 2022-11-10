
export default function Title({title,categories}) {
    return (
        <div>
            <h1>{title}</h1>
            {categories.map((val)=> {             
                return(
                    <p>{val}</p>
                )
            })}
        </div>
    )
}