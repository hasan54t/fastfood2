import styled from "styled-components"
import "../styles/card.css"
const CardContainer = styled.div
`
    max-width:430px;
    height:max-content;
    border:1px solid black;
    padding:10px;
    margin-right:10px;
    margin-bottom:10px;
    border-radius:10px;
`
// max-width:450px;

//import img from "../assets/hotdog.webp"

export default function Card({img}) {
 
  return (
    <CardContainer>
    <div className="card-img" style={{background:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"300px",borderRadius:"35px"}}></div>
    <div style={{fontSize:"1.5rem",marginTop:"10px",paddingLeft:"10px"}}>Lorem Lorem ipsum dolor  Lorem, ipsum. ipsum dolor sit amet consectetur adipisicing elit. Ullam, ducimus.</div>
    <button style={{fontSize:"1.3rem",width:"100px",height:"40px",borderRadius:"10px",border:"2px solid black",background:"#B70B01",color:"white",marginTop:"10px",marginLeft:"10px"}}>Buy it</button>
    </CardContainer>
  )
}
