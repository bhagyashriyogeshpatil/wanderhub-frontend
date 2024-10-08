// React and routing imports
import React from "react";
import { Link } from "react-router-dom";
// Bootstrap component imports
import Button from "react-bootstrap/Button";
// CSS imports
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
// Context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileData } from '../../contexts/ProfileDataContext';
// Custom component imports
import Avatar from "../../components/Avatar";

const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.FollowButton} ${btnStyles.BrownOutline}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.FollowButton} ${btnStyles.Brown}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;