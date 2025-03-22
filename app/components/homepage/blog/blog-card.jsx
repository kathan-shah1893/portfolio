// @flow strict
import Image from 'next/image';

function AchievementCard({ achievement }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={achievement.image}
          height={1080}
          width={1920}
          alt={achievement.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <p className="text-sm text-[#16f2b3]">{achievement.date}</p>
        <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
          {achievement.title}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default AchievementCard;
