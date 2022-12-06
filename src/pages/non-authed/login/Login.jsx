import React, { useContext,useState,useRef,useEffect} from 'react';
import  {Wrapper,Instruction } from './Login.styles'
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Vertical_RGB_294.svg'
import { FaEye, FaEyeSlash,FaInfoCircle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import Google from '../../../assets/Google.png'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Login = () => {
  const navigate = useNavigate()

  const [viewPassword, setViewPassword] = useState('password');
  const numberInput = useRef(null);


  const togglePasswordView = () => {
    if (viewPassword  === 'password') {
      setViewPassword('text')
    } else {
      setViewPassword('password')
    }
  };

  const emailRef = useRef();
  const errRef = useRef();

  const [email,setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)

  useEffect(() => {
   emailRef.current.focus()
  },[])

  useEffect(() => { 
    setValidEmail( EMAIL_REGEX .test(email))
  },[email])

  useEffect(() => { 
    setValidPwd( PWD_REGEX .test(pwd))
  },[pwd])

  useEffect(() => { 
    setError('')
  },[email,pwd])

  const handleForm = e => { 
    e.preventDefault();

    const vE = EMAIL_REGEX .test(email)
    const vP = PWD_REGEX .test(pwd)

    console.log(vE,vP)

    if(!vE || !vP) { 
      setError('invalid entry')
      return
    }
    setLoading(true)
    console.log(email,pwd)
    setSuccess('signed in successfully,you are re-directed to verify your mail')
    setTimeout(() => { 
      navigate('/merchant-dashboard')
    },1200)

  }

  return (
    <Wrapper>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               
            { error && <div role="alert" class="rounded border-l-4 border-red-500 bg-red-50 p-4">
               <strong class="block font-medium text-red-700"> {error}</strong>
            </div>}
            { success && <div role="alert" class="rounded border-l-4 border-green-500 bg-green-50 p-4">
               <strong class="block font-medium text-green-700"> {success}</strong>
            </div>}


              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]">
              Welcome back, Owai
              </h1>

              
              <form 
              onSubmit = {handleForm}
              className="space-y-4 md:space-y-6">
                <div>
                <div className='bg-[skyblue] flex justify-center text-white p-3 rounded  border-[skyblue]'>
                            <img src={Google} alt="" /> Continue with Google
                </div>
              <p className='pt-8 text-[16px] text-black font-semibold mt-[0]' style={{ marginTop: '0' }}>Sign up with your email address</p>
                  <label 
                  for="email" 
                  className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">
                    Email 
                    </label>
                  <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  
                  autoComplete="off"
                  value={email}
                  onChange = { e => setEmail(e.target.value)}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  ref = {emailRef}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Enter your email" 
                  required 
                  />
                  { emailFocus && email && !validEmail  ?( <Instruction  id="uidnote">
                            <FaInfoCircle  />
                            Must be a valid mail address.<br />
                           
                        </Instruction >  ) : '' }  
                </div>
                <div className='relative'>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Password</label>
                  <input 
                  type={viewPassword} 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  value={pwd}
                  onChange = {e => setPwd(e.target.value)} 
                  autoComplete="off"
                  ref={numberInput}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                   className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required />
                  
                   <span class="absolute  inline-flex items-center right-4 top-[55%]">
                <div className="flex justify-end">
                  {viewPassword === 'password' ? (
                    < FaEye 
                    style = {{width:22, height:20,color:'#344054',cursor:'pointer'}}
                    onClick={ togglePasswordView } />
            
                  ) : (
                    < FaEyeSlash 
                    style = {{ width:22, height:20,color:'#344054',cursor:'pointer'}}
                    onClick={ togglePasswordView }  />
                  )
                  }       
                   </div>
              </span>
                </div>
              { pwdFocus && !validPwd  ? (<Instruction  id="pwdnote">
                            <FaInfoCircle  />
                        
                            Must have a combination of  uppercase and lowercase, numbers and a special character.<br />
                            <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </Instruction > ) : ''  }
                <div className="flex  justify-between mt-1">
                    <small className='text-[8px]'> Must have a combination of  uppercase and lowercase, numbers </small>
                  <Link to='/' className="text-[9px] font-medium text-[skyblue] hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
            
                <button 
                          disabled = {!validEmail || !validPwd  ? true : false}
                type="submit" 
                className={`w-full text-white bg-[#0092EC] hover:bg-[skyblue] rounded text-sm px-5 py-2.5 text-center outline-none cursor-pointer ${ !validEmail || !validPwd ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                  { loading ? 'loading..':' Log in'}
                  </button>
                  <small className='text-[12px]'> Don't have an account? <Link className='text-[#0092EC]' to='/'>Sign in</Link></small>
              </form>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
  );
}
export default Login
