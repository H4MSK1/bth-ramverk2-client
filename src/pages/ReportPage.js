import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Jumbotron,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import { RenderOnlyAuth } from 'api/utils';
import PageNotFound from './PageNotFound';
import ApiClient from 'api/client';

export const ActionButtons = ({
  history,
  reportId,
  disableEditOption = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpenState = () => setIsOpen(state => !state);
  const handleDelete = async () => {
    try {
      await ApiClient.delete(`/reports/week/${reportId}`);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RenderOnlyAuth>
      <ButtonDropdown isOpen={isOpen} toggle={toggleOpenState}>
        <DropdownToggle color="primary" caret>
          Manage report
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Actions</DropdownItem>
          {!disableEditOption && (
            <DropdownItem
              onClick={() => history.push(`/reports/update/${reportId}`)}
            >
              Edit
            </DropdownItem>
          )}
          <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </RenderOnlyAuth>
  );
};

const ReportPage = ({ history, match }) => {
  const [reportData, setReportData] = React.useState({});
  const [hasError, setHasError] = React.useState(false);
  const id = match.params.week && parseInt(match.params.week);

  const fetchData = async () => {
    try {
      const res = await ApiClient.get(`/reports/week/${id}`);
      setReportData(res.data.data);
      setHasError(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);

  if (hasError) {
    return <PageNotFound body={`Report #${id} can't be found!`} />;
  }

  return (
    <DefaultContainer>
      <Jumbotron className="bg-secondary box-shadow">
        <h1>Kmom {String(id).padStart(2, 0)}</h1>

        <ActionButtons reportId={id} history={history} />

        <hr />
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
        <hr />

        <ReactMarkdown source={reportData.body} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default ReportPage;
