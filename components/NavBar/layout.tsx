import React, { Fragment, useEffect } from "react";
import MainHeader from "./NavBar";

const Layout: React.FC = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main className="mt-8 ">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
