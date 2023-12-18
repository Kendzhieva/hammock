import BlogCard from 'components/BlogCard';
import styles from './blog.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBlogs } from 'store/features/blogsSlice';

const Blog = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])
  const { blogs } = useSelector(state => state.blogsSlice)

  return (
    <div className={styles.blog}>
      <div className="container">
        <h2 className={styles.title}>Блог</h2>
        <div className={styles.cards}>
          {
            blogs && blogs.map((blog) => {
              return (
                <BlogCard
                  imgUrl={blog.images || 'https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'}
                  title={blog.title}
                  text={blog.content}
                  id={blog.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Blog;
