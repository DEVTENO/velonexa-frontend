const ButtonDisconnect = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  return (
    <>
      {isOpen ? null : (
        <div className="px-2 xl:block hidden">
          <button className="w-full bg-red-500 text-white py-2">Log out</button>
        </div>
      )}
    </>
  );
};
export default ButtonDisconnect;
