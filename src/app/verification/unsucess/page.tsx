import { RxCross2 } from "react-icons/rx";


const page = () => {
  return (
    <div className=" text-center h-[400px]">
        <h1 className=" font-montserrat text-[48px] font-bold text-accentsme uppercase mt-[50px]">SME Strategic Development</h1>
        <div className="flex justify-center mt-[20px]">
            <RxCross2 className="w-[40px] h-[40px] text-red-500 mt-[14px] mr-[20px]"/>
            <p className="tracking-[.5px] text-[20px] mt-[20px]">Email Verification Unsuccessfull</p>
        </div>
    </div>
  )
}

export default page