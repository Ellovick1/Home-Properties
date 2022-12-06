import React from 'react'
import Pdf_File from '../../assets/Dashboard-Imags/pdf-file.png'
import './fileupload.css'


function filesUpload() {

    return (
        <div>
            <div className='py-4 h-20 flex px-8 items-center justify-between bg-[#FCFCFC]'></div>

            <div className='bg-white px-10 h-fit lg:h-[80vh]'>
                <div className='text-center py-8'>
                    <h4 className="font-Manrope font-bold text-[#4C4C4C]">Upload Users</h4>
                    <p className="text-[#000] font-600">To <span className='text-[skyblue]'>'add multiple users records'</span> download, fill and upload the <span className='text-[skyblue]'>'user template' </span> file</p>
                </div>

                <div className='flex justify-content-center gap-4'>
                    <div className='h-[260px] w-[50%] rounded-lg border-dashed border-2 grid'>
                        <div className='flex place-items-end justify-center'>
                            <label for="file-upload" class="custom-file-upload">
                                <img src={Pdf_File} alt="img" className="object-cover w-full h-full " />
                            </label>
                            <input id="file-upload" type="file" />

                        </div>
                            <small className='text-center'>Drop your file here or click here to <span className='text-[#0092EC] cursor-pointer'>upload</span></small>
                    </div>

                    <div className='h-[260px] w-[50%] rounded-lg border-dashed border-2 grid'>
                        <div className='flex place-items-end justify-center'>
                            <label for="file-upload" class="custom-file-upload">
                                <img src={Pdf_File} alt="img" className="object-cover w-full h-full " />
                            </label>
                            <input id="file-upload" type="file" />

                        </div>
                            <small className='text-center'>Drop your file here or click here to <span className='text-[#0092EC] cursor-pointer'>upload</span></small>
                    </div>
                </div>
                    <div className=' text-center pt-4'>
                <small className='font-semibold'>Max size of the image should be 8MB, PDF, JPG, PNG</small>
                    </div>

            </div>
        </div>
    )
}

export default filesUpload