

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title : string;
    description :string ;
    githubLink : string ;
    imageUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, imageUrl }) => {
    return (
        <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-emerald-700 p-4">
      <Image src={imageUrl} width={400} height={500} alt="" className="w-full h-32 object-cover"></Image>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">{title}</div>
          <p className="text-emerald-300 text-base ">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href={githubLink} 
            className="text-green-950 hover:text-blue-700">View on GitHub
          </Link>
        </div>
      </div>



</>
    );
  };
  
  export default ProjectCard;