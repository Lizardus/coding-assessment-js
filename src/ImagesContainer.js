import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FETCH_IMAGES } from './redux/actions/fetchImageTypes';

class ImagesContainer extends PureComponent{
  render() {
    return (
      <div>
        <h1>Heeheeheehee</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const stateJs = state.toJS();
  return { ...state };
};

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch({
    type: FETCH_IMAGES,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesContainer);
