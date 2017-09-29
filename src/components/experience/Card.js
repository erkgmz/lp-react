import React, {PropTypes} from 'react';
import List from '../common/List';

const Card = ({title, image, description, link, writingProject, noFollow, tags, styles, inDevelopment, github}) => {
  return (
    <div className={styles.Card}>
      <img src={image.path} alt={image.alt} />

      <div className={styles.copyBlock}>
        <h3>{title}</h3>
        <p>{description}</p>

        <List listClass={styles.tags}
          items={tags}
          itemClass={styles.tag} />

        <div className={styles.linkWrap}>
          {github.repo &&
            <a href={github.link}
              target="_blank"
              rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
              VIEW ON GITHUB
            </a>}

          {link && !inDevelopment ? (
            <a href={link}
              target="_blank"
              rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
              {writingProject ? 'READ MY WORK' : 'GO TO LIVE SITE'}
              {/*These strings should go into a variable in the card object*/}
            </a>
          ) : (
            <p className={styles.mute}>IN DEVELOPMENT</p>
          )}
        </div>
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
  writingProject: PropTypes.bool,
  tags: PropTypes.array,
  noFollow: PropTypes.bool,
  styles: PropTypes.object.isRequired,
  inDevelopment: PropTypes.bool.isRequired,
  github: PropTypes.object
};
