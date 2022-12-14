import Head from 'next/head';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { app, database, db } from '../firebaseConfig';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Result } from 'postcss';

export default function Landing() {
  const auth = getAuth();
  const router = useRouter();
  var firebaseDocument = ' ';
  var accountType = '';
  var databaseRef = '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const options = ['Management', 'Dean', 'Faculty', 'Staff'];
  const [selected, setSelected] = useState(options[0]);

  function LogIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem('Token', response.user.accessToken);

        auth.onAuthStateChanged((user) => {
          if (user) {
            firebaseDocument = user.uid;
            databaseRef = doc(database, 'users', firebaseDocument);
            getData();
          } else {
            console.log('user logged out');
          }
        });
      })
      .catch((err) => {
        alert('LogIn Error, please check your credentials');
        console.log(err.code);
      });
  }

  const pushToPage = (accountType) => {
    console.log(selected);

    if (selected == 'Management' && accountType == 'management') {
      router.push('/accounts/management');
    } else if (selected == 'Dean' && accountType == 'dean') {
      router.push('/accounts/deans');
    } else if (selected == 'Faculty' && accountType == 'faculty') {
      router.push('/accounts/faculty');
    } else {
      router.push('/');
      alert('LogIn Error, please check your credentials');
    }
  };

  useEffect(() => {
    let token = sessionStorage.getItem('Token');
    if (!token) {
      router.push('/');
    }
  }, []);

  const getData = async () => {
    try {
      const docSnap = await getDoc(databaseRef);
      if (docSnap.exists()) {
        accountType = docSnap.data().account_type;
        pushToPage(accountType);
      } else {
        console.log('Document does not exist');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>UNC Dashboard System</title>
        <link rel="icon" href="/logo-favicon.png" />
        <script
          type="text/javascript"
          src="/utils/authentication.js"
          strategy="lazyOnLoad"
        ></script>
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            {' '}
            {/*Login Section*/}
            <div className="text-left font-bold">
              <span className="text-gray-600">UNC</span>{' '}
              <span className="text-true-red">DASHBOARD</span>
            </div>
            <div className="py-10 m-10">
              <h2 className="text-3xl font-bold text-gray-600 mb-2">
                Login to account
              </h2>
              <div className="border-2 w-10 bg-true-red border-true-red inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                {/*Selector*/}
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="block py-2.5 px-0 w-64 text-sm text-gray-500 
                    bg-transparent border-0 border-b-2 border-gray-200 appearance-none 
                  dark:text-gray-400 dark:border-gray-700 focus:outline-none 
                    focus:ring-0 focus:border-gray-200 pee mb-3"
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none text-sm flex-1"
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  ></input>
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none text-sm flex-1"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
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
                <button
                  className="border-2 border-gray-600 rounded-full px-5 py-2 
                    inline-block font-semibold transition ease-in-out delay-100 
                    hover:bg-gray-600 hover:text-white duration-500"
                  onClick={LogIn}
                >
                  Log In
                </button>
              </div>{' '}
              {/*End of Input Section*/}
            </div>
          </div>

          <div className="w-3/5 bg-true-red text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
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
              className="border-2 border-white rounded-full px-5 py-2 
              inline-block font-semibold transition ease-in-out delay-100 
              hover:bg-white hover:text-true-red duration-500"
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
