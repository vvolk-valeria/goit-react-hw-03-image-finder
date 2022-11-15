import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <Item key={id} onClick={this.toggleModal}>
          <img src={webformatURL} alt={tags} />
        </Item>

        {showModal && (
          <Modal
            key={id}
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          ></Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
