"use client"
import Image from 'next/image';
import React from 'react';
import nftp from '../../../../public/nfts image.jpg'
import { FaCheckCircle } from 'react-icons/fa';

const nfts = [
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",

  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",
    "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
  },
  {
    "name": "@Camerown...",
    "id": 1,
    "description": "pulses of imagination #453",
    "rate": "768.097",

  },

]

const Explore = () => {
  return (
    <div className=' '>
      <div className='md:flex mt-8'>
        <div className='md:w-[30%] w-full px-4 border-r-2'>
          <div className="collapse collapse-plus bg-[#171f2a]">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title  font-medium">
              STATUS
            </div>
            <div className="collapse-content grid grid-cols-2 gap-2">
              <button className="btn btn-outline">BUY NOW</button>
              <button className="btn btn-outline btn-primary">ON ACTION</button>
              <button className="btn btn-outline btn-secondary">NEW</button>
              <button className="btn btn-outline btn-accent">OFFERED</button>
            </div>
          </div>
          <div className="collapse bg-[#171f2a] collapse-plus  my-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  font-medium">
              PRICE RANGE
            </div>
            <div className="collapse-content">
              <input type="number" name="" id="" />
              <input className='text-white' type="range" name="range" id="range" min={0} max={100} />
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#171f2a]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium">
              COLLECTION
            </div>
            <div className="collapse-content">
              <div className="form-control">
                <div className="input-group">
                  <input type="text" placeholder="Search…" className='bg-slate-800' />
                  <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>

              <li>Iron Flowar</li>
              <li>Creative web</li>
              <li>Art of Binary</li>
              <li>Art of Binary</li>


            </div>
          </div>
        </div>
        <div className='md:w-[70%] w-full'>
          <div className='md:flex items-center justify-evenly'>
            <p>5,686,066 items</p>
            <select className="select bg-slate-800 w-full max-w-xs">
              <option className='mt-4' disabled selected>Date Listed:Newest</option>
              <option>Date Listed:Newest</option>
              <option>Date Listed: Olldest</option>
              <option>Date Listed:Soonest</option>
              <option>Date Listed: Latest</option>
              <option>Maggie</option>
            </select>
          </div>

          <div className='grid md:grid-cols-3 gap-3 mt-8 px-4'>
            {
              nfts.map(nft =>
                <div key={nft.id}>
                  <div className="card card-compact bg-[#171f2a] shadow-xl">
                    <div className='flex items-center py-2 justify-center'>
                      <Image className='h-8 w-8 rounded-full' width={32} height={32} src="https://i.ibb.co/sVdVFpQ/person.jpg" alt=''></Image>
                      <p>{nft.name}</p>
                    </div>
                    <figure> <Image className='w-full' src={nftp} alt=''></Image> </figure>
                    <div className="card-body">
                      <p className='card-title'>{nft.description}</p>
                      <p className='flex items-center'>Chromory <FaCheckCircle></FaCheckCircle></p>
                      <p className='text-2xl font-semibold'>{nft.rate} ETH</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>

        </div>

      </div>
    </div>
  );
};

export default Explore;