import Button from "./Button";

const ButtonList = () => {
    const buttonLabelList = ["All", "Gaming", "Cricket", "News", "Meditation", "Football", "Running", "Music"];
    return (
        <div>
            {buttonLabelList.map((buttonLabel,index) => <Button key={index} label={buttonLabel}/>)}
        </div>
    );
}

export default ButtonList;