import React from 'react';

const TopCrytoTable = () => {
        return (
                <>
                        <h1>This is table</h1>
                        <div className='flex flex-row overflow-x-auto my-20'>
                                <table className='shadow-2xl border border-slate-300 w-full'>
                                        <thead className='bg-white text-black text-center'>
                                                <th className='py-2 px-3'>Name</th>
                                                <th className='py-2 px-3'>address</th>
                                                <th className='py-2 px-3'>Furniture</th>
                                                <th className='py-2 px-3'>Price</th>
                                                <th className='py-2 px-3'>Status</th>
                                                <th className='py-2 px-3'>date</th>
                                                <th className='py-2 px-3'>total</th>
                                        </thead>
                                         <tbody className='divide-y divide-slate-200'>
                                                <tr className='text-center cursor-pointer'>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Asad</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>feni ssk road</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Book Shelf</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>4500$</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Shifted</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>15/08/2023</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>5000$</td>
                                                </tr>
                                                <tr className='text-center cursor-pointer'>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Asad</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>feni ssk road</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Book Shelf</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>4500$</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Shifted</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>15/08/2023</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>5000$</td>
                                                </tr>
                                                <tr className='text-center cursor-pointer'>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Asad</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>feni ssk road</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Book Shelf</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>4500$</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Shifted</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>15/08/2023</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>5000$</td>
                                                </tr>
                                                <tr className='text-center cursor-pointer'>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Asad</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>feni ssk road</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Book Shelf</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>4500$</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>Shifted</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>15/08/2023</td>
                                                        <td className='px-3 py-2 whitespace-nowrap'>5000$</td>
                                                </tr>
                                         </tbody>
                                </table>

                        </div>


                        <>
                                <div className="overflow-x-auto">
                                        <table className="table">
                                                {/* head */}
                                                <thead>
                                                        <tr>
                                                                <th>
                                                                        <label>
                                                                                <input type="checkbox" className="checkbox" />
                                                                        </label>
                                                                </th>
                                                                <th>Name</th>
                                                                <th>Job</th>
                                                                <th>Favorite Color</th>
                                                                <th></th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {/* row 1 */}
                                                        <tr>
                                                                <th>
                                                                        <label>
                                                                                <input type="checkbox" className="checkbox" />
                                                                        </label>
                                                                </th>
                                                                <td>
                                                                        <div className="flex items-center space-x-3">
                                                                                <div className="avatar">
                                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                                                {/* <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                                                                        </div>
                                                                                </div>
                                                                                <div>
                                                                                        <div className="font-bold">Hart Hagerty</div>
                                                                                        <div className="text-sm opacity-50">United States</div>
                                                                                </div>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        Zemlak, Daniel and Leannon
                                                                        <br />
                                                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                                </td>
                                                                <td>Purple</td>
                                                                <th>
                                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                                </th>
                                                        </tr>
                                                        {/* row 2 */}
                                                        <tr>
                                                                <th>
                                                                        <label>
                                                                                <input type="checkbox" className="checkbox" />
                                                                        </label>
                                                                </th>
                                                                <td>
                                                                        <div className="flex items-center space-x-3">
                                                                                <div className="avatar">
                                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                                                {/* <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                                                                        </div>
                                                                                </div>
                                                                                <div>
                                                                                        <div className="font-bold">Brice Swyre</div>
                                                                                        <div className="text-sm opacity-50">China</div>
                                                                                </div>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        Carroll Group
                                                                        <br />
                                                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                                                </td>
                                                                <td>Red</td>
                                                                <th>
                                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                                </th>
                                                        </tr>
                                                        {/* row 3 */}
                                                        <tr>
                                                                <th>
                                                                        <label>
                                                                                <input type="checkbox" className="checkbox" />
                                                                        </label>
                                                                </th>
                                                                <td>
                                                                        <div className="flex items-center space-x-3">
                                                                                <div className="avatar">
                                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                                                {/* <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                                                                        </div>
                                                                                </div>
                                                                                <div>
                                                                                        <div className="font-bold">Marjy Ferencz</div>
                                                                                        <div className="text-sm opacity-50">Russia</div>
                                                                                </div>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        Rowe-Schoen
                                                                        <br />
                                                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                                                </td>
                                                                <td>Crimson</td>
                                                                <th>
                                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                                </th>
                                                        </tr>
                                                        {/* row 4 */}
                                                        <tr>
                                                                <th>
                                                                        <label>
                                                                                <input type="checkbox" className="checkbox" />
                                                                        </label>
                                                                </th>
                                                                <td>
                                                                        <div className="flex items-center space-x-3">
                                                                                <div className="avatar">
                                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                                                {/* <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                                                                        </div>
                                                                                </div>
                                                                                <div>
                                                                                        <div className="font-bold">Yancy Tear</div>
                                                                                        <div className="text-sm opacity-50">Brazil</div>
                                                                                </div>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        Wyman-Ledner
                                                                        <br />
                                                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                                                </td>
                                                                <td>Indigo</td>
                                                                <th>
                                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                                </th>
                                                        </tr>
                                                </tbody>
                                                {/* foot */}
                                                <tfoot>
                                                        <tr>
                                                                <th></th>
                                                                <th>Name</th>
                                                                <th>Job</th>
                                                                <th>Favorite Color</th>
                                                                <th></th>
                                                        </tr>
                                                </tfoot>

                                        </table>
                                </div>
                        </>

                </>
        );
};

export default TopCrytoTable;