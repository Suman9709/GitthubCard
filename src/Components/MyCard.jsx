import React, { useEffect, useState } from 'react';

const MyCard = () => {
  const [profile, setProfile] = useState();
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
 
  const [githubUrl, setGithubUrl] = useState('');
  const [follower, setFollower] = useState(0);

  const apiUrl = "https://api.github.com/users/Suman9709";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.avatar_url);
        setName(data.name);
        setTitle(data.login);
        setGithubUrl(data.html_url);
        setDescription(data.bio || "No Bio Available");
        setFollower(data.followers);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='max-w-md w-full bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-6'>My Github Profile</h1>

        <img
          src={profile}
          alt="profile"
          className='w-36 h-36 rounded-full object-cover mb-4'
        />

        <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-800'>{name}</h2>
          <h3 className='text-xl font-medium text-gray-500'>{title}</h3>
          <p className='text-lg text-gray-600 mt-4'>{description}</p>
          <a
            href={`${githubUrl}?tab=followers`}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block px-6 py-2 bg-yellow-500 text-white font-semibold text-lg rounded-full hover:bg-yellow-400 transition-colors'
          >
            Follow Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
