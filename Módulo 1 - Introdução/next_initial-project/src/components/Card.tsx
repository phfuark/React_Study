import { ReactNode } from "react";

type Props = {
    phase: string;
    author: string;
}

export const Card = ({phase, author}: Props) => {
    return(
        <div className="w-80 border-2 border-gray-50 text-center">
            <h3 className="text-3xl font-bold italic">{phase}</h3>
            {author && 
                <p className="text-right text-sm">- {author}</p>
            }
        </div>
    );
}