import { useState } from "react"
import styles from "./profile.module.css"
import { url } from "inspector";

interface profileButtonProps{
    
    onClick: () => void;
}

function ProfileImage(){

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [withoutImage, setWithoutImage] = useState<boolean>(false)

    function removeImage(){
        
        if(isEditing && !withoutImage) setWithoutImage(true);
        if(!isEditing && withoutImage) setWithoutImage(false);
        
        setIsEditing(!isEditing);
    }

    function addImage(){
        setWithoutImage(false);
        setIsEditing(false);    
    }

    return (
    <div className={styles.div} 
    style={{
        justifyContent: isEditing? "space-between" : "end",
        backgroundImage: withoutImage? "url('/assets/withoutImage.svg')" : "url('/assets/profileKakashi.svg')"
    }
    }>
        <button className={styles.button} 
        style={
            {display: isEditing? 'flex' : 'none'}
            }
        onClick={addImage}
            >
            <img src= "/assets/confirmEdit.svg"></img>
        </button>

       <button className={styles.button} onClick={removeImage}>
        {
            isEditing? <img src= "/assets/cancelEdit.svg"/> : <img src={"/assets/editPencil.svg"} /> 
        }
       </button>
    </div>
    ) 
}

export { ProfileImage }