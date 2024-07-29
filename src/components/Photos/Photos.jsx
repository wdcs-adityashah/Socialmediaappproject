import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import './Photos.css';

export default function Photos() {
  const { albumId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage] = useState(6);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      })
      setSearchParams({ albumId, page: currentPage });
  }, [currentPage, albumId, setSearchParams]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?albumId=${albumId}&page=${pageNumber}`);
  };
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = photos.slice(firstPostIndex, lastPostIndex);

  return (
    <>
   
    <Header/>
    <div className='userpictures'>
      <div className="currentpictures">
        {currentPosts.map(currentPost => (
          <img key={currentPost.id} src={currentPost.url} alt={currentPost.title} />
        ))}
      </div>
      <Pagination 
        totalPosts={photos.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={handlePageChange} 
      />
    </div>
    </>
  );
}