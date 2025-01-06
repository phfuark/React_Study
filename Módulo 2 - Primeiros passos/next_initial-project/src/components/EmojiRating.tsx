export type Props = {
    rate: number;
};

export const EmojiRating = ({ rate }: Props) => {

    if(rate>5){
        rate = 5;
    } else if(rate<0){
        rate = 0
    }

    const rateInt = Math.round(rate);

    const stars = "⭐".repeat(rateInt);

    return (
        <div className="flex flex-col items-center">
            <div>{rate.toFixed(1)}</div>
            <div>{stars}</div>
        </div>
    );
};