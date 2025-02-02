import Sidebar from '@/Components/Sidebar'
import React from 'react'
import { FiAward, FiMessageSquare, FiSearch, FiUser, FiPhone, FiMic } from "react-icons/fi";

const mockUsers = [
  { name: "Jane Madison", avatar: "https://avatar.iran.liara.run/public/boy", rating: 4.9, match: 85, type: 50, price: 70, location: 30 },
  { name: "John Doe", avatar: "https://avatar.iran.liara.run/username?username=John+Doe", rating: 4.7, match: 90, type: 60, price: 75, location: 40 },
  { name: "Alice Smith", avatar: "https://avatar.iran.liara.run/username?username=A+S", rating: 4.8, match: 88, type: 55, price: 65, location: 35 },
  { name: "Robert Brown", avatar: "https://avatar.iran.liara.run/public/boy", rating: 4.5, match: 82, type: 45, price: 80, location: 25 },
  { name: "Emily Johnson", avatar: "https://avatar.iran.liara.run/username?username=E+J", rating: 4.6, match: 86, type: 50, price: 72, location: 28 },
  { name: "Michael Davis", avatar: "https://avatar.iran.liara.run/public/boy", rating: 4.9, match: 91, type: 65, price: 68, location: 38 },
  { name: "Sophia Wilson", avatar: "https://avatar.iran.liara.run/public/girl", rating: 4.7, match: 89, type: 58, price: 66, location: 32 },
  { name: "James Miller", avatar: "https://avatar.iran.liara.run/public/boy", rating: 4.8, match: 87, type: 54, price: 74, location: 33 }
];

export default function page() {
  return (
    <div className='relative flex'>
      <Sidebar />
      <section className='ps-[330px]'>
        <div id='navbar' className='px-6 py-4 flex justify-between items-center h-fit w-full'>
          <div role="tablist" className="tabs tabs-bordered">
            <a role="tab" className="tab">Find Agents</a>
            <a role="tab" className="tab tab-active">Proposals</a>
            <a role="tab" className="tab">Manage Listings</a>
          </div>
          <div className="indicator">
            <span className="indicator-item indicator-bottom indicator-end badge badge-xs badge-success"></span>
            <FiUser size={22} />
          </div>
        </div>
        <div className='h-[250px] overflow-hidden'>
          <img src="/map.png" alt="" />
        </div>

        <section className='px-10 py-6 flex flex-col gap-4'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <FiSearch size={22} className='me-1' />
            <FiMic size={22}/>
          </label>
          <div className='flex gap-2 items-center'>
            <p className='text-sm'><span className='font-semibold'>5</span> results for:</p>
            <p className='badge badge-md badge-outline opacity-40'>Bhitshah</p>
            <p className='badge badge-md badge-outline opacity-40'>Plumber</p>
            <button className='btn btn-success btn-outline btn-sm rounded-full'>Change</button>
          </div>
        </section>

        <section id='cards' className="px-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockUsers.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </section>
      </section>
    </div>
  )
}

function UserCard({ name, avatar, rating, match, type, price, location }) {
  return (
    <div className='px-4 py-6 flex gap-6 flex-col hover:shadow-lg transition-all cursor-pointer rounded-3xl border border-gray-300 hover:border-gray-500'>
      <div className='flex gap-4'>
        <CardUserAvatar avatar={avatar} rating={rating} />
        <CardBody name={name} type={type} price={price} location={location} />
        <CardMetrics match={match} />
      </div>
      <CardFooter />
    </div>
  );
}

function CardMetrics({ match }) {
  return (
    <div className='flex flex-col justify-between items-center gap-2'>
      <h6 className='text-sm font-semibold'>Match</h6>
      <div className="radial-progress text-info" style={{ "--value": match }} role="progressbar">{match}%</div>
    </div>
  );
}

function CardBody({ name, type, price, location }) {
  return (
    <div>
      <h4 className='text-lg font-semibold'>{name}</h4>
      <p className='text-sm flex justify-between items-center gap-4'>Type: <progress className="progress progress-success w-56" value={type} max="100"></progress></p>
      <p className='text-sm flex justify-between items-center gap-4'>Price: <progress className="progress progress-success w-56" value={price} max="100"></progress></p>
      <p className='text-sm flex justify-between items-center gap-4'>Location: <progress className="progress progress-warning w-56" value={location} max="100"></progress></p>
    </div>
  );
}

function CardUserAvatar({ avatar, rating }) {
  return (
    <div className="indicator">
      <span className="indicator-item indicator-bottom indicator-center badge badge-neutral">{rating}</span>
      <div className="grid place-items-center">
        <img className='object-cover w-40 aspect-square' src={avatar} alt="user avatar" />
      </div>
    </div>
  );
}

function CardFooter() {
  return (
    <div className='flex justify-end gap-2'>
      <button className='btn btn-outline btn-sm btn-info'><FiMessageSquare size={22} />Message</button>
      <button className='btn btn-outline btn-sm btn-success'><FiPhone size={22} />Call</button>
    </div>
  );
}