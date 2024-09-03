import { HomeHeader } from "../helper"; 
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('/Group.svg')] bg-[#010014] p-6">
      <HomeHeader
        avatarImage={`/animoji2.png`}
        logo={`/logo.png`}
        avatarName={`franklivani`}
      />

      <div className="flex justify-between gap-6 mt-8">
        {/* New Poll Section */}
        <section className="w-2/3 bg-[#1a1a2e] p-6 rounded-lg border border-[#00ff85]">
          <h2 className="text-lg font-semibold text-[#00ff85] mb-4">New Poll</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Input title here"
              className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
            />

            <textarea
              placeholder="What is the poll about"
              className="w-full h-24 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
            />

            <div className="flex gap-4">
              <input
                type="date"
                placeholder="Start date"
                className="w-1/2 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              />
              <input
                type="date"
                placeholder="End date"
                className="w-1/2 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="time"
                placeholder="Time to end poll"
                className="w-1/2 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              />
              <select
                className="w-1/2 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              >
                <option>Select Visibility</option>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-white">Type of vote</label>
              <input
                type="radio"
                name="voteType"
                className="text-[#00ff85]"
              />
              <span className="text-white">Yes or No?</span>
              <input
                type="checkbox"
                name="multiSelect"
                className="ml-auto text-[#00ff85]"
              />
              <span className="text-white">Multi Select</span>
            </div>

            <p className="text-xs text-[#00ff85]">
              NB: You have to input the multiple voting options on the side bar
            </p>

            <button className="w-full py-3 mt-4 bg-[#00ff85] text-black rounded-md hover:bg-[#00e074]">
              Create Poll
            </button>
          </div>
        </section>

        {/* Multi Select Options Section */}
        <section className="w-1/3 bg-[#1a1a2e] p-6 rounded-lg border border-[#00ff85]">
          <h2 className="text-lg font-semibold text-[#00ff85] mb-4">Multi Select Options</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Add new option"
                className="flex-1 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#00ff85] text-black rounded-md hover:bg-[#00e074]">
                Add Option
              </button>
            </div>

            {/* Example options, these would be dynamic in a real app */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-[#010014] px-4 py-2 border border-[#00ff85] rounded-md">
                <span className="text-white">Lamborghini Huracan</span>
              </div>
              <div className="flex items-center gap-2 bg-[#010014] px-4 py-2 border border-[#00ff85] rounded-md">
                <span className="text-white">Ferrari 488 GTB</span>
              </div>
              <div className="flex items-center gap-2 bg-[#010014] px-4 py-2 border border-[#00ff85] rounded-md">
                <span className="text-white">McLaren 720S</span>
              </div>
              <div className="flex items-center gap-2 bg-[#010014] px-4 py-2 border border-[#00ff85] rounded-md">
                <span className="text-white">Audi R8 V10 Plus</span>
              </div>
            </div>

            <button className="w-full py-3 mt-4 bg-[#00ff85] text-black rounded-md hover:bg-[#00e074]">
              Confirm Options
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
