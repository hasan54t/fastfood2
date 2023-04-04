import "../styles/header.css"
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
//font-family: 'Mukta', sans-serif;


///"Open Sans", sans-serif
//#FEA401
const Container = styled.div
`
    width:100%;
    height:100vh;
    background-image:
    linear-gradient(to bottom, rgba(254, 164, 0.1), rgba(136, 100, 32, 0.1))


`
const Left = styled.div
`

`
const Center = styled.div
`  

`
const Right = styled.div
`
    display:flex;
    align-items:center;
    @media screen and (max-width: 460px) {
        display:none
       }
   

`

export default function Header() {
  return (
    <>
     <Container>
        <div className='wrapper'>
            <Left>
                <div className='logo'>
                GoodBurger
                </div>
            </Left>

            <Center>
                <ul className='navbar'>
                    <li><a href="www.google.com">Home</a></li>
                    <li><a href="www.google.com">Menu</a></li>
                    <li><a href="www.google.com">About</a></li>
                    <li><a href="www.google.com">Book Table</a></li>
                </ul>

            </Center>

            <Right>
            <div id = "shop-icon" >
            <ShoppingCartIcon className='navbar-icon'/>
            <div></div>
            </div>
            <div>
            <PersonIcon className='navbar-icon'/>
            </div>
            <div>
            <SearchIcon className='navbar-icon'/>
            </div>
            <div>
            <button className='order-button' style={{marginTop:"5px",marginLeft:"10px"}}>Order Now</button>
            </div>
            </Right>
            

        </div>
     </Container>
    </>
   
    
  )
}
