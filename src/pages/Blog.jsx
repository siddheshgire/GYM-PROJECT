import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MessageSquare, User, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from '../utils/constants';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter posts based on search, category, and tag selection
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Our Blog" parentName="Pages" parentPath="#" />

      <section className="bg-darkBg py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Posts Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Filter Reset Alert */}
              {(selectedCategory || selectedTag || searchQuery) && (
                <div className="bg-neutral-900/60 p-4 flex justify-between items-center text-xs border border-neutral-800">
                  <span className="text-neutral-400">
                    Showing {filteredPosts.length} posts filtered by:{' '}
                    <strong className="text-primary font-bold">
                      {selectedCategory && `Category: ${selectedCategory}`}
                      {selectedTag && `Tag: #${selectedTag}`}
                      {searchQuery && `Search: "${searchQuery}"`}
                    </strong>
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:text-white uppercase font-bold tracking-wider hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Zero Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-darkBg-light border border-neutral-900">
                  <h3 className="text-white font-oswald text-xl uppercase font-bold tracking-wide mb-2">No posts found</h3>
                  <p className="text-neutral-500 text-xs">Try adjusting your filters or search query.</p>
                </div>
              )}

              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-darkBg-light group shadow-xl border border-neutral-900 overflow-hidden flex flex-col justify-between">
                    <div>
                      {/* Image */}
                      <div className="relative h-60 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{ backgroundImage: `url('${post.image}')` }}
                        />
                        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-oswald font-semibold uppercase tracking-wider py-1 px-3.5">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center space-x-4 text-xs text-neutral-500 font-semibold mb-4">
                          <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {post.date}</span>
                          <span className="flex items-center"><MessageSquare size={12} className="mr-1.5" /> {post.commentsCount} Comments</span>
                        </div>

                        {/* Title */}
                        <h4 className="text-white font-oswald text-lg font-bold uppercase tracking-wider mb-3 leading-snug group-hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>

                        <p className="text-neutral-400 text-xs leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary hover:text-white text-xs uppercase font-oswald font-bold tracking-widest transition-colors flex items-center"
                      >
                        Read More <ArrowRight size={12} className="ml-1.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* Search Widget */}
              <div className="bg-darkBg-light p-8 border border-neutral-900">
                <h4 className="text-white font-oswald text-sm font-bold uppercase tracking-widest mb-6">Search</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-850 px-4 py-3 text-neutral-300 text-xs focus:border-primary outline-none pr-10"
                  />
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-darkBg-light p-8 border border-neutral-900">
                <h4 className="text-white font-oswald text-sm font-bold uppercase tracking-widest mb-6">Categories</h4>
                <ul className="space-y-3.5 text-xs font-semibold uppercase">
                  {BLOG_CATEGORIES.map((cat, idx) => (
                    <li key={idx} className="flex justify-between items-center pb-2 border-b border-neutral-900/60 last:border-0 last:pb-0">
                      <button
                        onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                        className={`hover:text-primary transition-colors ${
                          selectedCategory === cat.name ? 'text-primary font-bold' : 'text-neutral-400'
                        }`}
                      >
                        {cat.name}
                      </button>
                      <span className="text-neutral-500">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag Cloud Widget */}
              <div className="bg-darkBg-light p-8 border border-neutral-900">
                <h4 className="text-white font-oswald text-sm font-bold uppercase tracking-widest mb-6">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {BLOG_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`text-[10px] uppercase font-bold tracking-wider px-3.5 py-2 transition-all duration-200 ${
                        selectedTag === tag
                          ? 'bg-primary text-white'
                          : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default Blog;
