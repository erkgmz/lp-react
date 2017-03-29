import React, {PropTypes} from 'react';
import List from '../common/List';

const Card = ({title, image, description, link, noFollow, tags, styles, inDevelopment}) => {
  return (
    <div className={styles.Card}>
      <img src={image.path}
        alt={image.alt} />

      <div className={styles.copyBlock}>
        <h4>{title}</h4>
        <p>{description}</p>
        {link && !inDevelopment ?
          <a href={link}
            target="_blank"
            rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
            VIEW
          </a> :
          <p className={styles.mute}>IN DEVELOPMENT</p>}

        <List listClass={styles.tags}
          items={tags}
          itemClass={styles.tag} />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.array,
  noFollow: PropTypes.bool,
  styles: PropTypes.object.isRequired,
  inDevelopment: PropTypes.bool.isRequired
};
