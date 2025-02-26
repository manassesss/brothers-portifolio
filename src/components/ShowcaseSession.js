'use client';

export default function ShowCaseSession () {
    const youtubeVideos = [
        "HIVJqtR9hmg",
        "GvmgW5ftodU",
        "8xMgQ9iP0AU",
        "0T7EF-wl4uA",
        "6byVPX4tTEA",
        "eD7xGHzJDrc",
        "p-HGVuOUdUQ",
        "yAZTS1Ikx7A",
        "4zCj_qsX9Dw",
      ];
  return (
    <div className="w-full bg-[#1E1E1E] flex flex-col justify-center items-center py-10 relative">
        <div className="text-5xl text-[#FFFFFF] font-black mb-10 pb-2 border-b-2 border-[#B028FE]" >
            <h1>SHOWCASE</h1>
        </div>
        <div className="w-[70%] aspect-video">
            <iframe
                loading="lazy"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/dZCq1g4u33A`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="w-[70%] p-10 grid grid-flow-col grid-rows-3 gap-4">
            {youtubeVideos.map((videoId) => (
                <div key={videoId} className="w-full aspect-video">
                    <iframe
                        loading="lazy"
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div> 
            ))}
        </div>
    </div>
  );
};

