import React from 'react';

interface cardLinkProps {
  href: string;
  title: string;
  description: string;
}
const CardLink: React.FC<cardLinkProps> = ({ href, title, description }) => {
  return (
    <div>
      <a
        href={href}
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {title}
        </h5>
        <p className="text-2xl font-normal text-gray-700 dark:text-gray-400 ">
          {description}
        </p>
      </a>
    </div>
  );
};
export default CardLink;
