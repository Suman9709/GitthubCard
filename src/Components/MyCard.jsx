import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import ThemeButton from './ThemeButton';

const MyCard = () => {
  const [profile, setProfile] = useState();
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [githubUrl, setGithubUrl] = useState('');

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
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);


  const { theme } = useContext(ThemeContext)


  return (
    <div className="w-full h-screen  flex justify-center items-center">
       
      <div className={`max-w-md w-full  p-6 rounded-lg shadow-lg flex flex-col items-center ${theme==="light"?'bg-white text-black':"bg-[#121729] text-white"}`}>
      
     <div className='flex w-full justify-end'>
      <ThemeButton />
     </div>
        <h1 className={`text-2xl font-semibold  mb-6 ${theme==="light"?'bg-white text-black':"bg-[#121729] text-white"}`}>My Github Profile</h1>

        <img
          src={profile}
          alt="profile"
          className='w-36 h-36 rounded-full object-cover mb-4'
        />

        <div className='text-center'>
          <h2 className={`text-2xl font-semibold ${theme==="light"?'bg-white text-black':"bg-[#121729] text-white"}`}>{name}</h2>
          <h3 className={`text-xl font-medium ${theme==="light"?'bg-white text-black':"bg-[#121729] text-white"} `}>{title}</h3>
          <p className={`text-lg  mt-4 ${theme==="light"?'bg-white text-black':"bg-[#121729] text-white"}`}>{description}</p>
          <a
            href={`${githubUrl}?tab=followers`}
            target='_blank'
            rel='noopener noreferrer'
            className={`mt-6 inline-block px-6 py-2 font-semibold text-lg rounded-full transition-colors ${theme === 'light' ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'bg-blue-700 hover:bg-blue-600 text-white'}`}
          >
            Follow Me
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default MyCard;
