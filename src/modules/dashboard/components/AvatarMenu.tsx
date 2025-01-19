export const AvatarMenu: React.FC = () => {
  return (
    <div className="">
      <img
        src="https://picsum.photos/40"
        alt="User Avatar"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => console.log('Show user menu')}
      />
    </div>
  );
};
