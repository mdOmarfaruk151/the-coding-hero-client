import React from "react";
import { Accordion } from "react-bootstrap";
import FAQCover from "../../.././src/images/FAQ-Cover.png";

const FAQ = () => {
  return (
    <div className="container mb-5">
      <img className="mt-2 rounded mb-2" src={FAQCover} alt="" />
      <h1 className="text-center mb-4">Everything You Need To Know</h1>
    
        
   <Accordion defaultActiveKey="0" flush className=''  >
      <Accordion.Item eventKey="0" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q1: HOW DO I FIGURE OUT WHAT TO LEARN?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
          <p className="text-justify">
       <p >
       The most important thing is that you want to learn something that interests you, because once you start learning, you'll be with this topic for a while. Choosing something just because it's popular or what others are doing isn't the way to go because if you don't have a true interest in it, you'll lose the motivation to learn! Spend some time seriously looking into the different tech career paths before choosing one to go down.
       </p>
<br />
<p className="-mt-5">
As far as what will be in demand in the future—really, all tech careers will be. But in particular I'd say those relating to data science, AI, and cybersecurity will have a notable labor shortage in years to come, so if you have an interest in any of those, definitely go for it.
</p>
<br />
<p className="-mt-5">
If you want to find out more about the various career paths available, head over and listen to the Learn to Code With Me podcast. This episode in particular covers this exact topic 'and you might also want to check out his book on Amazon!.
</p>
<br />
<p className="-mt-5">
Disclaimer: As an Amazon Associate, we earn commissions from qualifying purchases.
</p>
<br />
<p className="-mt-5">
Finally, check out Break Into Tech by Jeremy Schifeling. His masterclass, Find Your Fit, will give you a step-by-step blueprint for finding and positioning yourself for the perfect tech job. If you're not sure where to start, this will help you figure it out!
</p>
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q2: WHICH PROGRAMMING LANGUAGE IS THE BEST TO LEARN?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
          <p className="text-justify">
          <p >
          I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript. The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile apps. It has many use cases, which is why I think it's smart to learn.
          </p>
<br />
<p className="-mt-5">
When it comes to deciding which language or technologies to learn, it all comes down to your end goals. I suggest you check out my interview with David Clinton to help you decide.
</p> 
<br />
<p className="-mt-5">
If you want to get into tech professionally, here's another tip: start by looking up dream job listings, see what skills/experience they're looking for, and then use that to reverse-engineer what you should learn.
</p>
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q3: IS IT POSSIBLE TO DO BOTH GRAPHIC DESIGN AND CODING?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
    <p className="text-justify">
        <p>
        If you have an interest in coding and graphic design, then there's nothing to say you shouldn't learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both areas could be desirable for certain career paths. You could also think about pursuing something in between like UI design, which is a very in-demand career right now!
        </p>
<br />
<p className="-mt-5">
In general, having design skills along with coding skills is helpful. But it's also okay to do one over the other. My advice would be to just get started! You can always change directions later… as long as you're changing directions to the final destination you're looking for!
</p>
<br />
<p className="-mt-5">
Looking for somewhere to learn coding and design skills? Zero to Mastery is a great way to learn full coding AND design boot camp all in one place. Their courses Complete Web Developer and Complete Web & Mobile Designer both come with the ZTM Academy membership.
</p>
        </p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q3: SHOULD I LEARN PYTHON 2 OR PYTHON 3?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
          <p className="text-justify">
          Now, in 2020, it's a no-brainer: Python 3 is definitely the way to go. There are still some situations where picking up Python 2 might be advantageous, or you may just want to learn a little of the history and the differences between Python 2 and 3 for curiosity's sake, but job-wise, Python 3 is the clear winner. Here's a blog post that outlines the reasons why.
          </p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q4: SHOULD I LEARN SKILLS IN SEVERAL AREAS, OR FOCUS ON ONE THING IN PARTICULAR?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
         <p className="text-justify">
        <p>
        Personally, I'd say choose a path and stick to it! Learning too many things at once will slow you down. Here are a few ideas of things you can choose to focus on, and a little bit about each one.
        </p>
<br />
<h5 className="font-bold -mt-5">Data science</h5>
<br />
<p className="-mt-5">
Data science is a good choice because it's a super lucrative area right now, and there are some great data specific bootcamps out there to help you learn (Metis or Springboard are a couple of examples). You could also consider Coursera specializations as a starting point. In terms of languages to learn, Python is a great place to start.
</p>
<br />
<p className="-mt-5">
To get more hands-on experience once you've got some skills built up, you could look for a side gig where you can put them to good use.
</p>
<br />
<p className="-mt-5">
Because data science is such a broad field, the best thing to do would be to spend some time researching it and finding out everything you need to know. Here are a few of my articles on Forbes that might be helpful:
</p> 
<br />
<ul className="-mt-5">
<li>How to Jumpstart a Lucrative Career in Data Science</li>
<li>Dr. Deborah Berebichez on Overcoming Barriers to Achievement for Women in STEM</li>
<li>Everything You Should Know About Data Science: The Century's Hottest Career</li>
</ul>
<br />
<p className="-mt-5">
If you're thinking of transitioning into data science from an unrelated area or with no experience, it might be a little harder than with some other tech jobs, but it can be done. You'll need to know exactly what area you want to go into, so taking online and in-person courses is essential.
</p>
<br />
<p className="-mt-5">
As far as work experience goes, it's a good idea to try to get a job as a data analyst or business analyst or related at first. It is less technical than a data scientist and will be a good starting point. You could even try and get some data-related responsibilities at your current workplace.
</p>
<br />
<p className="-mt-5">
Here are a few podcast episodes that will definitely benefit you if you're looking at starting a career in data science, especially as a complete newbie:
</p>
<ul>
    <li>S4E15: How to Teach Yourself Data Science</li>
    <li>S4E3:  Learning Data Science as a Beginner</li>
    <li>S4E9:  How to Become a Data Scientist Without a Degree</li>
</ul>
<br />
<h5 className="-mt-5 font-bold">Data analysis</h5>
<br />
<p className="-mt-5">
Data analysis basically involves sorting through massive amounts of information and collecting key insights from it. It's important to note that data analysis and data science are not the same. Although they belong to the same family, data science is typically more advanced. That said, data analysis is often a great stepping stone if you want a career in data science.
</p>
<br />
<p className="-mt-5">
To give yourself a good chance of landing a data analysis job, I suggest learning SQL and statistical techniques, as well as brushing up on your math "being great at math will help a lot." To take it further, you could learn Python and/or R.
</p>
<br />
<p className="-mt-5">
You can find out more about what data science is and how you can start learning it in this post, and there's also a podcast episode all about getting started.
</p>
<br />
<p>
<h5 className="font-bold -mt-5">Ruby on Rails</h5>
<p className="">
Ruby on Rails can be helpful for some front-end roles if the company you work for "or you're applying to work for" uses it. If you know you want to stick to front-end development, though, it makes sense to stick with HTML, CSS, JavaScript, and then also learn something like Sass.
</p>
<br />
<p className="-mt-5">
That's not to say that you shouldn't learn Ruby on Rails, though—it'll definitely help you get a job as a developer. But if you're just starting out in front-end development and you need to know what's best to begin with, JavaScript is a great place to start.
</p>
<br />
<h5 className="-mt-5 font-bold">UX</h5>
<br />
<p className="-mt-5">  
UX is an interesting area because it can encompass a whole range of skills—all of which can be a career in themselves! It can include user research and usability testing, information architecture, interface design, and more. These areas can play a lot into other tech careers too, like product management, UI design and development, and of course UX-specific careers.
</p>
<br />
<p className="-mt-5">
A big thing you should consider, though, is that UX-specific careers are hard to break into as a beginner. There aren't a lot of companies looking for junior UX designers, or junior UI designers. Nonetheless, these skills could help you as a front-end developer, web designer, product manager, and more, so it really is a great area to pursue. Even if you don't launch a career in UX specifically, having a background in it can make you a more credible candidate for other roles.
</p>
    </p>
         </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mb-2 '>
        <Accordion.Header ><h5 className=''>Q5: HOW DO YOU CHOOSE BETWEEN TWO COURSES?</h5></Accordion.Header>
        <Accordion.Body className='dark:bg-black dark:text-white'>
         <p className="text-justify">
        <p>
        It can be tough to choose between courses when they all look great! When looking at several courses, I would consider the “joblearn” approach—which course teaches the skills needed to get the jobs "or clients" you want?
        </p>
<br />
<p className="-mt-5">
If you're not sure, think about what you want to do and the kind of work you want to pursue. Maybe try some free courses on the same subject to see if they pique your interest. Then, when you're sure, you'll be more equipped to decide which course offers the right modules that you need to scale up your knowledge.
</p>
         </p>
        </Accordion.Body>
      </Accordion.Item>
   
      
    </Accordion>

      </div>
   
  );
};

export default FAQ;
