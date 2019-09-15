import React from 'react';
import PageNotFound from './PageNotFound';
import Reports from './reports';

const ReportPage = ({ match }) => {
  const kmom = parseInt(match.params.kmom);

  if (kmom in Reports) {
    const ReportComponent = Reports[kmom];
    return <ReportComponent />;
  }

  return <PageNotFound body={`Rapport för kmom ${kmom} kunde inte hittas!`} />;
};

export default ReportPage;
