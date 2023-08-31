"use client"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import React from 'react';

const Explore = () => {
        return (
                <div className=' '>
                        <div className='md:flex mt-8'>
                                <div className='md:w-[30%] w-full px-4 border-r-2'>
                                <div className="collapse collapse-plus bg-base-200">
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
                                <div className="collapse collapse-plus bg-base-200 my-4">
                                        <input type="radio" name="my-accordion-3" />
                                        <div className="collapse-title  font-medium">
                                                PRICE RANGE
                                        </div>
                                        <div className="collapse-content">
                                                  <input type="number" name="" id="" />
                                             <input className='text-white' type="range" name="range" id="range" min={0} max={100} />
                                        </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                        <input type="radio" name="my-accordion-3" />
                                        <div className="collapse-title font-medium">
                                                 COLLECTION
                                        </div>
                                        <div className="collapse-content">
                          <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className='bg-slate-800'  />
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
                                        carddd
                        </div>

          </div>
     </div>
        );
};

export default Explore;