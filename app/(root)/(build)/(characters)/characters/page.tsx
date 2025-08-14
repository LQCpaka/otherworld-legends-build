import Image from "next/image"

const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
        </div>
        <div className="border md:p-8 md:w-auto w-full p-2 ">
          <Image className="md:hidden block" src='/hero_sakari_boss_0.png' alt="hero" width={150} height={150} />
          <Image className="md:block hidden" src='/hero_quanhuying_asura.png' alt="hero" width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default page
