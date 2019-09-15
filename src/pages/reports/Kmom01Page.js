import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import MarkdownFile from 'static/README.md';

const Kmom01Page = () => {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(MarkdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  });

  return (
    <DefaultContainer>
      <Jumbotron className="bg-secondary box-shadow">
        <h1>Kmom 01</h1>
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
