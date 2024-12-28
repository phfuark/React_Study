import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card = ({children}: Props) => {
    return(
        <div className="border-1 border-gray-50">
            {children}
        </div>
    );
}