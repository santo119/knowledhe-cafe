import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 px-10 mt-5 border-b-2
        max-w-7xl mx-auto'>
            <h1 className="text-3xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;