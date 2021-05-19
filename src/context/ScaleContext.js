import React, {useState, createContext} from 'react';

export const ScaleContext = createContext();
export const backdropContext = createContext();

export const ScaleProvider = (props) => {    
    const [selectedScale, setSelectedScale] = useState('c'); // needs to be shared

    return (
        <ScaleContext.Provider value={[selectedScale, setSelectedScale]}>
            {props.children}
        </ScaleContext.Provider>
    )
}

export const BackdropProvider = (props) => {
    const [openBackdrop, setOpenBackdrop] = useState(false); // share in context

    return (
        <ScaleContext.Provider value={[openBackdrop, setOpenBackdrop]}>
            {props.children}
        </ScaleContext.Provider>
    ) 
}


{/* <GameContext.Provider
 value={{ name: [name, setName], color: [color, setColor] }}
   >
  {props.children}
</GameContext.Provider>;
and where you are accessing in Child

 const { name, color } = React.useContext(GameContext);
 const [nameValue, setnameValue] = name;
 const [colorValue, setcolorValue] = color; */}




