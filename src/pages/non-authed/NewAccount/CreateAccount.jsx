import React, { useContext,useState,useRef,useEffect} from 'react';
import  {Wrapper,Instruction } from '../login/Login.styles'
import { Link,useNavigate } from 'react-router-dom';
import Google from '../../../assets/Google.png'
import { FaEye, FaEyeSlash,FaInfoCircle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const CreateAccount = () => {
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
    setSuccess('Successfully created an Account')
    setTimeout(() => { 
      navigate('/merchant-dashboard')
    },1200)

  }

  return (
    <Wrapper>
      <section className="">
        <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded outline-none-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
               
            { error && <div role="alert" class="rounded outline-none border-l-4 border-red-500 bg-red-50 p-4">
               <strong class="block font-medium text-red-700"> {error}</strong>
            </div>}
            { success && <div role="alert" class="rounded outline-none border-l-4 border-green-500 bg-green-50 p-4">
               <strong class="block font-medium text-green-700"> {success}</strong>
            </div>}


              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]">
                Create an Account
              </h1>

              <form 
              onSubmit = {handleForm}
              className="space-y-4 md:space-y-6">

                <div className='bg-[skyblue] flex justify-center text-white p-3 rounded outline-none  border-[skyblue]'>
                            <img src={Google} alt="" /> Continue with Google
                </div>
              <p className='pt-8 text-[16px] text-black font-semibold mt-[0]' style={{ marginTop: '0' }}>Sign up with your email address</p>
                <div>
                  <label 
                  for="fullname" 
                  className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">
                    Full Name 
                    </label>
                  <input 
                  type="fullname" 
                  name="fullname" 
                  id="fullname" 
                  
                  autoComplete="off"
                //   value={fullname}
                  onChange = { e => setFullName(e.target.value)}
                //   aria-invalid={validFullname ? "false" : "true"}
                //   aria-describedby="uidnote"
                  onFocus={() => setFullName(true)}
                  onBlur={() => setFullName(false)}
                //   ref = {emailRef}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded outline-none block w-full p-2.5 dark:placeholder-gray-400" placeholder="your name" 
                  required 
                  />
                 
                </div>
                <div>
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
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded outline-none block w-full p-2.5 dark:placeholder-gray-400" placeholder="you@company.com" 
                  required 
                  />
                  { emailFocus && email && !validEmail  ?( <Instruction  id="uidnote">
                            <FaInfoCircle  />
                            Must be a valid mail address.<br />
                           
                        </Instruction >  ) : '' }  
                </div>
                <div>
                  <label 
                  for="email" 
                  className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">
                    Confirm Email 
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
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded outline-none block w-full p-2.5 dark:placeholder-gray-400" placeholder="you@company.com" 
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
                  placeholder="password"
                  value={pwd}
                  onChange = {e => setPwd(e.target.value)} 
                  autoComplete="off"
                  ref={numberInput}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                   className="border border-gray-300 text-gray-900 sm:text-sm rounded outline-none block w-full p-2.5 dark:placeholder-gray-400"
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
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </Instruction > ) : ''  }
                <small className='text-[9px]'> Must have a combination of  uppercase and lowercase, numbers and a special character.</small>
                <button 
                          disabled = {!validEmail || !validPwd  ? true : false}
                type="submit" 
                className={`w-full text-white ] rounded  text-sm px-5 py-2.5 text-center outline-none cursor-pointer ${ !validEmail || !validPwd ? 'cursor-not-allowed bg-[skyblue]' : 'cursor-pointer bg-[#0092EC]'}`}>
                  { loading ? 'loading..':' Create Account'}
                  </button>
                  <small className='text-[12px]'> Already have an account? <Link className='text-[#0092EC]' to='/login'>Sign in</Link></small>
              
              </form>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
  );
}
export default CreateAccount
