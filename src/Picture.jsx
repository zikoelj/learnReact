function Picture(){

    const imageUrl = './src/assets/fsr.png';
    const handleClick = (e) => e.target.style.display = "none";
    return (<img onClick={(e) => handleClick(e)} src = {imageUrl}/>)
}
export default Picture
