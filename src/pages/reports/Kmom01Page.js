import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from '../../layouts/DefaultContainer';
import MarkdownFile from '../../README.md';

const Kmom01Page = () => {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(MarkdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  }, [markdown, setMarkdown]);

  return (
    <DefaultContainer>
      <Jumbotron>
        <h1>kmom 01</h1>
        <p>
          Länk till Github repot:{' '}
          <a
            href="https://github.com/H4MSK1/bth-ramverk2-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/H4MSK1/bth-ramverk2-client
          </a>
        </p>
        <ReactMarkdown source={markdown} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default Kmom01Page;
