"use client"

import { useState } from "react";

import NoData from "./NoData";

const CripticItem = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleVoteClick = () => {
    setShowButtons(true);
    setShowContent(false);
  };

  const handleAcceptClick = () => {
    setShowContent(true);
  };

  const handleRejectClick = () => {
    setShowContent(true);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {["ACTIVE 4", "OFF-CHAIN", "EXECUTABLE", "PAST 3"].map((tabNumber) => (
            <button
              key={tabNumber}
              onClick={() => handleTabClick(tabNumber)}
              className={`${activeTab === tabNumber
                ? "border-b-2 border-green-500 text-white"
                : "text-gray-500 hover:text-green-500"
                } px-4 py-2 transition-all duration-300 ease-in-out`}
            >
              {tabNumber}
            </button>
          ))}
        </div>
      </div>
      <hr className="bg-gray-400" />
      <div className="mt-4">
        {activeTab === "ACTIVE 4" && (
          <>


            <div className="p-4 bg-[#212b39] text-white rounded-md grid md:grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="md:text-2xl font-semibold">PTIP 50 - Treasury Assets Management #1</h2>
                <p className="text-gray-600">Proposal #1</p>

                {!showButtons ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={handleVoteClick}
                  >
                    Vote Now
                  </button>
                ) : (
                  <>
                    <div className="space-x-2 mt-4">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={handleAcceptClick}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={handleRejectClick}
                      >
                        Reject
                      </button>
                    </div>

                    <div className="mt-4">
                      <p>This is the additional content to display.</p>
                      <h3 className="text-2xl font-semibold">Vote</h3>
                      <div className="w-full h-2 rounded-md my-2 flex">
                        <div className="bg-green-500 w-5/6"></div>
                        <div className="bg-red-500 w-1/6"></div>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-green-500 text-xl md:text-2xl">ACCEPTED</h3>
                          <h4 className="text-green-500">10140 (90%)</h4>
                        </div>
                        <div>
                          <h3 className="text-red-500 text-xl md:text-2xl">REJECTED</h3>
                          <h4 className="text-red-500">303 (10%)</h4>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p>Voter</p>
                        </div>
                        <div>
                          <p>Voting weight</p>
                        </div>
                        <div>
                          <p>Decision</p>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">32125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>
                      <div className="border border-dotted h-1 w-full p-4"></div>

                      <div className="mt-5 text-gray-200">
                        <h3 className="text-lg uppercase ">Description</h3>
                        <p className="text-lg mt-5">SIMPLE SUMMARY</p>
                        <p className="mt-2">Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum criptic until the end of October. Extend prizes and drip for the POOL pool as well.</p>
                        <br />
                        <p className="text-lg mt-5">MOTIVATION</p>
                        <p className="mt-2">The POOL drips for most Ethereum criptic will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be. WHERE CAN I GET SOME? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <br />
                        <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Show more</button>
                        <br />
                        <div className="flex justify-center items-center text-center">
                          <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Add POOL token to MetaMask</button>
                        </div>
                      </div>

                    </div>


                  </>
                )}

                {showContent && (
                  <div className="mt-4">
                    <h2>data not found</h2>
                  </div>
                )}
              </div>

              {/* Right Section (30%) */}
              <div className="col-span-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10">VOTING ENDS IN</h3>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-3xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 50 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>


            <div className="p-4 bg-[#212b39] text-white rounded-md grid md:grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="md:text-2xl font-semibold">PTIP 63 - Claim Rewards from Locked Staking</h2>
                <p className="text-gray-600">Proposal #5</p>

                {!showButtons ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={handleVoteClick}
                  >
                    Vote Now
                  </button>
                ) : (
                  <>
                    <div className="space-x-2 mt-4">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={handleAcceptClick}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={handleRejectClick}
                      >
                        Reject
                      </button>
                    </div>

                    <div className="mt-4">
                      <p>This is the additional content to display.</p>
                      <h3 className="text-2xl font-semibold">Vote</h3>
                      <div className="w-full h-2 rounded-md my-2 flex">
                        <div className="bg-green-500 w-5/6"></div>
                        <div className="bg-red-500 w-1/6"></div>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-green-500 text-xl md:text-2xl">ACCEPTED</h3>
                          <h4 className="text-green-500">10140 (90%)</h4>
                        </div>
                        <div>
                          <h3 className="text-red-500 text-xl md:text-2xl">REJECTED</h3>
                          <h4 className="text-red-500">303 (10%)</h4>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p>Voter</p>
                        </div>
                        <div>
                          <p>Voting weight</p>
                        </div>
                        <div>
                          <p>Decision</p>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">32125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>
                      <div className="border border-dotted h-1 w-full p-4"></div>

                      <div className="mt-5 text-gray-200">
                        <h3 className="text-lg uppercase ">Description</h3>
                        <p className="text-lg mt-5">SIMPLE SUMMARY</p>
                        <p className="mt-2">Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum criptic until the end of October. Extend prizes and drip for the POOL pool as well.</p>
                        <br />
                        <p className="text-lg mt-5">MOTIVATION</p>
                        <p className="mt-2">The POOL drips for most Ethereum criptic will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be. WHERE CAN I GET SOME? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <br />
                        <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Show more</button>
                        <br />
                        <div className="flex justify-center items-center text-center">
                          <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Add POOL token to MetaMask</button>
                        </div>
                      </div>

                    </div>


                  </>
                )}

                {showContent && (
                  <div className="mt-4">
                    <h1>data not found</h1>
                  </div>
                )}
              </div>

              {/* Right Section (30%) */}
              <div className="col-span-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10">VOTING ENDS IN</h3>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 50 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#212b39] text-white rounded-md grid md:grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="md:text-2xl font-semibold">PTIP 64 - Loan and/or fixed term with the Cake</h2>
                <p className="text-gray-600">Proposal #7</p>

                {!showButtons ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={handleVoteClick}
                  >
                    Vote Now
                  </button>
                ) : (
                  <>
                    <div className="space-x-2 mt-4">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={handleAcceptClick}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={handleRejectClick}
                      >
                        Reject
                      </button>
                    </div>

                    <div className="mt-4">
                      <p>This is the additional content to display.</p>
                      <h3 className="text-2xl font-semibold">Vote</h3>
                      <div className="w-full h-2 rounded-md my-2 flex">
                        <div className="bg-green-500 w-5/6"></div>
                        <div className="bg-red-500 w-1/6"></div>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-green-500 text-xl md:text-2xl">ACCEPTED</h3>
                          <h4 className="text-green-500">10140 (90%)</h4>
                        </div>
                        <div>
                          <h3 className="text-red-500 text-xl md:text-2xl">REJECTED</h3>
                          <h4 className="text-red-500">303 (10%)</h4>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p>Voter</p>
                        </div>
                        <div>
                          <p>Voting weight</p>
                        </div>
                        <div>
                          <p>Decision</p>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">32125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>
                      <div className="border border-dotted h-1 w-full p-4"></div>

                      <div className="mt-5 text-gray-200">
                        <h3 className="text-lg uppercase ">Description</h3>
                        <p className="text-lg mt-5">SIMPLE SUMMARY</p>
                        <p className="mt-2">Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum criptic until the end of October. Extend prizes and drip for the POOL pool as well.</p>
                        <br />
                        <p className="text-lg mt-5">MOTIVATION</p>
                        <p className="mt-2">The POOL drips for most Ethereum criptic will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be. WHERE CAN I GET SOME? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <br />
                        <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Show more</button>
                        <br />
                        <div className="flex justify-center items-center text-center">
                          <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Add POOL token to MetaMask</button>
                        </div>
                      </div>

                    </div>


                  </>
                )}

                {showContent && (
                  <div className="mt-4">
                    <h1>data not found</h1>
                  </div>
                )}
              </div>

              {/* Right Section (30%) */}
              <div className="col-span-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10">VOTING ENDS IN</h3>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 50 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>



            <div className="p-4 bg-[#212b39] text-white rounded-md grid md:grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="md:text-2xl font-semibold">Card Title</h2>
                <p className="text-gray-600">Card Description</p>

                {!showButtons ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={handleVoteClick}
                  >
                    Vote Now
                  </button>
                ) : (
                  <>
                    <div className="space-x-2 mt-4">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={handleAcceptClick}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={handleRejectClick}
                      >
                        Reject
                      </button>
                    </div>

                    <div className="mt-4">
                      <p>This is the additional content to display.</p>
                      <h3 className="text-2xl font-semibold">Vote</h3>
                      <div className="w-full h-2 rounded-md my-2 flex">
                        <div className="bg-green-500 w-5/6"></div>
                        <div className="bg-red-500 w-1/6"></div>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-green-500 text-xl md:text-2xl">ACCEPTED</h3>
                          <h4 className="text-green-500">10140 (90%)</h4>
                        </div>
                        <div>
                          <h3 className="text-red-500 text-xl md:text-2xl">REJECTED</h3>
                          <h4 className="text-red-500">303 (10%)</h4>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p>Voter</p>
                        </div>
                        <div>
                          <p>Voting weight</p>
                        </div>
                        <div>
                          <p>Decision</p>
                        </div>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">32125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between text-gray-600">
                        <div>
                          <p className="text-lg">0x9aba...0bd8</p>
                        </div>
                        <div>
                          <p className="text-lg">25125</p>
                        </div>
                        <div>
                          <p className="text-lg">ACCEPTED</p>
                        </div>
                      </div>
                      <div className="border border-dotted h-1 w-full p-4"></div>

                      <div className="mt-5 text-gray-200">
                        <h3 className="text-lg uppercase ">Description</h3>
                        <p className="text-lg mt-5">SIMPLE SUMMARY</p>
                        <p className="mt-2">Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum criptic until the end of October. Extend prizes and drip for the POOL pool as well.</p>
                        <br />
                        <p className="text-lg mt-5">MOTIVATION</p>
                        <p className="mt-2">The POOL drips for most Ethereum criptic will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be. WHERE CAN I GET SOME? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <br />
                        <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Show more</button>
                        <br />
                        <div className="flex justify-center items-center text-center">
                          <button className="bg-green-500 rounded-lg px-3 py-1 text-white">Add POOL token to MetaMask</button>
                        </div>
                      </div>

                    </div>


                  </>
                )}

                {showContent && (
                  <div className="mt-4">
                    <h1>data not found</h1>
                  </div>
                )}
              </div>

              {/* Right Section (30%) */}
              <div className="col-span-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10">VOTING ENDS IN</h3>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-xl">
                      <span style={{ "--value": 50 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>


          </>
        )}
        {activeTab === "OFF-CHAIN" && (
          <>
            <div className="border-2 rounded-lg p-4 bg-[#212b39]">
              <div className="md:flex justify-between">
                <div className="">
                  <h3 className="text-xl"><span className="text-white bg-green-500 rounded-2xl p-2">Tip</span> <span className="text-white">Vote gas-free + earn rewards</span></h3>
                </div>
                <div className="md:flex gap-4">
                  <div className="flex gap-2">
                    <div className="text-gray-300">
                      <p>Go to Snapshot</p>
                    </div>
                    <div className="text-white">
                      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-3"><path d="M9.49827 5.50016C9.36569 5.50016 9.23854 5.55283 9.14479 5.64658C9.05103 5.74033 8.99837 5.86748 8.99837 6.00007V8.99934H0.999818V1.0008H3.99909C4.13168 1.0008 4.25883 0.948126 4.35258 0.854375C4.44633 0.760624 4.499 0.63347 4.499 0.500886C4.499 0.368302 4.44633 0.241148 4.35258 0.147397C4.25883 0.0536454 4.13168 0.000976563 3.99909 0.000976562H0.499909C0.367325 0.000976563 0.240171 0.0536454 0.14642 0.147397C0.0526688 0.241148 0 0.368302 0 0.500886V9.49925C0 9.63184 0.0526688 9.75899 0.14642 9.85274C0.240171 9.94649 0.367325 9.99916 0.499909 9.99916H9.49827C9.63086 9.99916 9.75801 9.94649 9.85176 9.85274C9.94552 9.75899 9.99818 9.63184 9.99818 9.49925V6.00007C9.99818 5.86748 9.94552 5.74033 9.85176 5.64658C9.75801 5.55283 9.63086 5.50016 9.49827 5.50016Z" fill="currentColor"></path><path d="M9.6891 0.040394C9.52263 -0.0285935 9.61961 0.0148986 6.99909 0.000901165C6.8665 0.000901165 6.73935 0.05357 6.6456 0.147321C6.55185 0.241072 6.49918 0.368226 6.49918 0.50081C6.49918 0.633394 6.55185 0.760548 6.6456 0.8543C6.73935 0.948051 6.8665 1.00072 6.99909 1.00072H8.29185L4.64651 4.64606C4.59877 4.69217 4.56068 4.74733 4.53448 4.80833C4.50828 4.86932 4.49449 4.93491 4.49392 5.00129C4.49334 5.06767 4.50599 5.1335 4.53112 5.19493C4.55626 5.25637 4.59338 5.31219 4.64032 5.35913C4.68725 5.40606 4.74307 5.44318 4.80451 5.46832C4.86594 5.49345 4.93177 5.5061 4.99815 5.50553C5.06453 5.50495 5.13013 5.49116 5.19112 5.46496C5.25211 5.43876 5.30727 5.40068 5.35338 5.35293L8.99872 1.70809V3.00036C8.99872 3.13294 9.05139 3.26009 9.14514 3.35385C9.23889 3.4476 9.36605 3.50027 9.49863 3.50027C9.63122 3.50027 9.75837 3.4476 9.85212 3.35385C9.94587 3.26009 9.99854 3.13294 9.99854 3.00036C9.98554 0.366834 10.029 0.475815 9.96005 0.310345C9.90908 0.188003 9.81163 0.0909038 9.6891 0.040394Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-gray-300">
                      <p>Go to Snapshot</p>
                    </div>
                    <div className="text-white">
                      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-3"><path d="M9.49827 5.50016C9.36569 5.50016 9.23854 5.55283 9.14479 5.64658C9.05103 5.74033 8.99837 5.86748 8.99837 6.00007V8.99934H0.999818V1.0008H3.99909C4.13168 1.0008 4.25883 0.948126 4.35258 0.854375C4.44633 0.760624 4.499 0.63347 4.499 0.500886C4.499 0.368302 4.44633 0.241148 4.35258 0.147397C4.25883 0.0536454 4.13168 0.000976563 3.99909 0.000976562H0.499909C0.367325 0.000976563 0.240171 0.0536454 0.14642 0.147397C0.0526688 0.241148 0 0.368302 0 0.500886V9.49925C0 9.63184 0.0526688 9.75899 0.14642 9.85274C0.240171 9.94649 0.367325 9.99916 0.499909 9.99916H9.49827C9.63086 9.99916 9.75801 9.94649 9.85176 9.85274C9.94552 9.75899 9.99818 9.63184 9.99818 9.49925V6.00007C9.99818 5.86748 9.94552 5.74033 9.85176 5.64658C9.75801 5.55283 9.63086 5.50016 9.49827 5.50016Z" fill="currentColor"></path><path d="M9.6891 0.040394C9.52263 -0.0285935 9.61961 0.0148986 6.99909 0.000901165C6.8665 0.000901165 6.73935 0.05357 6.6456 0.147321C6.55185 0.241072 6.49918 0.368226 6.49918 0.50081C6.49918 0.633394 6.55185 0.760548 6.6456 0.8543C6.73935 0.948051 6.8665 1.00072 6.99909 1.00072H8.29185L4.64651 4.64606C4.59877 4.69217 4.56068 4.74733 4.53448 4.80833C4.50828 4.86932 4.49449 4.93491 4.49392 5.00129C4.49334 5.06767 4.50599 5.1335 4.53112 5.19493C4.55626 5.25637 4.59338 5.31219 4.64032 5.35913C4.68725 5.40606 4.74307 5.44318 4.80451 5.46832C4.86594 5.49345 4.93177 5.5061 4.99815 5.50553C5.06453 5.50495 5.13013 5.49116 5.19112 5.46496C5.25211 5.43876 5.30727 5.40068 5.35338 5.35293L8.99872 1.70809V3.00036C8.99872 3.13294 9.05139 3.26009 9.14514 3.35385C9.23889 3.4476 9.36605 3.50027 9.49863 3.50027C9.63122 3.50027 9.75837 3.4476 9.85212 3.35385C9.94587 3.26009 9.99854 3.13294 9.99854 3.00036C9.98554 0.366834 10.029 0.475815 9.96005 0.310345C9.90908 0.188003 9.81163 0.0909038 9.6891 0.040394Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-5">In order to vote on SnapShot, you need to have ptPOOL tokens. You can obtain them by depositing your token icon POOL into the POOL Pool . By doing so, you will be eligible to vote gas-free and have a chance to win a weekly prize.</p>
            </div>
            <div className="mt-7">
              <NoData></NoData>
            </div>
          </>
        )}
        {activeTab === "EXECUTABLE" && (
          <div>
            <NoData></NoData>
          </div>
        )}
        {activeTab === "PAST 3" && (
          <div className="p-4 bg-[#212b39] text-white rounded-md  grid grid-cols-7 gap-4 transform transition-transform hover:scale-105 shadow-md hover:shadow-lg">
            <div className="col-span-5">
              <h2 className="text-2xl font-semibold">Card Title</h2>
              <p className="text-gray-600">Card Description</p>

              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
                onClick={handleVoteClick}
              >
                {showContent ? 'Hide Content' : 'Vote Now'}
              </button>

              {showContent && (
                <div className="mt-4">
                  {/* Content to show when 'Vote Now' is clicked */}
                  <p>This is the additional content to display.</p>
                </div>
              )}
            </div>

            {/* Right Section (30%) */}
            <div className="col-span-2">
              <h3 className="text-xl font-semibold">Right Section</h3>
              <p className="text-gray-600">Right Section Description</p>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default CripticItem;