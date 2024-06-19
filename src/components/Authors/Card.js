import React from "react";

const AuthorCard = ({ img, title, desc }) => {
    return (
        <div className="border border-indigo-300 rounded-2xl shadow-xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center p-4">
            <img
                src={img}
                className="shadow-xl rounded-lg overflow-hidden border object-cover"
                alt=""
                width={300}
                height={300}
            />
            <div className="mt-8 text-center">
                <h4 className="font-bold text-xl">{title}</h4>
                <p className="mt-2 text-gray-600">{desc}</p>
            </div>
        </div>
    );
};

export default AuthorCard;
