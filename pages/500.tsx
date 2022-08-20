import React from "react";
import { Htag } from "../components";
import { withLayout } from "../layout/Layout";


function Error500(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Ошибка 500</Htag>
    </div>
  );
}

export default withLayout(Error500);