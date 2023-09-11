
import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between p-4  border-b-4 items-center max-w-6xl mx-auto">
             <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;