// import React, { Fragment, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../Cards";

const ShowCollection = props => {
  return (
    props.profile.profile && (
      <div>
        {props.profile.profile.collections.length ? (
          <div className="row justify-content-center">
            {props.profile.profile.collections.map(collection => (
              <Card
                key={collection._id}
                {...collection}
                deleteFunction={() =>
                  props.deleteCollection(
                    collection._id,
                    props.profile.profile._id
                  )
                }
                linkInfo={{
                  pathname: "/collectiondetails",
                  state: {
                    collectionId: collection._id,
                    profileId: props.profile.profile._id
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <p className="no-collections">No Collections Yet</p>
        )}
      </div>
    )
  );
};

ShowCollection.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(ShowCollection);
