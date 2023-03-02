import styled from 'styled-components';

export const StatsButtonsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 5px;
  gap: 10px;
  margin: 10px 0 25px 0;
`;
export const StatsButtonsListItem = styled.li``;

export const StatsButton = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    border: 2px solid black;
    background-color: lightgray;
  }
  /* &::first-letter {
    font-size: 1.5rem;
  } */
`;
