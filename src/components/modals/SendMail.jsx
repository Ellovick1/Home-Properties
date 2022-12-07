import * as React from 'react';
import { useState } from "react";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import MailSentImage from '../../assets/Mailsent.png'
import SentIcon from '../../assets/sendIcon.png'
import { FiHome } from "react-icons/fi";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: '10px 10px 10px 10px',
    border: 'none'
};

function SendMail() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [activeClass, setActiveClass] = useState("");


    return (
        <div>
            <div onClick={handleOpen} >
              
                <button type="submit" value="Send"
                    className='bg-[#0092EC] hover:bg-sky-300 flex gap-2 justify-center  px-[4rem] py-2 text-white w-96 '>
                      <img src={SentIcon} alt="" /> Send Mail</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="px-4 font-Inter">
                        <div>
                            <img src={MailSentImage} alt=""  className='m-auto'/>
                        </div>
                        <h3 className="font-semibold text-lg leading-5 tracking-tight text-black text-center">Message has been queue. Thank you, will get back to you soon.</h3>
                        <form className="mt-12 flex flex-col gap-2">


                            <div>
                                <Link
                                    to="/merchant-dashboard/allMails"
                                    onClick={() => setActiveClass("message")}
                                    className={`${activeClass === "message"
                                            ? "text-white bg-[#0092EC]"
                                            : "text-[#919191]"
                                        } py-2  flex items-center gap-2 transition-all hover:text-[#0092EC] relative hover:bg-white `}>
                                    <FiHome className="text-xl text-white absolute mx-auto left-0 right-[9rem]" />
                                    <input
                                        type="submit"
                                        value="Check Queue "
                                        className="bg-[skyblue] text-white font-semibold py-3 w-full mx-auto cursor-pointer"
                                    /></Link>
                            </div>
                            <div>
                                <Link
                                    to="/merchant-dashboard"
                                    onClick={() => setActiveClass("merchant-dashboard")}
                                    className={`${activeClass === "merchant-dashboard"
                                            ? "text-white bg-[#0092EC]"
                                            : "text-[#919191]"
                                        } py-2  flex items-center gap-2 transition-all relative hover:text-[#0092EC] hover:bg-white `}>
                                    <FiHome className="text-xl text-white absolute mx-auto left-0 right-[7rem]" />
                                    <input

                                        type="submit"
                                        value="Go Home"
                                        className=" bg-[#0092EC] text-white font-semibold py-3 w-full mx-auto cursor-pointer"
                                    />
                                    {/* <h3 className={`${!open && "hidden"} `}>Overview</h3> */}
                                </Link>
                            </div>

                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default SendMail
