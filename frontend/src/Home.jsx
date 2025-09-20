import NavBar from "./NavBar"
const Home = () => {
    const Blogs = [{
        id: 1,
        profile: 'Sarah Johnson',
        about:'Technology',
        title: 'Getting Started with React and Tailwind CSS',
        timeRead: " 5 min read",
        postedOn: "2 hours ago",
        content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to...",
        Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        profile: 'Michael Chen',
         about:'Technology',
        title: 'The Future of Web Development',
        timeRead: " 8 min read",
        postedOn: "5 hours ago",
        content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's...",
        Image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 3,
        profile: 'Emily Rodriguez',
         about:'Lifestyle',
        title: 'Mindful Living in a Digital Age',
        timeRead: " 6 min read",
        postedOn: "1 day ago",
        content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental..",
        Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 4,
        profile: 'David Kim',
          about:'Backend',
        title: 'Building Scalable Node.js Applications',
        timeRead: " 12 min read",
        postedOn: "2 days ago",
        content: "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and...",
        Image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 5,
        profile: 'Lisa Park',
          about:'Design',
        title: 'Design Systems: A Complete Guide',
        timeRead: " 10 min read",
        postedOn: "3 days ago",
        content: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain...",
        Image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 6,
        profile: 'Alex Thompson',
          about:'AI & ML',
        title: 'Introduction to Machine Learning',
        timeRead: " 15 min read",
        postedOn: "10 days ago",
        content: "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn...",
        Image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    ]
    return (
        <div className="flex flex-col items-center gap-5 min-h-screen">
            <NavBar />
            <h1 className="text-4xl font-bold">Welcome to BlogVerse</h1>
            <p className="text-gray-700 text-xl text-center ">Discover amazing stories,insights,and idea from our community of <br></br> writers.<button className="text-blue-500 hover:underline cursor-pointer ">Sign in</button> to create your own posts and save your favorites.</p>
            <div className=" grid-cols-3 grid ">
                {
                    Blogs.map((Blog) => (<div className=" border-1 border-gray-400 mb-5 ml-30 mt-10 rounded-2xl w-[60%]">
                       
                        <div className="relative">
                            <img className=" rounded-t-2xl " src={Blog.Image} alt="Writing" />
                            <button className="absolute right-4 top-3 bg-white rounded-xl px-0.5 cursor-pointer">Save</button>
                            <button className="absolute right-4 top-3 h-6 w-25 left-2 bg-blue-700 text-sm font-bold text-white rounded-xl px-0.5 cursor-pointer">{Blog.about}</button>
                        </div>
                        <div className="flex items-center p-2 px-4 gap-3">
                            <img className="rounded-full h-10 w-10 mt-5" src={Blog.profilePic} alt="writing" />
                            <div className="mt-5">
                                <p className="font-semibold">{Blog.profile}</p>
                                <p className="text-sm text-gray-500 ">{Blog.postedOn} -{Blog.timeRead}</p>
                            </div>
                        </div>
                        <div className="flex flex-col p-2 px-4 ">
                            <h1 className="text-lg mt-2 text-black font-bold hover:text-blue-600 cursor-pointer">{Blog.title}</h1>
                            <p className="text-sm text-gray-500">{Blog.content}</p>
                        </div>
                        <div className="border-1 text-gray-200 my-2 mx-3 "></div>
                        <div className="flex justify-between ">
                        <p className="text-sm text-gray-500 pl-2 ">{Blog.timeRead}</p>
                        <button className="text-sm text-blue-600 pr-2 mb-5                                                                                                                                   cursor-pointer">Read more</button>
                        </div>



                    </div>

                    ))
                }
            </div>

        </div>
    )
}
export default Home
