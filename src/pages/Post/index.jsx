import styles from './post.module.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBlog } from "store/features/blogsSlice";
import { useEffect } from "react";

const Post = () => {

  const { postId } = useParams()

  const dispatch = useDispatch()
  const { blog } = useSelector(state => state.blogsSlice)

  useEffect(() => {
    dispatch(getOneBlog(+postId))
  }, [postId])

  console.log(+postId);


  return (
    <div className={styles.post}>
      <div className="container">
        <div className={styles.postCard}>
          <h2 className={styles.title}>{blog.title}</h2>
          <div className={styles.info}>
            <img
              className={styles.img}
              src={blog.images || 'https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'}
              alt=''
            />
            <p className={styles.text}>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Post;
