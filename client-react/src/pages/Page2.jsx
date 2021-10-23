const Page2 = (props) =>{
    const movieId = props.match.params.id;
    console.log(movieId);
    return(
        <div
        style={{
            height:'30px',
            width:'60ox',
            background:'blue'
        }}>
            Page 1            
        </div>
        
    )
}
export default Page2;