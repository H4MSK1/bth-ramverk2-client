import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import { ReportForm } from 'forms/report';
import { ActionButtons } from './ReportPage';
import ApiClient from 'api/client';

const ReportFormPage = ({ history, match }) => {
  const [reportData, setReportData] = React.useState({});

  const id = match.params.week && parseInt(match.params.week);
  const isEditing = id !== undefined;

  React.useEffect(() => {
    if (isEditing) {
      ApiClient.get(`/reports/week/${id}`)
        .then(res => {
          setReportData(res.data.data);
        })
        .catch(console.error);
    } else {
      setReportData({});
    }
  }, [isEditing]);

  const onSubmit = async formValues => {
    const { body, week } = formValues;
    const payload = { body, week };

    try {
      const res = await ApiClient[isEditing ? 'put' : 'post'](
        '/reports',
        payload,
      );
      history.push(`/reports/week/${res.data.data.week}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DefaultContainer
      column={{
        xs: 12,
        lg: { size: 10, offset: 1 },
      }}
    >
      <Jumbotron className="bg-secondary box-shadow">
        <h2>
          {isEditing ? `Update report for kmom (${id})` : 'Create a report'}
        </h2>

        {isEditing && (
          <ActionButtons reportId={id} history={history} disableEditOption />
        )}

        <ReportForm onSubmit={onSubmit} preFilledValues={reportData} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default ReportFormPage;
