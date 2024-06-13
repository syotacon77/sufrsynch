export default function Articles() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-3 gap-8">
        <div className="group h-96 overflow-auto border-x-2 border-t-2 border-black bg-gray-50 p-8">
          <div className="relative mb-4 h-60 w-full bg-gray-200">
            <div className="absolute flex h-8 w-24 items-center justify-center bg-white">
              News
            </div>

            <div className="absolute bottom-0 right-0 flex h-8 w-40 items-center justify-center bg-white">
              May 19, 2024
            </div>
          </div>
          <div className="flex items-center">
            <h6 className="text-center text-3xl duration-300 group-hover:text-[#419dc1]">
              The website has been significantly updated. Please check it out!
            </h6>
          </div>
        </div>

        <div className="h-96 border-x-2 border-t-2 border-black bg-gray-50 p-8">
          <div className="relative mb-4 h-60 w-full bg-gray-200">
            <div className="absolute flex h-8 w-24 items-center justify-center bg-white"></div>

            <div className="absolute bottom-0 right-0 flex h-8 w-40 items-center justify-center bg-white"></div>
          </div>
          <div className="flex items-center">
            <h6 className="text-center text-3xl"></h6>
          </div>
        </div>

        <div className="h-96 border-x-2 border-t-2 border-black bg-gray-50 p-8">
          <div className="relative mb-4 h-60 w-full bg-gray-200">
            <div className="absolute flex h-8 w-24 items-center justify-center bg-white"></div>

            <div className="absolute bottom-0 right-0 flex h-8 w-40 items-center justify-center bg-white"></div>
          </div>
          <div className="flex items-center">
            <h6 className="text-center text-3xl"></h6>
          </div>
        </div>
      </div>
    </div>
  );
}
