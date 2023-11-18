import Image from "next/image";

export default function Home() {
  return (
    // <div className="bg-slate-100 h-screen flex justify-center items-center   ">
    //   <div className="px-8 w-1/2 -mr-14">
    //     <Image
    //       src={"/facebook-logo.svg"}
    //       height={300}
    //       width={200}
    //       alt="facebook"
    //     />
    //     <p className="ml-5 text-xl">
    //       Facebook helps you connect with and share <br /> with the people you
    //       love
    //     </p>
    //   </div>
    //   <div className="flex flex-col p-6 bg-white rounded-xl w-1/4 shadow-lg shadow-current">
    //     <input
    //       className="my-3 p-2 border border-1 border-gray-400 rounded-lg focus:outline-1 focus:to-blue-400"
    //       type="text"
    //       placeholder="enter email or number"
    //     />
    //     <input
    //       className="my-3 p-2 border border-1 border-gray-400 rounded-lg focus:outline-1 focus:to-blue-400"
    //       type="password"
    //       placeholder="password"
    //     />
    //     <button className="bg-blue-500 font-bold text-white my-2 py-2 rounded-lg hover:bg-blue-600 ">
    //       Log in
    //     </button>
    //     <p className=" text-sm text-blue-400 hover:underline hover:text-blue-600 flex justify-center p-2  cursor-pointer">
    //       forgotten password?
    //     </p>
    //     <span>
    //       <hr />
    //     </span>
    //     <button className="bg-green-500 font-bold text-white my-2 p-2 rounded-lg hover:bg-green-600 w-fit mx-auto mt-4 ">
    //       Create new account
    //     </button>
    //   </div>
    // </div>
    <div className="bg-slate-100 h-screen w-screen flex justify-center items-center gap-7">
      
      <div className="mr-5 ">
        <Image
          src={"/facebook-logo.svg"}
          alt="faceook"
          width={300}
          height={200}
        />
        <p className="ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor <br />
          accusamus ad vel iusto eius tenetur..
        </p>
      </div>
      <div className="bg-white flex flex-col h-[350px] w-[300px] shadow-2xl shadow-current rounded-lg">
        <input
          className="ml-7 mt-6 border border-gray-400 mr-3 p-2 "
          type="text"
          name=""
          id=""
          placeholder="Username"
        />
        <input
          className="ml-7 mt-6 border border-gray-400 mr-3 p-2"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button className="bg-blue-600 p-3 m-12 font-bold text-white rounded-md hover:bg-blue-800">
          Login
        </button>
        <p className="text-sm m-auto -mt-7 underline hover:underline-offset-2 cursor-pointer">
          forgotten password?
        </p>
        <span>
          <hr />
        </span>
        <button className="bg-green-700 p-2 m-auto rounded-md text-white font-bold">
          Create new account
        </button>
      </div>
    </div>
  );
}
