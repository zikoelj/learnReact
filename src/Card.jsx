import fsrImage from './assets/fsr.png'
function Card(){

    return (<div className="card">
        <img  className='card-img' src={fsrImage} alt="profile avatar"></img>
        <h2 className='card-title'>Ziko Elj</h2>
        <p className='card-text'>Student IT and interessed with all backend & frontend stack</p>
    </div>)
}
export default Card