import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';

const IndexPage = () => (
  <DefaultContainer>
    <Jumbotron className="bg-secondary box-shadow">
      <h2>Välkommen till min me-sida</h2>
      <p>
        Mitt namn är Mohammad Alburhan. Född i Hudiksvall, Hälsingland men
        uppvuxen i Kristianstad, Skåne.
      </p>
      <p>
        Jag har sedan 14 års åldern varit intresserad & nyfiken på nya
        teknologier inom webbprogrammerings världen.
        <br />
        Mina hobbies är för tillfället webbprogrammering, basket och spel.
      </p>
    </Jumbotron>
  </DefaultContainer>
);

export default IndexPage;
