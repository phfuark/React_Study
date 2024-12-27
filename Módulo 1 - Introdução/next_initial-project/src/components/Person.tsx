type Props = {
    name: string;
    urlPhoto?: string;
    roles: string[];
}

export const Person = (props: Props) => {

    const { name, urlPhoto = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg', roles} = props;

    // const name: string = 'Elon Musk';    
    // const urlPhoto: string = 'https://s2-g1.glbimg.com/CVqadfoNh0OBgg4mQNtwE2_wofg=/0x0:1944x1259/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/e/6/9JYLPXRpSBYp095qs5AA/2024-12-05t163819z-1477045286-rc24jbawcvc6-rtrmadp-3-usa-trump-congress-efficiency.jpg'
     return(
        <div className="pb-4">
            <h2>{name}</h2>
            <img 
                src={urlPhoto}
                alt="Elon Musk"
                className="
                    w-60
                    h-60
                    object-cover
                " 
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                {/* <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li> */}
            </ul>
        </div>
    );
}