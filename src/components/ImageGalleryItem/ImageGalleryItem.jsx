import PropTypes from 'prop-types';

export function ImageGalleryItem({ id, webformatURL, largeImageURL, tags }) {
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
