import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 820px;
  margin: 0 auto;
`;

export const BattleSection = styled.section`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const StartBattleButton = styled(Button)`
  // background: disabled ? colors.lightGreen : colors.darkGreen,

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  padding: 12px 30px;
  text-transform: capitalize;
  &:hover {
    /* background: colors.darkGreenHover, */
  }
`;
