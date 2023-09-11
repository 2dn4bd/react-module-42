import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-4  border-b border-gray-200 pb-5'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;