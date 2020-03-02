import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../components/PreviewCollection/PriviewCollection";

import { selectShopCollections } from "../../redux/shop/shop.selectors";

const Shop = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
