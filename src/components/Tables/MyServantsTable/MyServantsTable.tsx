import { useEffect, useState } from 'react';
import axios from 'axios';
import VisualizeAttributesButton from '../../Buttons/VisualizeServantDetailsButton';
import DatabaseServant from '../../../models/DatabaseServant';
import DeleteServantButton from '../../Buttons/DeleteServantButton';
import { handleServantDeletion } from '../../../handlers/handleServantDeletion';
import styled from 'styled-components';

const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const StyledTh = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: 18px;
  color: red;
`;


function MyServantsTable(props: { setIsLoadingModal, setSuccessToast, setFailureToast }) {
  const [servants, setServants] = useState<DatabaseServant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/servants/${localStorage.getItem('login')}`
      );
      if (response.status !== 200) {
        throw new Error('Erro ao buscar os servos.');
      }
      setServants(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServants();
  }, []);

  if (loading) return <LoadingText>Carregando...</LoadingText>;
  if (error) return <ErrorText>Erro: {error}</ErrorText>;

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Nome</StyledTh>
            <StyledTh></StyledTh>
            <StyledTh></StyledTh>
            <StyledTh></StyledTh>
          </tr>
        </thead>
        <tbody>
          {servants.map((servant) => (
            <StyledTr key={servant.id}>
              <StyledTd>{servant.name}</StyledTd>
              <StyledTd>
                <VisualizeAttributesButton servantName={servant.name} />
              </StyledTd>
              <StyledTd>
                <DeleteServantButton
                  onClick={() =>
                    handleServantDeletion(
                      servant.name,
                      props.setIsLoadingModal,
                      fetchServants,
                      props.setSuccessToast,
                      props.setFailureToast
                    )
                  }
                />
              </StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export default MyServantsTable;
