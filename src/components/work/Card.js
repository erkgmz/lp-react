import React, {PropTypes} from 'react';
import List from '../common/List';

const Card = ({title, image, description, link, noFollow, tags, styles, inDevelopment, github}) => {
  return (
    <div className={styles.Card}>
      <img src={image.path}
        alt={image.alt} />

      <div className={styles.copyBlock}>
        <h4>{title}</h4>
        <p>{description}</p>

        {github.repo &&
          <a href={github.link}
            target="_blank"
            rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
            View Github
          </a>}

        {link && !inDevelopment ? (
          <a href={link}
            target="_blank"
            rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
            View Live
          </a>
        ) : (
          <p className={styles.mute}>IN DEVELOPMENT</p>
        )}

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
  inDevelopment: PropTypes.bool.isRequired,
  github: PropTypes.object
};
