/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Activities = () => {
    return (
        <div>
            <div className="overflow-x-auto md:mx-16 md:my-16">
                <div className='flex justify-between mb-4'>
                    <p className='font-bold'>History</p>
                    <div className='flex justify-between gap-4'>
                        <p className='bg-green-500 rounded p-2'>All</p>
                        <p className='border-2 border-orange-400 rounded-lg p-2'>Withdraw</p>
                        <p className='border-2 border-orange-400 rounded-lg p-2'>Withdraws</p>
                        <p className='border-2 border-orange-400 rounded-lg p-2'>All Time</p>
                    </div>
                </div>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td className='text-center'>Transaction Id</td>
                            <td className='text-center'>Type</td>
                            <td></td>
                            <td className='text-center'>Date</td>
                            <td></td>
                            <td className='text-center'>Status</td>
                            <td></td>
                            <td className='text-center'>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>#<span>2e45d</span></td>
                            <td className='text-center'>Bitcoin</td>
                            <td></td>
                            <td>Apr 14,2023</td>
                            <td></td>
                            <td className='text-center bg-red-400 rounded-lg'>Panding</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>#<span>2y67w</span></td>
                            <td className='text-center'>Binance</td>
                            <td></td>
                            <td>Apr 15, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>#<span>2i54t</span></td>
                            <td className='text-center'>Dashcoin</td>
                            <td></td>
                            <td>Apr 20, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-400 rounded-lg'>Panding</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>#<span>2t67u</span></td>
                            <td className='text-center'>Dogecoin</td>
                            <td></td>
                            <td>July 5, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-700 rounded-lg'>Dinied</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>#<span>2y65w</span></td>
                            <td className='text-center'>Ethereum</td>
                            <td></td>
                            <td>July 10, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>#<span>2u87p</span></td>
                            <td className='text-center'>Tether</td>
                            <td></td>
                            <td>July 15, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Avpproved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>#<span>2q56v</span></td>
                            <td className='text-center'>Bitcoin</td>
                            <td></td>
                            <td>July 16, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>#<span>2r45s</span></td>
                            <td className='text-center'>Binance</td>
                            <td></td>
                            <td>July 20, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>#<span>2o98p</span></td>
                            <td className='text-center'>Dashcoin</td>
                            <td></td>
                            <td>July 21, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-700 rounded-lg'>Dinied</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>#<span>2f58f</span></td>
                            <td className='text-center'>Tether</td>
                            <td></td>
                            <td>July 23, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-400 rounded-lg'>Panding</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>#<span>2y74r</span></td>
                            <td className='text-center'>Ethreum</td>
                            <td></td>
                            <td>July 24,2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>#<span>2b76j</span></td>
                            <td className='text-center'>Tether</td>
                            <td></td>
                            <td>July 26, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>#<span>2e45d</span></td>
                            <td className='text-center'>Dashcoin</td>
                            <td></td>
                            <td>July 28, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-400 rounded-lg'>Panding</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>#<span>2y99o</span></td>
                            <td className='text-center'>Ethreum</td>
                            <td></td>
                            <td>July 29, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td>#<span>2e45m</span></td>
                            <td className='text-center'>Bitcoin</td>
                            <td></td>
                            <td>July 30, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>16</th>
                            <td>#<span>2t67t</span></td>
                            <td className='text-center'>Binence</td>
                            <td></td>
                            <td>July 31, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>17</th>
                            <td>#<span>2e45p</span></td>
                            <td className='text-center'>Tether</td>
                            <td></td>
                            <td>Aug 5, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>18</th>
                            <td>#<span>2e45a</span></td>
                            <td className='text-center'>Dashcoin</td>
                            <td></td>
                            <td>Aug 3, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>19</th>
                            <td>#<span>2e45u</span></td>
                            <td className='text-center'>Bitcoin</td>
                            <td></td>
                            <td>Aug 7, 2023</td>
                            <td></td>
                            <td className='text-center bg-green-500 rounded-lg'>Approved</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                        <tr>
                            <th>20</th>
                            <td>#<span>2s45p</span></td>
                            <td className='text-center'>Binance</td>
                            <td></td>
                            <td>Aug 10, 2023</td>
                            <td></td>
                            <td className='text-center bg-red-400 rounded-lg'>Panding</td>
                            <td></td>
                            <td>7.7657USDT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Activities;