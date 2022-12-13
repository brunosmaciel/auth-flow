import { useSession, signIn, getSession } from "next-auth/react"
import type { GetServerSideProps, NextPage } from 'next'
import {BsGithub,BsGoogle,BsTwitter} from 'react-icons/bs'
import { ChangeEvent} from "react"


const Home: NextPage = () => {
  
  const { data: session } = useSession()
  

  async function handleSubmit(e:ChangeEvent<HTMLFormElement>){
      e.preventDefault()
     
      
      
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      
        <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
      
          <h1 className="text-3xl font-semibold text-center text-purple-700">{session?.user?.name ?? 'Ola! '}</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
              <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </div>
              <div className="w-full  flex justify-around mt-4">
                <button className='cursor-pointer p-2'>
                  <BsGithub size={30} onClick={()=>signIn("github")}/>
                </button>
                <button className='cursor-pointer p-2 ' onClick={()=>signIn("google")} >
                  <BsGoogle size={30}/>
                </button>
                <button className='cursor-pointer p-2'>
                <BsTwitter size={30}/>
                </button>
              </div>
              <p className="mt-8 text-xs font-light text-center text-gray-700"> Go to <a href="/dashboard" className="font-medium text-purple-600 hover:underline">Dashboard</a></p>
            </div></form>
        </div>
      </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (ctx) =>{
    const session = await getSession(ctx)
    
  if(session){
    return {
      redirect:{
        destination:'/dashboard',
        permanent:false
      },
      props:{
        session
      }
      
    }
  }

  return{
    props:{
      session
    }
  }
}