import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import PreviewCollection from "../PreviewCollection/PriviewCollection";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
