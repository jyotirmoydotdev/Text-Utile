import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class homeitem extends Component {
  render() {
    let {name,to}=this.props;
    return (
      <div className='p-3 flex flex-row gap-2 bg-slate-800 items-center text-white w-fit rounded-md '>
        {name} <div className="rounded-sm p-1 text-black  bg-slate-300">
          <Link to={to} className='px-2'>↗</Link>
        </div>
      </div>
    )
  }
}

export default homeitem