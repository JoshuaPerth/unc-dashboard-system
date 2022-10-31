import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>UNC Dashboard System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            {' '}
            {/*Login Section*/}
            <div className="text-left font-bold">
              <span className="text-gray-600">UNC</span>{' '}
              <span className="text-red-500">DASHBOARD</span>
            </div>
            <div className="py-10 m-10">
              <h2 className="text-3xl font-bold text-gray-600 mb-2">
                Login to account
              </h2>
              <div className="border-2 w-10 bg-red-500 border-red-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                </div>

                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{' '}
                    Remember Me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-gray-600 rounded-full px-5 py-2 inline-block font-semibold transition ease-in-out delay-100 hover:bg-gray-600 hover:text-white duration-500"
                >
                  Log In
                </a>
              </div>{' '}
              {/*End of Input Section*/}
            </div>
          </div>

          <div className="w-3/5 bg-red-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {' '}
            {/*Request Access Section*/}
            <h2 className="text-4xl font-bold mb-2">Don't Have Access?</h2>
            <div className="border-2 w-10 bg-white border-white inline-block mb-2"></div>
            <p className="mb-10">
              If you're eligible for this content, Click the button below to get
              your access.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-5 py-2 inline-block font-semibold transition ease-in-out delay-100 hover:bg-white hover:text-red-500 duration-500"
            >
              Request Now
            </a>{' '}
            {/*Request Button*/}
          </div>
        </div>{' '}
        {/*end of center div*/}
      </main>{' '}
      {/*end of main*/}
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a className="flex items-center justify-center gap-2 text-xs italic text-gray-400">
          A Project by: Joshua Perth Alviso, Claire Magdalene Delfin, Paulo
          Gabriel Villanea
        </a>
      </footer>
    </div>
  );
}
