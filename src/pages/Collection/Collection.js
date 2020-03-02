import React from "react";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import "./Collection.scss";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>JEBEM</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
