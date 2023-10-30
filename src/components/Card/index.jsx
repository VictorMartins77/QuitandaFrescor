    import { Container } from "./syles";
    import { api } from "../../services/api";
    import { useState } from "react";

    

    export function Card({ product }){ 
         if (!product) {
            return null; // Adicione uma verificação para lidar com o caso em que 'product' seja undefined
          }
        const { image, name, value } = product;

      

        return(
            <Container>
                <img src={image} alt=""/>
                <h1> {name} </h1>
                <p>{`R$${value}`}</p>
                <button>Encomendar</button>
            </Container>
        )
    }