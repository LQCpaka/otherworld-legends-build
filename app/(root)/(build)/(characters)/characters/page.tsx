import Image from "next/image"

const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="border md:p-8 md:w-auto w-full p-2">
                <Image src={`/hero_sakari_boss_${index}.png`} alt="hero" width={300} height={300} />
              </div>
            ))}
          </div>
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
