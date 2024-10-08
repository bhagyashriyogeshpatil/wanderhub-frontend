// React and routing imports
import React from 'react';
import { Link, useHistory } from "react-router-dom";
// Bootstrap component imports
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// CSS imports
import styles from '../../styles/Post.module.css';
// Custom component imports
import { MoreDropdown } from "../../components/MoreDropdown";
import Avatar from "../../components/Avatar";
// Context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Axios instance import for API requests
import { axiosRes } from "../../api/axiosDefaults";


const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        savedposts_count,
        like_id,
        savedpost_id,
        title,
        content,
        image,
        place,
        region,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleSavePost = async () => {
        try {
            const { data } = await axiosRes.post("/savedposts/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, savedposts_count: post.savedposts_count + 1, savedpost_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleRemoveSavedPost = async () => {
        try {
            await axiosRes.delete(`/savedposts/${savedpost_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, savedposts_count: post.savedposts_count - 1, savedpost_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && postPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {content && <Card.Text className="text-center">{content}</Card.Text>}
                {place && (
                    <Card.Text className="text-center">
                        <i className="fa-solid fa-location-dot"></i>
                        {place}
                    </Card.Text>
                )}
                {region && (
                    <Card.Text className="text-center">
                        <i className="fa-solid fa-globe"></i>
                        {region}
                    </Card.Text>
                )}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}

                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    You can't save your own posts, they're saved on your profile!
                                </Tooltip>
                            }
                        >
                            <i className="fa-regular fa-bookmark" />
                        </OverlayTrigger>
                    ) : savedpost_id ? (
                        <span onClick={handleRemoveSavedPost}>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Remove post from saved posts!</Tooltip>}
                            >
                                <i className="fa-solid fa-bookmark" />
                            </OverlayTrigger>
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleSavePost}>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Click to save this post!</Tooltip>}
                            >
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to save posts!</Tooltip>}
                        >
                            <i className="fa-regular fa-bookmark" />
                        </OverlayTrigger>
                    )}
                    {savedposts_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;