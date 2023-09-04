"use client"

import { useState } from "react";

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
              className={`${
                activeTab === tabNumber
                  ? "border-b-2 border-green-500 text-white"
                  : "text-gray-500 hover:text-green-500"
              } px-4 py-2 transition-all duration-300 ease-in-out`}
            >
              {tabNumber}
            </button>
          ))}
        </div>
      </div>
      <hr  className="bg-white"/>
      <div className="mt-4">
        {activeTab === "ACTIVE 4" && (
          <>
            <div className="p-4 bg-[#212b39] text-white rounded-md grid grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="text-2xl font-semibold">Card Title</h2>
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
                      <h3 className="text-green-500 text-2xl md:text-3xl">ACCEPTED</h3>
                      <h4 className="text-green-500">10140 (90%)</h4>
                    </div>
                    <div>
                      <h3 className="text-red-500 text-2xl md:text-3xl">REJECTED</h3>
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
                      <p className="text-xl">0x9aba...0bd8</p>
                    </div>
                    <div>
                      <p className="text-xl">32125</p>
                    </div>
                    <div>
                      <p className="text-xl">ACCEPTED</p>
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
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":50}}></span>
                      </span>
                      sec
                    </div>
                  </div>
              </div>
            </div>

            
            <div className="p-4 mt-4 bg-[#212b39] text-white rounded-md grid grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="text-2xl font-semibold">Card Title</h2>
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
                      <h3 className="text-green-500 text-2xl md:text-2xl">ACCEPTED</h3>
                      <h4 className="text-green-500">10140 (90%)</h4>
                    </div>
                    <div>
                      <h3 className="text-red-500 text-2xl md:text-2xl">REJECTED</h3>
                      <h4 className="text-red-500">303 (10%)</h4>
                    </div>
                  </div>

                  <div className="flex justify-between text-gray-500">
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

                  <div className="flex justify-between text-gray-500">
                    <div>
                      <p className="text-xl">0x9aba...0bd8</p>
                    </div>
                    <div>
                      <p className="text-xl">32125</p>
                    </div>
                    <div>
                      <p className="text-xl">ACCEPTED</p>
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
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":50}}></span>
                      </span>
                      sec
                    </div>
                  </div>
              </div>
            </div>

            <div className="p-4 mt-4 bg-[#212b39] text-white rounded-md grid grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="text-2xl font-semibold">Card Title</h2>
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
                      <h3 className="text-green-500 text-2xl md:text-2xl">ACCEPTED</h3>
                      <h4 className="text-green-500">10140 (90%)</h4>
                    </div>
                    <div>
                      <h3 className="text-red-500 text-2xl md:text-2xl">REJECTED</h3>
                      <h4 className="text-red-500 font-normal">303 (10%)</h4>
                    </div>
                  </div>

                  <div className="flex justify-between text-gray-500">
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

                  <div className="flex justify-between text-gray-500">
                    <div>
                      <p className="text-xl">0x9aba...0bd8</p>
                    </div>
                    <div>
                      <p className="text-xl">32125</p>
                    </div>
                    <div>
                      <p className="text-xl">ACCEPTED</p>
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
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":50}}></span>
                      </span>
                      sec
                    </div>
                  </div>
              </div>
            </div>

            

            <div className="p-4 mt-4 bg-[#212b39] text-white rounded-md grid grid-cols-7 gap-4 hover:bg-[#18202a]">
              <div className="col-span-5 border-r-2 pr-3">
                <h2 className="text-2xl font-semibold">Card Title</h2>
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
                      <h3 className="text-green-500 text-2xl md:text-2xl">ACCEPTED</h3>
                      <h4 className="text-green-500">10140 (90%)</h4>
                    </div>
                    <div>
                      <h3 className="text-red-500 text-2xl md:text-2xl">REJECTED</h3>
                      <h4 className="text-red-500">303 (10%)</h4>
                    </div>
                  </div>

                  <div className="flex justify-between text-gray-500">
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

                  <div className="flex justify-between text-gray-500">
                    <div>
                      <p className="text-xl">0x9aba...0bd8</p>
                    </div>
                    <div>
                      <p className="text-xl">32125</p>
                    </div>
                    <div>
                      <p className="text-xl">ACCEPTED</p>
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
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":50}}></span>
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
          </>
        )}
        {activeTab === "EXECUTABLE" && (
          <span className="countdown">
          <span style={{"--value":30}}></span>
          </span>
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