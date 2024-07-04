import styled from "@emotion/styled";
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "centralized",
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: "13px 11px",
  width: "calc(307px - 22px)",
  minHeight: "415px",
  background: colors.white,
  boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
  display: centralized ? "flex" : "auto",
  flexDirection: "column",
  alignItems: centralized ? "center" : "auto",
  justifyContent: centralized ? "center" : "auto",
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "22px",
  // lineHeight: "42px",
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const MonsterImage = styled.img`
  height: 178px;
  width: 283px;
  margin-bottom: 14px;
  border-radius: 7px;
  object-fit: contain;
`;

export const Separator = styled.div`
  width: 283px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 5px;
`;

export const SkillList = styled.div`
  width: 283px;
  height: auto;
  padding: 11px 0;
`;

export const Skill = styled.div`
  padding: 11px 0;

  h3 {
    color: ${colors.black};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 5px;
  }
`;
