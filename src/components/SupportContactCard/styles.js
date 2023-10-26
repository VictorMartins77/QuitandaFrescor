import styled from "styled-components";

export const Container = styled.div`
     --bg: #f7f7f8;
  --hover-bg: #FFE5F4;
  --hover-text: #E50087;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 15px;
  padding-block: 18px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  > body{
    color: #464853;
  line-height: 15px;
  font-size: 10px;
  }

  > &:not(span){
    transition: .3s cubic-bezier(.6,.4,0,1);
  }

  > strong{
    display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
  }

  > span{
    position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
  }

  > &:hover span{
    top: 0;
  font-size: 1.2em;
  }

  > &:hover{
    background: var(--hover-bg);

    >div strong {
        opacity: 0;
    }
  }
  

  `