import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Album.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';
const Album = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [photocount,setPhotoCount] = useState(0);
  const { albumId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
      })
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?userId=${albumId}`)
      .then(response => response.json())
      .then(data => {
        setPhotoCount(data.length);
      })
  }, [albumId]);
  return (
    <>
    <Header/>
    <section className="main_albumdetails">
    <div className="container">
      <h2 className='album_heading'>Album Details for User ID: {id}</h2>
      <Table className='album_table'  bordered hover dark>
        <thead>
          <tr>
            <th>Album ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Photos:{photocount}</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.userId}</td>
              <td>{album.title}</td>
              <td>
                <Link to={`/photos/${album.id}`}>
                  <button>View More</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </section>
  
    </>
  );
};

export default Album;
