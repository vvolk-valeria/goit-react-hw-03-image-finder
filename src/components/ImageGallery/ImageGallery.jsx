import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImg } from '../services/img-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Container, Gallery, InitialPhrase } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    items: null,
    status: 'idle',
  };

  loadImg = async (newQuery, pageNumber) => {
    try {
      this.setState({ status: 'pending' });
      const { hits, totalHits } = await fetchImg(newQuery, pageNumber);
      this.setState({ items: hits, status: 'resolved' });

      if (totalHits === 0) {
        toast.error(
          'По вашему запросу ничего не найдено! Попробуйте что-то другое!'
        );
        this.setState({ status: 'idle' });
        return;
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.props.searchQuery;

    if (prevQuery !== newQuery) {
      this.loadImg(newQuery, 1);
    }
  }

  render() {
    const { status, items } = this.state;
    // const { searchQuery } = this.props;

    if (status === 'idle') {
      return (
        <Container>
          <InitialPhrase>Введите слово для поиска.</InitialPhrase>
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
      return toast.error('Упс! Что-то пошло не так!');
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
  // pageNumber: PropTypes.number.isRequired,
};
