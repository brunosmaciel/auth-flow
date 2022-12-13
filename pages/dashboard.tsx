import { GetServerSideProps } from "next"
import fetcher from "../services/fetcher"
import { useSession, signOut, getSession } from "next-auth/react"
import useSWR from 'swr'
import { Loading } from "../components/Loading"
export type UserData = {
  id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
}
export type DashboardProps = {
    name: string
    email: string
    image: string
}
 const Dashboard = ({...props})=>{
  const { data: session } = useSession()
  
  const {data,error,isLoading} = useSWR<UserData[]>('/users/',fetcher)

  const handleLogOut = ()=>{
    signOut()
    
  }
  
  

  return <>
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-sm">Logged as {session?.user?.email}</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
  <div className="container mx-auto flex flex-col items-center">
  {session && (
    <h1>Hey! {session.user?.name}</h1>
  )}
  {error && (
    <h3>{error.message}</h3>
  )}
  {isLoading ? (
    <Loading isLoading={isLoading}/>
  ) :(
    <ul>
    {data && (
      data.map(d =>(
        <li key={d.id}>{d.username}</li>
      ))
    )}
  </ul>
  )}
  <button onClick={handleLogOut} className="btn m-4">Log Out</button>
  </div>
  </>
}

export default Dashboard;



export const getServerSideProps:GetServerSideProps = async (ctx) =>{
  const session = await getSession(ctx)
  
if(!session){
  return {
    redirect:{
      destination:'/',
      permanent:false
    }
  }
}


  return {
    props:{
      session
    }
  }

}