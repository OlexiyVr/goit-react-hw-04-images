import styled from '@emotion/styled';

/*
 *Buton (Load more)
 */

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 10px 40px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #f0f700;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;

  :hover,
  :focus {
    background-color: #1d2561;
    color: #f7bd00;
  }
`;
