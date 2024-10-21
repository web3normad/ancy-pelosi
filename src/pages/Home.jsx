import React from "react";

const Homepage = () => {
  return (
    <div className="bg-custom-gradient min-h-screen overflow-hidden">
{/* Hero Section */}

<section
  className="relative text-white py-16 md:py-24 px-4 md:px-16 flex flex-col justify-center items-center"
  style={{
    background: 'linear-gradient(135deg, rgb(85, 223, 227) 0%, rgb(135, 206, 235) 100%)'
  }}
>
  {/* Top Right Text */}
  <div className="absolute bottom-[50%] right-[28%] p-4 text-lg text-white">
    <p>This token leverages the cultural</p>
    <p>phenomenon of meme coins,</p>
    <p>which combine internet humor</p>
    <p>with financial speculation,</p>
    <p>creating a new investment</p>
    <p>paradigm altogether.</p>
  </div>

  {/* Character Image */}
  <div className="relative w-72 h-72 md:w-[700px] md:h-[500px] z-20 self-center">
    <img
      src="src/assets/images/img1.png" // Replace with actual path
      alt="ANCY PEOSI"
      className="w-[900px] h-[700px]"
    />
  </div>

  {/* Title */}
  <div className="flex flex-col justify-center items-center mt-8 z-10">
    <div className="absolute bottom-[50%] left-[29%] p-4">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider text-white">
        ANCY
      </h1>
    </div>
    <div className="absolute bottom-[22%] right-[32%] p-4">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider text-white">
        PEOSI
      </h1>
    </div>
  </div>

  {/* Bottom Left Text */}
  <div className="absolute bottom-[10%] left-[24%] p-4 text-lg text-white">
    <p>Ancy Peosi is a fictional character</p>
    <p>who is a congresswoman with exceptional flair.</p>
    <p>She has had insider trading privileges,</p>
    <p>allowing her to make bold financial moves.</p>
    <p>She used to invest in Solana, but then</p>
    <p>her contacts told her $SUI is the next big thing.</p>
    <p>A 100x return on investment, they predicted.</p>
    <p>Now she's all in on $SUI, no looking back.</p>
  </div>
</section>

      <div className="">
      {/* First Vertical Line with Sections */}
      <section className="relative flex flex-col items-center py-2 px-4 md:px-16 h-full"
        
      >
        {/* Top Image */}
        <div 
  className="absolute top-[-7%] left-0 w-full h-1/2 z-30 bg-cover bg-top bg-no-repeat"
  style={{
    backgroundImage: `url('src/assets/images/bottom.svg')`
  }}
/>
 {/* Bottom Image */}
<div 
  className="absolute top-[41%] left-0 w-screen h-80 z-30 bg-cover bg-top bg-no-repeat -scale-y-90 "
  style={{
    backgroundImage: `url('src/assets/images/top.png')`
  }}
/>

      
      
        {/* First Vertical Line */}
        <div 
  className="absolute top-0 bottom-0 w-36 h-[1100px] rounded-full bg-blue-600 left-1/2 transform -translate-x-1/2 z-30 shadow-lg shadow-black"
></div>
        {/* About Section */}
        <div className="relative z-40 flex flex-col md:flex-row items-center w-full md:w-3/4 mt-12 text-center md:text-left">
          {/* About Heading inside Vertical Line */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xl font-bold px-4 py-2 text-white">
            The About
          </div>

          {/* About Image and Text */}
          <div className="flex flex-row w-full mt-12 justify-center">
            {/* Image on the Left */}
            <div className="w-32 h-32 md:w-[300px] md:h-[300px] overflow-hidden">
              <img
                src="src/assets/images/img5.png" // Replace with actual path
                alt="About Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text on the Right */}
            <div className="ml-8 space-y-7 md:ml-[50%] max-w-sm text-left">
              <p className="text-white text-lg">
                We aim to disrupt the world of politics and cryptocurrency by
                merging memes, humor, and real-world causes. Our token is
                designed for those who want to laugh, speculate, and support
                meaningful causes in a new and exciting way.
              </p>
              <p className="text-white text-lg">
                To create a globally engaged community that uses humor to
                raise awareness for both political discourse and financial
                opportunities. By bridging the gap between pop culture and
                cryptocurrency, we aim to drive meaningful change while having
                fun.
              </p>
              <p className="text-white text-lg">
                Community, Transparency, Humor, and Impact. We believe that
                cryptocurrency doesn't have to be serious to make a serious
                difference. Our token embodies these values in every transaction
                and initiative we pursue.
              </p>
            </div>
          </div>
        </div>

       {/* The Why Section */}
<div className="relative z-40 flex flex-col md:flex-row items-center w-full md:w-3/4 mt-5 text-center md:text-left">
  {/* Why Heading inside Vertical Line */}
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xl font-bold px-4 py-2 text-white">
    The Why
  </div>

  {/* Why Text on the Left and Image on the Right */}
  <div className="flex flex-row justify-between w-full">
    {/* Text Section */}
    <div className="flex flex-col md:w-1/2 pr-4 mt-[-20px]"> 
      <div>
        <h1 className="text-lg font-bold mb-2 text-white">
          To Bring Humor to Political Discourse
        </h1>
        <p className="max-w-sm text-white text-lg">
          In today’s fast-paced world, politics and memes go hand in hand. The Nancy Pelosi meme token bridges that gap by using humor to engage people in political discussions in a lighthearted way. We aim to spark conversations, entertain, and create a space where financial speculation meets satire and fun.
        </p>
      </div>
      <div className="mt-4"> 
        <h1 className="text-lg font-bold mb-2 text-white">
          To Make a Positive Impact
        </h1>
        <p className="max-w-sm text-white text-lg">
          While we embrace the fun side of meme tokens, we also aim to make a positive impact. A portion of every transaction supports charitable initiatives aligned with Nancy Pelosi’s advocacies. By investing in this token, you’re not just speculating—you’re contributing to real-world causes through a unique, meme-driven approach.
        </p>
      </div>
    </div>

    {/* Image Section on the Right */}
    <div className=" absolute right-[26%] top-10 w-32 h-32 md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
      <img
        src="src/assets/images/img2.png" 
        alt="Why Image"
        className="w-full h-full object-cover border-2 border-black"
      />
    </div>
</div>
      </div>

      {/* How to Buy Section */}
      <div className="relative z-40 flex flex-col items-center w-full md:w-1/2 mt-12 text-center">
        {/* How to Buy Heading inside Vertical Line */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xl font-bold px-6 py-2 text-white">
          How to Buy
        </div>
        {/* How to Buy Text */}
        <div className="mt-20">
  <p className="max-w-sm z-20  text-white text-lg">
    The Nancy Pelosi meme token represents
  </p>
  <p className="max-w-sm z-20  text-white text-lg">
    a novel intersection of politics, humor,
  </p>
  <p className="max-w-sm z-20mt-2 text-white text-lg">
    and cryptocurrency.
  </p>
  <p className="max-w-sm z-20  text-white text-lg">
    By engaging a community passionate about both political discourse and financial speculation.
  </p>

        </div>
      </div>
    </section>


    {/* Second Vertical Line  */}
<section className="relative flex flex-col items-center mt-20 h-dvh py-16 px-4 md:px-16 bg-custom-gradient text-white">
  {/* Second Vertical Line */}
  <div className="absolute top-0 bottom-0 w-36 h-[700px] bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2 z-10 shadow-lg shadow-black"></div>
  
  {/* Image on Top of Vertical Line */}
  <div className="absolute top-[20%] left-[43%] transform -translate-x-1/2 z-20">
    <div className="w-32 h-32 md:w-[300px] md:h-[300px] overflow-hidden">
      <img 
        src="src/assets/images/img3.png"
        alt="About Image"
        className="w-full h-full object-cover rounded-full border-2 border-black"
      />
    </div>
  </div>

  {/* Supply Section */}
  <div className="relative z-20 flex flex-col md:flex-row items-center w-full md:w-3/4 mt-12 text-center md:text-left">
    {/* Supply Heading inside Vertical Line */}
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xl font-bold px-4 py-2 text-white">
      Supply
    </div>

    {/* Supply Text */}
    <div className="flex flex-row w-full mt-12 justify-center">
      {/* Text on the Right */}
      <div className="ml-8 space-y-7 md:ml-[50%] max-w-sm text-left">
        <p className="text-white text-lg">
          We aim to disrupt the world of politics and cryptocurrency by
          merging memes, humor, and real-world causes. Our token is
          designed for those who want to laugh, speculate, and support
          meaningful causes in a new and exciting way.
        </p>
        <p className="text-white text-lg">
          To create a globally engaged community that uses humor to
          raise awareness for both political discourse and financial
          opportunities. By bridging the gap between pop culture and
          cryptocurrency, we aim to drive meaningful change while having
          fun.
        </p>
        <p className="text-white text-lg">
          Community, Transparency, Humor, and Impact. We believe that
          cryptocurrency doesn't have to be serious to make a serious
          difference. Our token embodies these values in every transaction
          and initiative we pursue.
        </p>
      </div>
    </div>
  </div>

  <div className="z-20 absolute top-[80%] right-[26%] ">
  <div className="z-20 mt-5 flex justify-center relative">
  <img src="src/assets/images/img7.png" alt="placeholder" className="w-20" />
  <img 
    src="src/assets/images/img6.png" 
    alt="placeholder" 
    className="w-20 absolute top-0 right-[40%]"
  />
</div>
    <p className="text-white text-lg">
      The token symbolizes the intersection of politics and pop culture, embodying the often humorous yet critical commentary on political 
    </p>
  </div>
</section>
</div>

<div className="relative flex flex-col items-center  h-screen py-3 px-4 md:px-16  text-white">
       {/* Top Image */}
       <div 
  className="absolute left-0 top-0 w-screen h-screen z-10 bg-cover bg-top bg-no-repeat shadow-lg shadow-gray-600"
  style={{
    backgroundImage: `url('src/assets/images/footer.png')`
  }}
/>
   {/* Third Vertical Line with Footer Section */}
<section className="relative flex flex-col items-center mt-4 h-dvh py-4 px-4 md:px-16 text-white">
  {/* Vertical Line */}
  <div className="absolute top-16 bottom-0 w-36 h-[400px] bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2 z-10 shadow-lg shadow-black">
    {/* Join Us Heading inside Vertical Line */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-nowrap text-xl font-bold px-2 py-2 z-20 text-white">
      Join Us
    </div>
  </div>

  {/* Image on Top of the Vertical Line */}
  <div className="absolute top-[80%] w-32 h-32 md:w-[300px] md:h-[300px] overflow-hidden z-20">
    <img
      src="src/assets/images/img4.png" 
      alt="Supply Image"
      className="w-full h-full object-cover rounded-full border-2 border-black"
    />
  </div>

  {/* Button and Text */}
  <div className="z-20 absolute top-[410%] space-y-5 flex flex-col items-center"> 
    <p className="max-w-sm text-center mt-4 text-white">
      The token symbolizes the intersection of politics and pop culture, embodying the often humorous yet critical commentary on political dynamics.
    </p>
    <button className="bg-blue-500 py-2 px-4 w-[300px] rounded-full border border-black text-white">
      JOIN US TODAY
    </button>
  </div>
</section>

    <section className="relative flex flex-col items-center mt-20 h-dvh py-16 px-4 md:px-16 text-white">
  {/* Disclaimer Text */}
  <div className="relative z-20 mt-[75%] text-center max-w-lg mx-auto"> {/* Adjusted margin-top from 65% to 75% */}
    <p className="text-lg text-white">
      Disclaimer: This is a fictional project and is not affiliated with any real politician or financial entities. All content is satirical.
    </p>
  </div>
  <img src="src/assets/images/img5.png" alt="" className="w-20 z-20" />
  
  {/* Footer Heading */}
  <footer className="text-center p-4 text-sm text-white z-30">
    &copy; 2024 Ancypeosi. All Rights Reserved.
  </footer>
</section>


  
    </div>
  </div>
);
};

export default Homepage;