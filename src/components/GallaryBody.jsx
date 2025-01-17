import './GallaryBody.css'
let GallaryBody = (props)=>{
    let imageData=props.imageData;
    return(
        <div>
            {
                imageData.map(image=>{
                    return(
                        <div key={image.id} className='column'>
                            <img src={image.img} alt="" />
                        </div>
                    )
                })
            }
            
        </div>
    )
    
}

export default GallaryBody;