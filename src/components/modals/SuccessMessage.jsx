import * as React from 'react';
import { useState } from "react";
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Tick_right_green from '../../assets/tick_right_green.png'


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

function Success() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [activeClass, setActiveClass] = useState("");
  const [opens, setOpens] = useState(true);

    return (
        <div>
            <div
                onClick={handleOpen}
                >
                   
                     <button type="submit" value="Send" 
                     className='bg-[#0092EC] hover:bg-sky-300  px-[4rem] py-2 text-white w-[100%] '>
                         
                        Pay Now</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="px-4 font-Inter">
                       <div className="flex justify-center pb-2">
                       <img src={Tick_right_green} alt="tick" />
                       </div>
                        <h3 className='font-semibold text-lg leading-5 tracking-tight text-black text-center'>Success!!</h3>
                   <h3  className="text-center text-[#4C4C4C]">Your subscription was successful</h3>
                        <form className="pt-4 flex flex-col gap-2">
                           <div className='text-center'>
                           <Link
                           to="/merchant-dashboard/SubscriptionHistory">
                            <input
                                type="submit"
                                value="OK"
                                className="bg-[#0092EC] text-white text-center font-semibold py-2 w-2/3 m-auto cursor-pointer"
                            /></Link>
                           </div>
                           <div>
                          
                           </div>

                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
export default Success