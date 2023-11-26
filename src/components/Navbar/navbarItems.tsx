import {
  AssessmentAndEvaluationIcon,
  ClassIcon,
  GuidanceVideosIcon,
  HomeIcon,
  QuestionBankIcon,
  QuizIcon,
  SolventIcon,
  StatisticsIcon,
} from "@/components/icons";
import React from "react";

export const menuItems = [
  {
    icon: <HomeIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <ClassIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <QuestionBankIcon />,
    link: "/",
    active: true,
  },
  {
    icon: <QuizIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <GuidanceVideosIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <StatisticsIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <AssessmentAndEvaluationIcon />,
    link: "/",
    active: false,
  },
];

export const menuSubItems = [
  {
    icon: <SolventIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <HomeIcon />,
    link: "/",
    active: false,
  },
  {
    icon: <HomeIcon />,
    link: "/",
    active: false,
  },
];
