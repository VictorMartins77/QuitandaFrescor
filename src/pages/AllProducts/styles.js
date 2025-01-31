import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
    "more";

  > main {
    grid-area: content;
    padding: 64px 0;
  }
`;

export const More = styled.div`
grid-area: more;
max-width: 1300px;
  margin: 0 auto;
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #da951c;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #da951c;
    color: black;
  }
  border-radius: 0.25rem;
  border: none;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
   max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 300px;

  > img {
    max-width: 450px; 
  } 
`;

export const Info = styled.div`
  margin-top: 100px;

  > span {
    font-size: 30px; 
    color: #da951c; 
    font-weight: bold;
  }

  > p {
    margin-top: 10px;
    font-size: 25px;
  }

  

  > button {
    width: 200px;
    height: 50px;
    background-color: #da951c;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover {
      background-color: #da951c;
      color: black;
    }
    border-radius: 0.25rem;
    border: none;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const QuantityButton = styled.div`
  width: 10px;
  margin: 0 10px; 
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 20px; 
  color: #808080; 
`;
export const Title = styled.span`
  font-size: 30px; 
  color: #da951c; 
  text-align:center;
  margin-top:20px;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left:100px;
  margin-right:100px;
`;

export const ImageStyle = {
    width: '70px',
  };

  export const TitleContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
