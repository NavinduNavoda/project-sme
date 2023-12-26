import { MdFileDownloadDone } from "react-icons/md";

const page = () => {
  return (
    <div className=" text-center h-[400px]">
        <h1 className=" font-montserrat text-[48px] font-bold text-accentsme uppercase mt-[50px]">SME Strategic Development</h1>
        <div className="flex">
            <MdFileDownloadDone className="w-[40px] h-[40px] text-green-500 mt-[10px] mr-[20px]"/>
            <p className="tracking-[.5px] text-[20px] mt-[20px]">Email Verified Successfully</p>
        </div>
    </div>
  )
}

export default page