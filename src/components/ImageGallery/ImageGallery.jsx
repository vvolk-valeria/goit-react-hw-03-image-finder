import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImg } from '../services/img-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    items: null,
    status: 'idle',
    showModal: false,
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

    // const { items, error, status } = this.state;
    // const { searchQuery } = this.props;

    if (status === 'idle') {
      return <h1>Введите слово.</h1>;
    }
    if (status === 'pending') {
      console.log('лоадер');
      return <Loader />; //лоадер
      // return <PokemonPendingViev searchQuery={searchQuery} />;
    }
    if (status === 'rejected') {
      return toast.error('Упс! Что-то пошло не так!');
    }
    if (status === 'resolved') {
      return (
        <ul>
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
        </ul>
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
