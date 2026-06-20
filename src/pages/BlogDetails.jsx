import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MessageSquare, ArrowLeft, ArrowRight, User } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import { BLOG_POSTS } from '../utils/constants';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id || '1')) || BLOG_POSTS[0];

  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Marshmello Gomez',
      date: 'Dec 16, 2025',
      text: 'Great advice! Physical fitness has definitely helped keep my mental health in balance. Thanks for sharing!'
    },
    {
      id: 2,
      author: 'Athart Rachel',
      date: 'Dec 18, 2025',
      text: 'Absolutely spot on. Consistency is key, and the routine itself really eases stress.'
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    const newComment = {
      id: comments.length + 1,
      author: commentName,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: commentText
    };

    setComments([...comments, newComment]);
    setCommentName('');
    setCommentEmail('');
    setCommentText('');
  };

  const nextPostId = post.id === BLOG_POSTS.length ? 1 : post.id + 1;
  const prevPostId = post.id === 1 ? BLOG_POSTS.length : post.id - 1;

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Blog Details" parentName="Our Blog" parentPath="/blog" />

      <section className="bg-darkBg py-24 select-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Post Header Image */}
          <div className="relative h-[300px] sm:h-[450px] mb-12 overflow-hidden border border-neutral-900 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Post Meta */}
          <div className="flex items-center space-x-6 text-xs text-neutral-500 font-bold uppercase tracking-wider mb-6">
            <span className="flex items-center text-primary"><User size={12} className="mr-1.5" /> By {post.author}</span>
            <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {post.date}</span>
            <span className="flex items-center"><MessageSquare size={12} className="mr-1.5" /> {comments.length} Comments</span>
          </div>

          {/* Post Title */}
          <h1 className="text-white font-oswald text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-wider mb-8">
            {post.title}
          </h1>

          {/* Post Content */}
          <div
            className="prose prose-invert max-w-none text-neutral-400 text-sm leading-relaxed mb-12 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags Cloud bottom of post */}
          <div className="flex flex-wrap gap-2 pb-10 border-b border-neutral-900">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-neutral-900 text-neutral-400 py-1.5 px-3">
                #{tag}
              </span>
            ))}
          </div>

          {/* Next/Prev navigation buttons */}
          <div className="flex justify-between items-center py-6 border-b border-neutral-900 text-xs font-oswald uppercase tracking-wider font-semibold">
            <Link to={`/blog/${prevPostId}`} className="flex items-center text-neutral-400 hover:text-primary transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Previous Post
            </Link>
            <Link to={`/blog/${nextPostId}`} className="flex items-center text-neutral-400 hover:text-primary transition-colors">
              Next Post <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          {/* Comments Widget */}
          <div className="mt-16 mb-16">
            <h3 className="text-white font-oswald text-xl uppercase font-bold tracking-wider mb-10">
              Comments ({comments.length})
            </h3>
            
            <div className="space-y-8">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-4 items-start bg-darkBg-light p-6 border border-neutral-900">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 flex-shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h5 className="text-white font-oswald text-sm font-bold uppercase tracking-wider">{comment.author}</h5>
                      <span className="text-[10px] text-neutral-500 font-bold">{comment.date}</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="bg-darkBg-light p-8 sm:p-12 border border-neutral-900 shadow-xl">
            <h3 className="text-white font-oswald text-xl uppercase font-bold tracking-wider mb-8">
              Leave a Comment
            </h3>
            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 px-5 py-3.5 text-xs text-white placeholder-neutral-500 focus:border-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 px-5 py-3.5 text-xs text-white placeholder-neutral-500 focus:border-primary outline-none"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 px-5 py-3.5 text-xs text-white placeholder-neutral-500 focus:border-primary outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-white font-oswald text-xs uppercase font-bold tracking-wider py-4 px-10 hover:bg-primary-hover transition-colors"
              >
                Submit Comment
              </button>
            </form>
          </div>

        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default BlogDetails;
