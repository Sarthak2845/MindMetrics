import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
const [stressResult, setStressResult] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://mindmetrics-backend.vercel.app/api/user-info', { withCredentials: true });
        setUser(response.data);
      } catch {
        setError('Failed to fetch user information. Please try again.');
      }
    };

    fetchUserInfo();
  }, []);
  
  useEffect(()=>{
    const storedResult=localStorage.getItem('stressResult');
    if(storedResult){
      setStressResult(JSON.parse(storedResult));
    }
  },[])

  if (error) {
    return <div className="text-red-500 text-center mt-24 text-6xl">{error}</div>;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#020e1d]">
        <div className="loader text-white"></div>
      </div>
    );
  }
  const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(
    user?.name || "Guest"
  )}`;
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#020e1d]">
      <h1 className="text-4xl text-amber-100 font-bold mb-4">User Profile</h1>
      <img src={avatarUrl} alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-500 p-4 mt-8" />
      <h2 className="text-2xl font-semibold text-gray-100">{user.name}</h2>
      <p className="text-gray-200">{user.email}</p>
      <div className='flex items-center justify-center mt-10'>
          <div className='bg-[#061a12] p-4 rounded-lg shadow-md border-2 border-[#0fdb80]'>
            <h3 className='font-bold text-lg text-center'>Stress Level</h3>
            <p className='text-sm mt-2'>{stressResult ? `Your stress level is: ${stressResult.stressLevel}` : 'No stress result available.'}</p>
            <p className='text-sm mt-2'>{stressResult ? `Your stress score is: ${stressResult.resultScore}` : 'No stress score available.'}</p>
            <p className='text-sm mt-2'>{stressResult ? `Last Test Taken On: ${stressResult.date}` : 'No stress category available.'}</p>
            <div className='flex items-center justify-center'>
            {
              stressResult? (
               <Link to={"/test"}>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:cursor-pointer hover:bg-green-600">
                Retake Test
              </button>
               </Link>
              ):(
               <Link to={"/instructions"}>
                 <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                Take Test
              </button>
               </Link>
              )
            }
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
