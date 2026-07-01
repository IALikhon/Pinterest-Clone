const Profile = () => {
  return (
    <div className="flex flex-col gap-50 bg-white dark:bg-gray-800 dark:text-white mt-25 ">
      <div>
        <h4 className="pr-10 text-2xl font-bold relative pb-4 ml-8">Saved</h4>
        <div className="absolute bottom-120 left-8 h-0.5 w-30 bg-white rounded-full "></div>
      </div>

      <div>
        <h4 className="pr-10 text-2xl font-bold ml-8 relative">Activity</h4>
        <div className="absolute bottom-57 left-8 h-0.5 w-30 bg-white rounded-full "></div>
      </div>
    </div>
  );
};

export default Profile;
