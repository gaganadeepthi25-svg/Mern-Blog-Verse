import NavBar from "./NavBar"
const Home = () => {
    const Blogs = [{
        id: 1,
        profile: 'Sarah Johnson',
        title: 'Getting Started with React and Tailwind CSS',
        timeRead: " 5 min read",
        postedOn: "2 hours ago",
        content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to...",
        Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        profile: 'Michael Chen',
        title: 'The Future of Web Development',
        timeRead: " 8 min read",
        postedOn: "5 hours ago",
        content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's...",
        Image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 3,
        profile: 'Emily Rodriguez',
        title: 'Mindful Living in a Digital Age',
        timeRead: " 6 min read",
        postedOn: "1 day ago",
        content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental..",
        Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 4,
        profile: 'David Kim',
        title: 'Building Scalable Node.js Applications',
        timeRead: " 12 min read",
        postedOn: "2 days ago",
        content: "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and...",
        Image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 5,
        profile: 'Lisa Park',
        title: 'Design Systems: A Complete Guide',
        timeRead: " 10 min read",
        postedOn: "3 days ago",
        content: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain...",
        Image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
    }, {
        id: 6,
        profile: 'Alex Thompson',
        title: 'Introduction to Machine Learning',
        timeRead: " 15 min read",
        postedOn: "10 days ago",
        content: "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn...",
        Image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    ]
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50">
            <NavBar/>
            <p className="text-4xl pt-5 font-bold">Welcome to BlogVerse</p>
            <p className="text-lg text-gray-500 mt-4">Discover amazing stories,insights,and idea from our community of writers.</p>
            <div className=" flex gap-10 justify-around mt-5 ">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>

            <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
                {
                    Blogs.map((Blog) => (
                    <div className="w-96 bg-white shadow-lg rounded-lg" key={Blog.id}>
                            <div className="flex relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 " src={Blog.Image} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={Blog.profilePic} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{Blog.profile}</p>
                                    <p className="text-gray-500">{Blog.postedOn} - {Blog.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{Blog.title}</p>
                                <p className="text-gray-600">
                                    {Blog.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Home
