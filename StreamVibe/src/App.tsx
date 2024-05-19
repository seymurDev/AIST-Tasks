import { useState } from "react";
import {movieData} from '../interfaces/index'

const App:React.FC=()=>{
  const searchURL='https://api.themoviedb.org/3/search/movie'
  const firstFilm:movieData={
    adult: false,
    backdrop_path: "/frDS8A5vIP927KYAxTVVKRIbqZw.jpg",
    genre_ids: [14, 28, 80],
    id: 268,
    original_language: "en",
    original_title: "Batman",
    overview: "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
    popularity: 93.271,
    poster_path: "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
    release_date: "1989-06-21",
    title: "Batman",
    video: false,
    vote_average: 7.232,
    vote_count: 7536,
  }
  const [query, setQuery] = useState<string>('');
  const [currentFilm, setCurrentFilm] = useState<movieData|undefined>();
  const [result,setResult]=useState<[]|undefined>()
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalDots = result?result.length:1;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalDots - 1 : prevIndex - 1));
    setCurrentFilm(result?result[currentIndex]:firstFilm)
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSearch= async()=>{
    try {
      const response = await fetch(`${searchURL}?query=${query}&api_key=2fdc0a8f8d251ef725972ec298a5c23f`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.results);
      
      setResult(data.results);
      setCurrentFilm(undefined)
      setCurrentFilm(result?result[currentIndex]:undefined)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setQuery('')
  }
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (result && prevIndex ===totalDots - 1 ? 0 : prevIndex + 1));
    setCurrentFilm(result?result[currentIndex]:firstFilm)
  };
  return (
    <>
      <div className='mx-4 xl:mx-[80px] 2xl:mx-[162px]'>
        <nav className="flex items-center 2xl:mb-[138px] xl:mb-[89px] mb-[74px] xl:mt-[18px] mt-[40px] 2xl:mt-[22px] justify-between">
          <img className="w-[116px] xl:w-[165px] 2xl:w-[200px]" src="./logo.svg" alt="logo" />
          <div className="rounded-[10px] hidden xl:flex font-normal text-sm 2xl:text-lg font-monrope gap-[6px] 2xl:px-[30px] bg-[#0F0F0F] text-[#BFBFBF] border-[3px] border-[#1F1F1F]">
            <div className='cursor-pointer hover:font-medium hover:text-[#FFFF] hover:rounded-[8px] hover:bg-[#1A1A1A] px-4 2xl:px-6 2xl:py-[14px] py-[12px] my-[8px] 2xl:my-[10px]'>Home</div>
            <div className="cursor-pointer hover:font-medium hover:text-[#FFFF] hover:rounded-[8px] hover:bg-[#1A1A1A] px-4 2xl:px-6 2xl:py-[14px] py-[12px] my-[8px] 2xl:my-[10px]">Movies & Shows</div>
            <div className="cursor-pointer hover:font-medium hover:text-[#FFFF] hover:rounded-[8px] hover:bg-[#1A1A1A] px-4 2xl:px-6 2xl:py-[14px] py-[12px] my-[8px] 2xl:my-[10px]">Support</div>
            <div className="cursor-pointer hover:font-medium hover:text-[#FFFF] hover:rounded-[8px] hover:bg-[#1A1A1A] px-4 2xl:px-6 2xl:py-[14px] py-[12px] my-[8px] 2xl:my-[10px]">Subscribtions</div>
          </div>
          <div className="xl:flex hidden">
            <input onInput={handleInputChange} value={query} className={`bg-[#141414] mr-2  border-b-[0.1px] outline-none `} type="text" placeholder="Search movie or show" name="" id="" />
            <div className="flex gap-[14px] 2xl:gap-[30px]">
              <img onClick={handleSearch} className="cursor-pointer w-[24px] 2xl:w-[34px]" src="./search.svg" alt="" />
              <img className="cursor-pointer w-[24px] 2xl:w-[34px]" src="./bell.svg" alt="" />
            </div>
          </div>
        </nav>
        <div className={`truncate  relative rounded-[12px] pt-[35%] xl:h-[709px] bg-cover h-[468px] 2xl:h-[835px]`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${currentFilm?currentFilm.backdrop_path:'/frDS8A5vIP927KYAxTVVKRIbqZw.jpg'})` }}>
          <div className="xl:ml-[40px] xl:pl-[120px] xl:pr-[40%] xl:mr-[40%] relative">
            <p className="text-center text-3xl font-monrope font-bold text-[#FFFFFF]">{currentFilm?currentFilm.title:'Batman'}</p>
            <p className="text-[#999999] text-base font-monrope font-medium">{currentFilm?`${currentFilm.overview.slice(0,100)}`:`${firstFilm.overview.slice(0,100)}...`}</p>
          </div>
          <div className="flex z-20 gap-5 items-center justify-center">
            <button className="flex items-center rounded-[8px] hover:bg-[#ff0000] bg-[#E60000] font-monrope px-[20px] py-[14px] text-[#FFFFFF] font-semibold text-sm"><img className="mr-2" src="./playIcon.svg" alt="" /> Play Now</button>
            <div className="flex gap-2">
              <img className="cursor-pointer border-[1px] border-[#1F1F1F] rounded-[8px] bg-[#0f0f0f] p-[12px]" src="./plus.svg" alt="" />
              <img className="cursor-pointer border-[1px] border-[#1F1F1F] rounded-[8px] bg-[#0f0f0f] p-[12px]" src="./like.svg" alt="" />
              <img className="cursor-pointer border-[1px] border-[#1F1F1F] rounded-[8px] bg-[#0f0f0f] p-[12px]" src="./sound.svg" alt="" />
            </div>
          </div>
          <div className="mt-10 mx-10 flex items-center justify-between">
            <button onClick={()=>handlePrevClick()}><img className="cursor-pointer border-[1px] border-[#1F1F1F] rounded-[8px] bg-[#0f0f0f] p-[12px]" src="./sliderPrev.svg" alt="" /></button>
            <div className="flex gap-1">
            {Array.from({ length: totalDots }).map((_, index) => (
                <div
                  key={index}
                  className={`w-[14px] h-1 ${index === currentIndex ? 'bg-[#e60000]' : 'bg-[#333333]'}`}
                />
              ))}
            </div>
            <button onClick={()=>handleNextClick()}><img className="cursor-pointer rotate-180 border-[1px] border-[#1F1F1F] rounded-[8px] bg-[#0f0f0f] p-[12px]" src="./sliderPrev.svg" alt="" /></button>
          </div>
        </div>
        <div className="border-[1px] 2xl:px-[50px] xl:px-10 relative rounded-xl border-[#1F1F1F] w-full xl:mt-[88px]">
          <div className="bg-[#E60000] left-10 top-[-18px] px-5 py-2 rounded-[6px] absolute text-base font-semibold text-[#FFFFFF]">Movies</div>
          <div className="mt-10 mb-10 items-center flex justify-between">
            <div className="font-manrope text-3xl text-white font-bold">Our Genres</div>
            <div className="xl:flex hidden bg-[#0F0F0F] justify-between p-3 border-[1px] border-[#1A1A1A] rounded-[10px] items-center">
              <button className="mr-3"><img className="cursor-pointer border-[1px] border-[#1F1F1F] rounded-[6px] bg-[#1A1A1A] p-[10px]" src="./sliderPrev.svg" alt="" /></button>
              <div className="flex gap-1">
                <div className={`w-[14px] h-1 bg-[#e60000]`}></div>
                <div className={`w-[14px] h-1 bg-[#333333]`}></div>
                <div className={`w-[14px] h-1 bg-[#333333]`}></div>
                <div className={`w-[14px] h-1 bg-[#333333]`}></div>
              </div>
              <button className="mr-3"><img className="rotate-180 ml-3 cursor-pointer border-[1px] border-[#1F1F1F] rounded-[6px] bg-[#1A1A1A] p-[10px]" src="./sliderPrev.svg" alt="" /></button>
            </div>
          </div>
          <div className="flex">
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default App
