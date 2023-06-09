import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.main`

position: relative;
margin-top: 2rem;
padding-bottom: 3rem;
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: ${colors.opacity.purple};
`;

export const NavBar = styled.nav`

position: relative;
margin-top: 1rem;
padding-bottom: 0.5rem;
padding-left: 2rem;
padding-right: 2rem;
border-bottom: 0.5rem solid ${colors.purple.bold};
width: auto;
min-width:40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
font-family: 'Oswald', sans-serif;
font-weight: 400;

> div
{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 1.5rem;
}


> div a
{
  text-transform: capitalize;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: ${colors.purple.light};
  text-decoration: none;
  
  img
  {
    width: 2rem;
    height: 2rem;
  }
  
  span
  {
    margin-top: 1rem;
  }
}


> div a::after
{
  position: absolute;
  content: "";
  left: -10px;
  bottom: -16px;
  width: 0%;
  height:100%;
  border-bottom: 0.5rem solid ${colors.purple.regular};
  transition:  0.5s ease-in-out;

} 

> div a:hover::after 
{
 width: calc(100% + 1.5rem);
}

`;

export const SectionsContainer = styled.div`
position:relative;
display: flex;
width:100%;
height: auto;
flex-direction: column;
align-items: center;
`;