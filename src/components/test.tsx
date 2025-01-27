"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Test = () => {
  const t = useTranslations("test");
  return (
    <div>
      <h1>{t("message")}</h1>
    </div>
  );
};

export default Test;
