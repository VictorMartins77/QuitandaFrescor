import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { InputCheckbox } from "../../components/InputCheckbox";
import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { useState } from "react";

export function New() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");


  async function handleNewProduct(){
    await api.post("/products" ,{
      name,
      value,
      description,
      image,
      amount,
      category
    });

    alert("Produto cadastrado com sucesso!");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Novo Produto</h1>
            <ButtonText title="Voltar" />
          </header>

          <Input placeholder="Nome do produto" 
          onChange={e=> setName(e.target.value)} />
          <Input placeholder="R$ 00,00" 
          onChange={e => setValue(e.target.value)}/>
          <Input placeholder="Imagem URL" 
          onChange={e => setImage(e.target.value)}/>
          <Input placeholder="Quantidade em estoque" 
          onChange={e => setAmount(e.target.value)}/>
          <Input placeholder="Categoria" 
          onChange={e => setCategory(e.target.value)}/>

          <Textarea placeholder="Descrição" 
          onChange={e => setDescription(e.target.value)}/>
          <Button 
          title="Salvar" 
          onClick={handleNewProduct}
          />
        </Form>
      </main>
    </Container>
  );
}
