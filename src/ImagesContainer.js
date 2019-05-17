import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as rxjs from 'rxjs'
import { FETCH_IMAGES } from './redux/actions/fetchImageTypes';

class ImagesContainer extends PureComponent{
  componentDidMount() {
    const userScrolls = rxjs.fromEvent(
      window,
      'scroll'
    );

    this.userScrollsSubscriber = userScrolls.subscribe((evt) => {
      const doc = document.documentElement;
      const offset = doc.scrollTop + window.innerHeight;
      const height = doc.offsetHeight;

      if (offset === height) {
        this.props.fetchImages();
      }
    });
  }

  componentWillUnmount() {
    this.userScrollsSubscriber.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Heeheeheehee</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const imagesState = state.get('images').toJS();
  return { ...imagesState };
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
