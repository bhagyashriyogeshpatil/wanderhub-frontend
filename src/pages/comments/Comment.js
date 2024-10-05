// React and routing imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Bootstrap component imports
import Media from "react-bootstrap/Media";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// CSS imports
import styles from "../../styles/Comment.module.css";
// Custom component imports
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
// Context imports
import { useCurrentUser } from '../../contexts/CurrentUserContext';
// Axios instance import for API requests
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        commentreaction_id,
        commentreactions_count,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleCommentReaction = async () => {
        try {
            const { data } = await axiosRes.post("/commentreactions/", { comment: id });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? { ...comment, commentreactions_count: comment.commentreactions_count + 1, commentreaction_id: data.id }
                        : comment;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteCommentReaction = async () => {
        try {
            await axiosRes.delete(`/commentreactions/${commentreaction_id}`);
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? { ...comment, commentreactions_count: comment.commentreactions_count - 1, commentreaction_id: null }
                        : comment;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't react to your own comment!</Tooltip>}
                        >
                            <i className={`${styles.ThumbsUp} fa-regular fa-thumbs-up`} />
                        </OverlayTrigger>
                    ) : commentreaction_id ? ( 
                        <span onClick={handleDeleteCommentReaction}>
                            <i className={`${styles.ThumbsUp} fa-solid fa-thumbs-up`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleCommentReaction}>
                            <i className={`${styles.ThumbsUp} fa-regular fa-thumbs-up`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to react to comments!</Tooltip>}
                        >
                            <i className={`${styles.Heart} far fa-thumbs-up`} />
                        </OverlayTrigger>
                    )}
                    {commentreactions_count}
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Comment;