import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';

const Kmom02Page = () => (
  <DefaultContainer>
    <Jumbotron className="bg-secondary box-shadow">
      <h1>Kmom 02</h1>
      <p>
        Länk till Github repot:{' '}
        <a
          href={process.env.REACT_APP_GITHUB_REPOSITORY}
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_GITHUB_REPOSITORY}
        </a>
      </p>
      <p>
        Jag valde att göra en generell cross-browser datepicker som är simpel
        att förstå och använda. Gillar personligen inte en fancy datepicker med
        en massa pilar hit och dit för att välja något så simpelt som ett datum.
      </p>
      <p>
        Fördelen med att använda vanliga select inputs är att man kan förvänta
        samma beteende från olika webbläsare och responsivitet. Hade definitivt
        varit en bättre lösning att ha en sökfunktion på just årtalen då man i
        dagsläget behöver scrolla ner och hitta rätt årtal (max 100 år bakåt).
      </p>
      <p>
        Har inte riktigt tagit någon inspiration av någon speciell datepicker
        utan jag körde på ett eget simpelt koncept vilket fungerar minst lika
        bra.
      </p>
      <p>
        På registreringsformuläret körde jag på utan att kolla på andra för
        inspiration.
      </p>
    </Jumbotron>
  </DefaultContainer>
);

export default Kmom02Page;
