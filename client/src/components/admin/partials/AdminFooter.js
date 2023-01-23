import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        © {moment().format("YYYY")} ,All Copyrights Reserved AGRICOM
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
