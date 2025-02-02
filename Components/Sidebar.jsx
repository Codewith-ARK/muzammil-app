import React from 'react'

export default function Sidebar() {
  return (
    <div id='sidebar' className='fixed h-screen py-10 p-20 w-fit bg-gradient-to-b from-blue-600 to-green-600 flex-col gap-3'>
      <h1 className='mb-6 text-xl font-bold text-white'>Solution.com</h1>
      <div role="tablist" className="tabs tabs-bordered font-semibold">
        <a role="tab" className="text-white tab">Basic</a>
        <a role="tab" className="text-white tab tab-active">Advanced</a>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Type</span>
        </div>
        <select className="select select-bordered bg-transparent">
          <option disabled selected>Select</option>
        </select>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Position</span>
        </div>
        <select className="select select-bordered bg-transparent">
          <option disabled selected>Select</option>
          <option>Contract</option>
          <option>One-Time</option>
          <option>Recurring</option>
        </select>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Price</span>
        </div>
        <input type="range" min={0} max="100" defaultValue="40" className="range range-neutral" />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Distance</span>
        </div>
        <input type="range" min={0} max="100" defaultValue="60" className="range range-neutral" />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Time</span>
        </div>
        <input type="range" min={0} max="100" defaultValue="80" className="range range-neutral" />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-semibold text-white">Experience</span>
        </div>
        <input type="range" min={0} max="100" defaultValue="10" className="range range-neutral" />
      </label>
    </div>
  )
}
