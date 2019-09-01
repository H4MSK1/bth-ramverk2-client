import React from 'react';
import PageNotFound from './PageNotFound';
import Kmom01Page from './reports/Kmom01Page';

const ReportPage = ({ match }) => {
  const { kmom } = match.params;
  const normalizedKmom = kmom.padStart(2, 0);

  switch (parseInt(kmom)) {
    case 1:
      return <Kmom01Page />;

    default:
      return (
        <PageNotFound
          body={`Rapport för kmom ${normalizedKmom} kunde inte hittas!`}
        />
      );
  }
};

export default ReportPage;
