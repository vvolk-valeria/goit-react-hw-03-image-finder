import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImg } from '../services/img-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Container, Gallery, InitialPhrase } from './ImageGallery.styled';
import { Button } from '../Button/Button';

const PER_PAGE = 12;

export class ImageGallery extends Component {
  state = {
    items: [],
    status: 'idle',
    page: 1,
  };

  loadImg = async newQuery => {
    const pageNumber = this.state.page;

    try {
      this.setState({ status: 'pending' });
      const { hits, totalHits } = await fetchImg(
        newQuery,
        pageNumber,
        PER_PAGE
      );

      this.setState(prevState => ({
        items:
          this.state.page === 1 ? [...hits] : [...prevState.items, ...hits],
        status: 'resolved',
      }));

      if (totalHits === 0 || hits.lenght === 0) {
        toast.error(
          'No results were found for your request! Try something else!'
        );
        this.setState({ status: 'idle' });
        return;
      }
      if (pageNumber >= totalHits / hits.length || hits.length === 0) {
        return toast.error(
          `We're sorry, but you've reached the end of search results.`
        );
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.props.searchQuery;

    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery) {
      this.setState({ page: 1, items: [] });

      if (newPage === 1) {
        this.loadImg(newQuery);
      }
      return;
    }

    if (prevPage !== newPage) {
      this.loadImg(newQuery);
      return;
    }
  }

  render() {
    const { status, items } = this.state;

    if (status === 'idle') {
      return (
        <Container>
          <InitialPhrase>Enter a search term.</InitialPhrase>
        </Container>
      );
    }
    if (status === 'pending') {
      return (
        <Container>
          <Loader />
        </Container>
      );
    }
    if (status === 'rejected') {
      return toast.error('Oops! Something is wrong!');
    }
    if (status === 'resolved') {
      return (
        <Container>
          <Gallery>
            {items.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              );
            })}
          </Gallery>
          {items.length < PER_PAGE ? '' : <Button loadMore={this.loadMore} />}
        </Container>
      );
    }
  }
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
