import styled from "styled-components"
import Card from "./Card"
import img from "../assets/hotdog.webp"
import img2 from "../images/CardImage.jpg"
import img3 from "../images/pizza.webp"
import img4 from "../images/onionrings.jpg"
import img5 from "../images/patates.webp";
import img6 from "../images/soft-drink.jpg"
const Container = styled.div
`
width:100%;

`
export default function Contant() {
   
  return (
    <Container>
      <div>
        <h1 style={{textAlign:"center"}}>Menus</h1>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
    <Card img = {img2}/>
    <Card img={img}/>
    <Card img={img3}/>
    <Card img={img4}/>
    <Card img={img5}/>
    <Card img = {img6}/>
      </div>
    </Container>
  )
}