import React from "react";
import styled from "styled-components";
import { Block } from "./Block";

export const BlocksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > ${Block} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
