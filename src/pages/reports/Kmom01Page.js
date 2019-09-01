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
  });

  return (
    <DefaultContainer>
      <Jumbotron>
        <h1>kmom 01</h1>
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
        <ReactMarkdown source={markdown} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default Kmom01Page;
