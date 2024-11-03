

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact(){
    return(
        <main className="container max-w-xl mx-auto p-5 ">
            <h2 className="contact text-2xl font-bold mb-4 text-center text-gray-800">Contact me!</h2>

            <form className="form bg-teal-700 rounded-lg p-6 shadow-lg flex flex-col gap-6 ">
                
            <label className="text-gray-700 font-semibold">Name:</label>
            <input type="text" id="name" required  className="w-full p-3 mt-1 border border-gray-300 rounded-md text-base"/>

            <label className="form bg-teal-100 rounded-lg p-6 shadow-lg flex flex-col gap-6 ">Email:</label>
            <input type="email" id="email" required  className="w-full p-3 mt-1 border border-gray-300 rounded-md text-base" />

            <label className="form bg-teal-100 rounded-lg p-6 shadow-lg flex flex-col gap-6 ">Message:</label>
            <textarea name="meassage" id="message" rows={2} required  className="w-full p-3 mt-1 border border-gray-300 rounded-md text-base"></textarea>

            <button type="submit" className="bg-teal-900 text-white rounded-md px-5 py-2 font-medium hover:bg-gray-600 transition-colors">Send</button>
           
           
            </form>

            <div className="mt-10 ">

                <h3 className="text-xl font-semibold mt-10 text-green-800">Alternatively,you can reach me at:</h3>
                <p className="text-green-800 mb-4">Email: <a href="mailto:Mrspraise786@gmail.com" className="text-blue-600 underline">Mrspraise786@gmail.com</a></p>

             <div className="social-links flex items-center gap-4">
                <a href="https://www.facebook.com" className="text-blue-500 hover:underline" >   Facebook
                <FaFacebook /></a>
                <a href="https://www.linkedin.com" className="text-blue-500 hover:underline"> Linkedin
                <FaLinkedin /></a>
                </div>
            </div>

        
        </main>
    )
};