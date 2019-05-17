import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as rxjs from 'rxjs'
import { FETCH_IMAGES } from './redux/actions/fetchImageTypes';

class ImagesContainer extends PureComponent{
  state = {
    page: 1,
    pageSize: 20,
  }

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
        const { page, pageSize } = this.state;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        for (let i = start + 1; i <= end; i += 1) {
          this.props.fetchImages(i);
        }

        // this.props.fetchImages({ start, end });

        this.setState(prevState => ({
          page: prevState.page + 1,
        }));
      }
    });
  }

  componentWillUnmount() {
    this.userScrollsSubscriber.unsubscribe();
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <h1>Heeheeheehee</h1>
        {images.map(i => (
          <a key={`image-${i.id}`} href={i.url}>
            <img src={i.thumbnailUrl} alt={i.title} />
            <p>{i.id}</p>
          </a>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const imagesState = state.get('images').toJS();
  return { ...imagesState };
};

const mapDispatchToProps = dispatch => ({
  // fetchImages: (range) => dispatch({
  //   type: FETCH_IMAGES,
  //   payload: range,
  // }),
  fetchImages: (id) => dispatch({
    type: FETCH_IMAGES,
    payload: id,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesContainer);
