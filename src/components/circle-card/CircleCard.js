import './CircleCard.styled.css'
const CircleCard = (props) => {
    return <div className='circle-card'>
        <img src={props.img} alt="cat" />
        <small className='small'>{props.small}</small>
        <h2 className="circle-card-title">{props.title}</h2>
        <div style={{color:'green', fontSize:'12px', }}>Rp. 10.000</div>
        <button style={{
            backgroundColor:'red',
            border:'none', 
            color:'white', 
            borderRadius:'12px', 
            padding:'8px',
            marginTop:'8px'
        }}
            onClick={()=> props.setCart(1)}
        >
            Add To Cart
        </button>
    </div>
}

export default CircleCard